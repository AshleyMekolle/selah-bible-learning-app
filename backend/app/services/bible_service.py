from app.schemas.scripture import ScriptureResponse
from app.core.settings import settings
from fastapi import HTTPException

class BibleService:
    BASE_URL = "https://api.scripture.api.bible/v1"
   async def get_chapter(self, book: str, chapter: int) -> ScriptureResponse:
        chapter_id = f"{book[:3].upper()}.{chapter}"

        headers ={
            "api-key": settings.bible_api_key
        }

        url = f"{self.BASE_URL}/bibles/{settings.bible_id}/chapters/{chapter_id}/verses"

        async with httpx.AsyncClient() as client:
            response = await client.get(url, headers=headers)
            response.raise_for_status()
            data = response.json()

        verses = []
        for v in data["data"]:
            verses.append({
                "id": v["id"],
                "book": book,
                "chapter": chapter,
                "verse": int(v["id"].split(".")[-1]),
                "text": v["content"].replace("<p>", "").replace("</p>", "")
            })

        return ScriptureResponse(
            reference={
                "book": book,
                "chapter": chapter
            },
            verses = verses,
            translation="KJV"
        )
        if response.status_code != 200:
    raise HTTPException(
        status_code=502,
        detail="Scripture could not be retrieved at this time."
    )
