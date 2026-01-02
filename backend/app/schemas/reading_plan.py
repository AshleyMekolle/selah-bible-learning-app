from pydantic import BaseModel
from typing import List

class ReadingPlan(BaseModel):
    id: str
    title: str
    description: str
    durationDays: int

class ReadingPlanListResponse(BaseModel):
    plans: List[ReadingPlan]