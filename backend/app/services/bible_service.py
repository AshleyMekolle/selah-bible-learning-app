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

        for attempt in range(self.MAX_RETRIES):
            try:
                async with httpx.AsyncClient(timeout=self.TIMEOUT) as client:
                    response = await client.get(url)

                if response.status_code != 200:
                    raise BibleServiceError("Upstream error")

                data = response.json()

                verses = data.get("verses", [])
                if not verses:
                    raise BibleServiceError("No verses returned")

                first = verses[0]

                return {
                    "book": first["book_name"],
                    "chapter": first["chapter"],
                    "translation": data.get("translation_name", "Unknown"),
                    "verses": [
                        {
                            "verse": v["verse"],
                            "text": v["text"].strip()
                        }
                        for v in verses
                    ]
                }

            except (httpx.TimeoutException, httpx.ConnectError):
                await asyncio.sleep(1.5)

        raise BibleServiceError(
            "Scripture service is temporarily unavailable"
        )
