from fastapi import APIRouter, Query, HTTPException
from app.schemas.scripture import ScriptureResponse
from app.services.bible_service import BibleService

router = APIRouter()
service = BibleService()

@router.get("/", response_model=ScriptureResponse)
async def get_scripture(
    book: str = Query(..., example="Genesis"),
    chapter: int = Query(..., ge=1)
):
    try:
        return await service.get_chapter(book, chapter)
    except Exception:
        raise HTTPException(
            status_code=502,
            detail="Scripture could not be retrieved at this time."
        )

@router.get("/scripture")
async def get_scripture(book: str, chapter: int):
    service = BibleService()
    return await service.get_chapter(book, chapter)
