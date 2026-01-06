import { DayResponse } from "../navigation/api";

export async function getDayReading(
  day: number,
  start = 1,
  limit = 10
): Promise<DayResponse> {
  const res = await fetch(
    `http://127.0.0.1:8000/api/v1/day/${day}?start=${start}&limit=${limit}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch day reading");
  }

  const data = await res.json();
  
  return {
    meta: data.meta,
    content: {
      scripture: {
        reference: data.content.reference,
        verses: data.content.verses,
        pagination: data.content.pagination
      }
    }
  };
}