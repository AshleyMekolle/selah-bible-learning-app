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