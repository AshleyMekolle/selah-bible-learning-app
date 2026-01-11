import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AvatarContextType = {
  avatar: string;
  setAvatar: (emoji: string) => void;
};

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

const STORAGE_KEY = "@selah_avatar";

export function AvatarProvider({ children }: { children: ReactNode }) {
  const [avatar, setAvatarState] = useState("🕊️");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(stored => {
      if (stored) setAvatarState(stored);
    });
  }, []);

  const setAvatar = async (emoji: string) => {
    setAvatarState(emoji);
    await AsyncStorage.setItem(STORAGE_KEY, emoji);
  };

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatar() {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatar must be used within AvatarProvider");
  }
  return context;
}
