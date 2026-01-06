import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'reading_analytics';

export async function updateAnalytics(day: number) {
  const today = new Date().toDateString();
  const raw = await AsyncStorage.getItem(KEY);

  let data = raw
    ? JSON.parse(raw)
    : {
        daysRead: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastReadDate: null,
      };

  if (data.lastReadDate !== today) {
    data.daysRead += 1;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (data.lastReadDate === yesterday.toDateString()) {
      data.currentStreak += 1;
    } else {
      data.currentStreak = 1;
    }

    data.longestStreak = Math.max(
      data.longestStreak,
      data.currentStreak
    );

    data.lastReadDate = today;
  }

  await AsyncStorage.setItem(KEY, JSON.stringify(data));
}
