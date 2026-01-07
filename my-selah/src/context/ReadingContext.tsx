import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


type ReadingLogEntry = {
  date: string; 
  completed: boolean;
};

type WeeklySummary = {
  totalDays: number;
  completedDays: number;
  missedDays: number;
  datesCompleted: string[];
};

type ReadingContextType = {
  completedToday: boolean;
  streak: number;
  readingLog: ReadingLogEntry[];
  completeReading: () => void;
  getWeeklySummary: () => WeeklySummary;
};


const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

const STORAGE_KEYS = {
  streak: "@reading_streak",
  completedToday: "@completed_today",
  lastCompletedDate: "@last_completed_date",
  readingLog: "@reading_log",
};

export function ReadingProvider({ children }: { children: ReactNode }) {
  const [completedToday, setCompletedToday] = useState(false);
  const [streak, setStreak] = useState(0);
  const [readingLog, setReadingLog] = useState<ReadingLogEntry[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [
          storedStreak,
          storedCompleted,
          storedDate,
          storedLog,
        ] = await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.streak),
          AsyncStorage.getItem(STORAGE_KEYS.completedToday),
          AsyncStorage.getItem(STORAGE_KEYS.lastCompletedDate),
          AsyncStorage.getItem(STORAGE_KEYS.readingLog),
        ]);

        const today = getToday();

        if (storedStreak !== null) {
          setStreak(Number(storedStreak));
        }

        if (storedLog) {
          setReadingLog(JSON.parse(storedLog));
        }

        if (storedDate) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split("T")[0];

          if (storedDate !== today && storedDate !== yesterdayStr) {
            setStreak(0);
          }
        }

        if (storedDate === today && storedCompleted === "true") {
          setCompletedToday(true);
        } else {
          setCompletedToday(false);
        }
      } catch (error) {
        console.error("Failed to load reading data", error);
      }
    };

    loadData();
  }, []);


  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.streak, streak.toString());
  }, [streak]);

  useEffect(() => {
    AsyncStorage.setItem(
      STORAGE_KEYS.completedToday,
      completedToday.toString()
    );
  }, [completedToday]);

  useEffect(() => {
    AsyncStorage.setItem(
      STORAGE_KEYS.readingLog,
      JSON.stringify(readingLog)
    );
  }, [readingLog]);


  const completeReading = async () => {
    if (completedToday) return;

    const today = getToday();
    const lastDate = await AsyncStorage.getItem(
      STORAGE_KEYS.lastCompletedDate
    );

    let newStreak = 1;

    if (lastDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (lastDate === yesterdayStr) {
        newStreak = streak + 1;
      }
    }

    setCompletedToday(true);
    setStreak(newStreak);

    setReadingLog((prev) => {
      if (prev.some((r) => r.date === today)) return prev;
      return [...prev, { date: today, completed: true }];
    });

    await AsyncStorage.setItem(STORAGE_KEYS.lastCompletedDate, today);
  };

  const getWeeklySummary = (): WeeklySummary => {
    const today = new Date();

    const last7Days = [...Array(7)].map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      return d.toISOString().split("T")[0];
    });

    const completedDays = readingLog.filter((r) =>
      last7Days.includes(r.date)
    );

    return {
      totalDays: 7,
      completedDays: completedDays.length,
      missedDays: 7 - completedDays.length,
      datesCompleted: completedDays.map((d) => d.date),
    };
  };

  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };

  return (
    <ReadingContext.Provider
      value={{
        completedToday,
        streak,
        readingLog,
        completeReading,
        getWeeklySummary,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
}

export function useReading() {
  const context = useContext(ReadingContext);
  if (!context) {
    throw new Error("useReading must be used within ReadingProvider");
  }
  return context;
}
