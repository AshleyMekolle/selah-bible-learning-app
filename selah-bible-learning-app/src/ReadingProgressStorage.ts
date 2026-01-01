import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "READING_PROGRESS";

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
