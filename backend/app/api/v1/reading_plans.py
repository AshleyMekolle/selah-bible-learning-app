from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime
from app.services.reading_plan_service import ReadingPlanService

router = APIRouter()
service = ReadingPlanService()

@router.get("/")
def list_reading_plans():
    plans = service.list_plans()
    return {"plans": plans, "count": len(plans)}

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