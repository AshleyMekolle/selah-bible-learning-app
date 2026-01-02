from fastapi import APIRouter
from app.schemas.reading_plan import ReadingPlanListResponse

router = APIRouter()

@router.get("/", response_model=ReadingPlanListResponse)
def list_reading_plans():
    return {"plans": [
        {
            "id": "selah",
            "title": "Foundations",
            "description": "A calm journey through the Scripture",
            "durationDays": 30
        }
    ]
}