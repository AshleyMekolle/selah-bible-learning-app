from fastapi import APIRouter
from app.schemas.reading_plan import ReadingPlanListResponse
from app.services.reading_plan_service import ReadingPlanService

router = APIRouter()
service = ReadingPlanService()

@router.get("/", response_model=ReadingPlanListResponse)
def list_reading_plans():
    return service.list_plans()