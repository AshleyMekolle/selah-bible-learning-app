from app.schemas.scripture import ScriptureResponse

class BibleService:
    def get_chapter(self, book: str, chapter: int) -> ScriptureResponse:
        return ScriptureResponse(
            reference={
                "book": book,
                "chapter": chapter
            },
            verses=[
                {
                    "id": "GEN.1.1",
                    "book": book,
                    "chapter": chapter,
                    "verse": 1,
                    "text": "In the beginning God created the heaven and the earth."
                },
                {
                    "id": "GEN.1.2",
                    "book": book,
                    "chapter": chapter,
                    "verse": 2,
                    "text": "And the earth was without form, and void; and darkness was upon the face of the deep."
                }
            ],
            translation="KJV"
        )