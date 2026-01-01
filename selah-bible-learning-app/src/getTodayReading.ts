import { readingPlan } from './readingPlan';
import { getReadingProgress } from "./ReadingProgressStorage";

export async function getTodayReading() {
  const progress = await getReadingProgress();
  const index = progress.currentIndex;

  return readingPlan[index] || null;
}
