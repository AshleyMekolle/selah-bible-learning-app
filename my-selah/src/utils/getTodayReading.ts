import { readingPlan } from '../data/readingPlan';
import { getReadingProgress } from "../utils/ReadingProgressStorage";

export async function getTodayReading() {
  const progress = await getReadingProgress();
  const index = progress.currentIndex;

  return readingPlan[index] || null;
}
