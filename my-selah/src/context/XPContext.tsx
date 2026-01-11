import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type XPContextType = {
  xp: number;
  level: number;
  addXP: (amount: number) => void;
  getLevelProgress: () => { current: number; next: number; percentage: number };
};

const XPContext = createContext<XPContextType | undefined>(undefined);

const STORAGE_KEYS = {
  xp: "@user_xp",
  level: "@user_level",
};

const XP_PER_LEVEL = 100; // XP needed to level up

export function XPProvider({ children }: { children: ReactNode }) {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [storedXP, storedLevel] = await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.xp),
          AsyncStorage.getItem(STORAGE_KEYS.level),
        ]);

        if (storedXP !== null) {
          setXP(Number(storedXP));
        }
        if (storedLevel !== null) {
          setLevel(Number(storedLevel));
        }
      } catch (error) {
        console.error("Failed to load XP data", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.xp, xp.toString());
  }, [xp]);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.level, level.toString());
  }, [level]);

  const calculateLevel = (totalXP: number) => {
    return Math.floor(totalXP / XP_PER_LEVEL) + 1;
  };

  const addXP = (amount: number) => {
    const newXP = xp + amount;
    const newLevel = calculateLevel(newXP);
    
    setXP(newXP);
    if (newLevel > level) {
      setLevel(newLevel);
    }
  };

  const getLevelProgress = () => {
    const currentLevelXP = xp % XP_PER_LEVEL;
    const nextLevelXP = XP_PER_LEVEL;
    const percentage = (currentLevelXP / nextLevelXP) * 100;
    
    return {
      current: currentLevelXP,
      next: nextLevelXP,
      percentage,
    };
  };

  return (
    <XPContext.Provider
      value={{
        xp,
        level,
        addXP,
        getLevelProgress,
      }}
    >
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  const context = useContext(XPContext);
  if (!context) {
    throw new Error("useXP must be used within XPProvider");
  }
  return context;
}