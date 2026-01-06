import json
from pathlib import Path

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "reading_plan.json"

class ReadingPlanService:
    def __init__(self):
        with open(DATA_PATH, "r", encoding="utf-8") as f:
            self.plan = json.load(f)
    
    def get_reading_for_day(self, day: int) -> dict:
        day_key = str(day)
        if day_key not in self.plan:
            raise ValueError("Reading plan not found for this day")
        return self.plan[day_key]
    
    def list_plans(self):
        return [
            {
                "id": 1,
                "name": "Through the Bible in a Year",
                "description": "Read the entire Bible in 365 days",
                "duration_days": 365,
                "total_chapters": 1189,
                "is_featured": True
            },
            {
                "id": 2,
                "name": "New Testament in 90 Days",
                "description": "Read the New Testament in 3 months",
                "duration_days": 90,
                "total_chapters": 260,
                "is_featured": False
            }
        ]