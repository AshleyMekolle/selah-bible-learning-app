from fastapi import APIRouter, Query, HTTPException
from app.services.bible_service import BibleService, BibleServiceError

router = APIRouter()
bible_service = BibleService()


@router.get("/")
async def get_scripture(
    book: str = Query(...),
    chapter: int = Query(..., ge=1),
):
    try:
        return await bible_service.get_chapter(book, chapter)
    except BibleServiceError as e:
        raise HTTPException(status_code=503, detail=str(e))
