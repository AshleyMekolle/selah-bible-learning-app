import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "READING_PROGRESS";
const KEY = 'completed_days';

export async function getReadingProgress() {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  return stored
    ? JSON.parse(stored)
    : { currentIndex: 0, lastReadDate: null };
}

export async function advanceReadingPlan() {
  const progress = await getReadingProgress();

  const nextIndex = progress.currentIndex + 1;

  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      currentIndex: nextIndex,
      lastReadDate: new Date().toISOString().split("T")[0],
    })
  );
}


export async function markDayComplete(day: number) {
  const raw = await AsyncStorage.getItem(KEY);
  const completed = raw ? JSON.parse(raw) : [];
  if (!completed.includes(day)) {
    completed.push(day);
    await AsyncStorage.setItem(KEY, JSON.stringify(completed));
  }
}

export async function isDayCompleted(day: number): Promise<boolean> {
  const raw = await AsyncStorage.getItem(KEY);
  const completed = raw ? JSON.parse(raw) : [];
  return completed.includes(day);
}

