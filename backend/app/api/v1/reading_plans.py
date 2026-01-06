from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

from app.schemas.reading_plan import ReadingPlanListResponse
from app.services.reading_plan_service import ReadingPlanService

router = APIRouter()
service = ReadingPlanService()

@router.get("/", response_model=ReadingPlanListResponse)
def list_reading_plans():
    return service.list_plans()


class CompletionPayload(BaseModel):
    day: int
    completed_at: datetime


@router.post("/reading/complete")
async def mark_complete(payload: CompletionPayload):
    return {
        "status": "completed",
        "day": payload.day,
        "timestamp": payload.completed_at
    }
