from app.schemas.reading_plan import ReadingPlanListResponse

class ReadingPlanService:
    def list_plans(self) -> ReadingPlanListResponse:
        return ReadingPlanListResponse(
            plans=[
                 {
                    "id": "selah-foundations",
                    "title": "Foundations",
                    "description": "A calm journey through the core of Scripture.",
                    "durationDays": 30
                }
            ]
        )