import { getHardcodedReading } from "../mocks/scripture";
import { DayResponse } from "../navigation/api";

export async function getDayReading(
  day: number,
  start = 1,
  limit = 10
): Promise<DayResponse> {
  const reading = getHardcodedReading(day);
  
  if (!reading) {
    throw new Error("No reading found for this day");
  }
 
  const paginatedVerses = reading.verses.slice(start - 1, start - 1 + limit);
  
  return {
    meta: {
      day: day,
      total_days: 7,
      date: new Date().toISOString().split('T')[0]
    },
    content: {
      scripture: {
        reference: reading.reference,
        verses: paginatedVerses.map((verse, index) => ({
          id: `${day}-${verse.number}`,
          number: verse.number,
          text: verse.text
        })),
        pagination: {
          start: start,
          limit: limit,
          total: reading.verses.length,
          has_more: start + limit - 1 < reading.verses.length
        }
      }
    }
  };
}
