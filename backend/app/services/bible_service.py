import httpx
import asyncio

class BibleServiceError(Exception):
    pass


class BibleService:
    BASE_URL = "https://bible-api.com"
    TIMEOUT = 15.0
    MAX_RETRIES = 3

    async def get_chapter(self, book: str, chapter: int):
        url = f"{self.BASE_URL}/{book} {chapter}"

        last_exception = None

        for attempt in range(1, self.MAX_RETRIES + 1):
            try:
                async with httpx.AsyncClient(timeout=self.TIMEOUT) as client:
                    response = await client.get(url)

                if response.status_code != 200:
                    raise BibleServiceError(
                        f"Upstream returned {response.status_code}"
                    )

                data = response.json()

                return {
                    "book": data["book_name"],
                    "chapter": data["chapter"],
                    "translation": data["translation_name"],
                    "verses": [
                        {
                            "verse": v["verse"],
                            "text": v["text"].strip()
                        }
                        for v in data["verses"]
                    ]
                }

            except (httpx.TimeoutException, httpx.ConnectError) as e:
                last_exception = e
                await asyncio.sleep(1.5 * attempt)  # backoff
            except Exception as e:
                last_exception = e
                break

        raise BibleServiceError(
            "Scripture service is temporarily unavailable. Please try again later."
        ) from last_exception
