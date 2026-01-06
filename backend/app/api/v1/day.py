# from fastapi import APIRouter, Path, HTTPException
# from fastapi import Query
# from app.services.reading_plan_service import ReadingPlanService
# from app.services.devotion_service import DevotionService
# from app.services.bible_service import BibleService
# from app.core.cache import get_cache, set_cache
# from datetime import datetime

# router = APIRouter()

# reading_plan_service = ReadingPlanService()
# devotion_service = DevotionService()
# bible_service = BibleService()


# @router.get("/{day}")
# async def get_day_reading(
#      day: int = Path(..., ge=1, le=365),
#      start: int = Query(1, ge=1),
#      limit: int = Query(10, ge=1, le=50)
# ):
#     content = devotion_service.get_day_reading(day, start, limit)
#     return {
#         "meta": {
#             "day": day,
#             "cached": False,
#             "generated_at": datetime.utcnow().isoformat()
#         },
#         "content": content
#     }
#     try:
#         reading = reading_plan_service.get_reading_for_day(day)
#         book = reading["book"]
#         chapter = reading["chapter"]

#         scripture = await bible_service.get_chapter(book, chapter)

#         devotion = devotion_service.get_devotion_for_day(day)

#         cache_key = f"day:{day}"
#         cached = get_cache(cache_key)
#         if cached:
#             return cached


#         response = {
#         "day": day,
#         "reading": {
#             "book": book,
#             "chapter": chapter
#         },
#         "scripture": scripture,
#         "theme": devotion["theme"],
#         "tags": devotion["tags"],
#         "selah_reflection": devotion["selah_reflection"]
#         }

#         set_cache(cache_key, response)
#         return response
    
#     except ValueError as e:
#         raise HTTPException(status_code=404, detail=str(e))
    
#     except Exception:
#         raise HTTPException(
#             status_code = 502,
#             detail ="Daily reading could not be retrieved at this time."
#         )
    

from fastapi import APIRouter, Query, Path
from datetime import datetime
from app.services.devotion_service import DevotionService

router = APIRouter()
service = DevotionService()

@router.get("/{day}")
async def get_day_reading(
    day: int = Path(..., ge=1, le=365),
    start: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=50),
):
    content = service.get_day_reading(day, start, limit)

    return {
        "meta": {
            "day": day,
            "cached": False,
            "generated_at": datetime.utcnow().isoformat()
        },
        "content": content
    }
