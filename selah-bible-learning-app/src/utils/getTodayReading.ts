import { readingPlan } from '../data/readingPlan';
import { getReadingProgress } from "./readingProgressStorage";

export async function getTodayReading() {
  const progress = await getReadingProgress();
  const index = progress.currentIndex;

  return readingPlan[index] || null;
}
