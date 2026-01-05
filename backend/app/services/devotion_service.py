import json
from pathlib import Path

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "daily_devotion"

class DevotionService:
    def __init__(self):
        with open(DATA_PATH, "r", encoding="utf-8") as f:
            self.devotions = json.load(f)
    
    def get_devotion_for_day(self, day: int) -> dict:
        return self.devotions.get(str(day),{
            "theme": None,
            "tags": [],
            "selah_reflection": None
        })