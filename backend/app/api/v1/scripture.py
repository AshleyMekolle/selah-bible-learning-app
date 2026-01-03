from fastapi import APIRouter, Query
from app.schemas.scripture import ScriptureResponse
from app.services.bible_service import BibleService

router=APIRouter()
bible_service = BibleService()

@router.get("/", response_model=ScriptureResponse)
async def get_scripture(
    book: str= Query(..., example="Genesis"),
    chapter: int = Query(..., ge=1)
):
    return await bible_service.get_chapter(book, chapter)