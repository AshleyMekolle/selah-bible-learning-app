import json
import requests
from pathlib import Path

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "daily_devotion.json"

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
    
    def load_scripture_for_day(self, day: int) -> dict:
        reading_plan = self.get_reading_plan_for_day(day)
        if reading_plan:
            book = reading_plan["book"]
            chapter = reading_plan["chapter"]
            return self.get_real_scripture(book, chapter)
        else:
            return self.get_default_scripture(day)
    
    def get_reading_plan_for_day(self, day: int) -> dict:
        reading_plan_path = Path(__file__).resolve().parent.parent / "data" / "reading_plan.json"
        with open(reading_plan_path, "r", encoding="utf-8") as f:
            plans = json.load(f)
        return plans.get(str(day))
    
    def get_real_scripture(self, book: str, chapter: int) -> dict:
        try:
            response = requests.get(
                f"http://127.0.0.1:8000/api/v1/scripture/?book={book}&chapter={chapter}",
                timeout=5
            )
            if response.status_code == 200:
                data = response.json()
                return {
                    "reference": f"{book} {chapter}",
                    "verses": [
                        {"id": i+1, "number": verse["verse"], "text": verse["text"]}
                        for i, verse in enumerate(data["verses"])
                    ]
                }
        except:
            pass
        
        return self.get_default_scripture(1)
    
    def get_default_scripture(self, day: int) -> dict:
        return {
            "reference": f"John {day}:1-10",
            "verses": [
                {"id": i, "number": i, "text": f"Verse {i} for day {day}. This is the word of God."}
                for i in range(1, 21)
            ]
        }
    
    def get_day_reading(self, day: int, start: int, limit: int):
        scripture = self.load_scripture_for_day(day)
        verses = scripture["verses"]
        total = len(verses)
        paginated = verses[start - 1 : start - 1 + limit]
        scripture["verses"] = paginated
        scripture["pagination"] = {
            "start": start,
            "limit": limit,
            "total": total,
            "has_more": start - 1 + limit < total,
            "reference": scripture["reference"]
        }
        return scripture