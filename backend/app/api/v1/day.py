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