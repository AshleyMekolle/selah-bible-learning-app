import { getTodayReading as getHardcodedTodayReading } from "../mocks/scripture";

export function getTodayReading() {
  const reading = getHardcodedTodayReading();
  
  return {
    book: reading.book,
    chapter: reading.chapter,
    testament: getTestament(reading.book),
    reference: reading.reference
  };
}

function getTestament(book: string): "old" | "new" {
  const oldTestamentBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
    "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles",
    "Ezra", "Nehemiah", "Esther", "Job", "Psalm", "Proverbs",
    "Ecclesiastes", "Song of Songs", "Isaiah", "Jeremiah",
    "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel",
    "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk",
    "Zephaniah", "Haggai", "Zechariah", "Malachi"
  ];
  
  return oldTestamentBooks.includes(book) ? "old" : "new";
}