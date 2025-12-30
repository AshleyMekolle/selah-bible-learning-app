import Constants from "expo-constants";

const BASE_URL = "https://api.scripture.api.bible/v1";

const API_KEY = Constants.expoConfig?.extra?.BIBLE_API_KEY;
const BIBLE_ID = Constants.expoConfig?.extra?.BIBLE_ID;

export async function fetchChapter(bookId: string, chapter: number) {
  if (!API_KEY || !BIBLE_ID) {
    throw new Error("Bible API configuration missing");
  }

  const response = await fetch(
    `${BASE_URL}/bibles/${BIBLE_ID}/chapters/${bookId}.${chapter}/verses`,
    {
      headers: {
        "api-key": API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch scripture");
  }

  return response.json();
}
