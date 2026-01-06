from fastapi import APIRouter, Path, HTTPException
from app.services.reading_plan_service import ReadingPlanService
from app.services.devotion_service import DevotionService
from app.services.bible_service import BibleService

router = APIRouter()

reading_plan_service = ReadingPlanService()
devotion_service = DevotionService()
bible_service = BibleService()


@router.get("/{day}")
async def get_day_reading(
    day: int = Path(..., ge=1, le=365, description="Day of the reading plan (1-365)")
):
    try:
        reading = reading_plan_service.get_reading_for_day(day)
        book = reading["book"]
        chapter = reading["chapter"]

        scripture = await bible_service.get_chapter(book, chapter)

        devotion = devotion_service.get_devotion_for_day(day)

        return{
            "day": day,
            "reading": {
                "book": book,
                "chapter": chapter
            },
            "scripture": scripture,
            "theme": devotion["theme"],
            "tags": devotion["tags"],
            "selah_reflection": devotion["selah_reflection"]
        }
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    
    except Exception:
        raise HTTPException(
            status_code = 502,
            detail ="Daily reading could not be retrieved at this time."
        )