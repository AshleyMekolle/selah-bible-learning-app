import * as Notifications from "expo-notifications"
import { Platform } from "react-native"

export async function setupNotifications(){
    const {status} = await Notifications.requestPermissionsAsync();

    if (status !== "granted") return;

    if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("daily-reading", {
      name: "Daily Reading",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

}

export async function scheduleDailyReminder() {
  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Selah",
      body: "Take a moment with today's Scripture.",
    },
    trigger: {
      hour: 6,
      minute: 0,
      repeats: true,
    } as any,
  });

}