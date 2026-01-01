import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ReadingContextType ={
    completedToday: boolean;
    streak: number;
    completeReading: () => void;
};

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);
const STORAGE_KEYS ={
    streak: "@reading_streak",
    completedToday: "@completed_today",
    lastCompletedDate: "@last_completed_date"
}

export function ReadingProvider ({children} : {children: ReactNode}){
    const [completedToday, setCompletedToday] = useState(false);
    const [streak, setStreak] = useState(0)

    useEffect(() =>{
        const loadData = async () =>{
            try{
                const storedStreak = await AsyncStorage.getItem(
                    STORAGE_KEYS.streak
                );
                const storedCompleted = await AsyncStorage.getItem(
                    STORAGE_KEYS.completedToday
                );
                const storedDate = await AsyncStorage.getItem(
                    STORAGE_KEYS.lastCompletedDate
                )
                const today = getToday();

                if (storedStreak !== null){
                    setStreak(Number(storedStreak));
                }

                if (storedDate === today && storedCompleted === "true"){
                setCompletedToday(true);
                }else{
                    setCompletedToday(false);
                }
            } catch (error){
                console.error("Failed to load reading data", error);
            };
            }

            loadData();
        }, []);

        //Persist the user's streak

    useEffect (() =>{
        AsyncStorage.setItem(STORAGE_KEYS.streak, streak.toString());
    }, [streak])

    //Persist the user's completion

    useEffect (() =>{
        AsyncStorage.setItem(STORAGE_KEYS.completedToday, completedToday.toString());
    }, [completedToday])

    const completeReading = async () =>{
        if (!completedToday){
            const today = getToday();
            setCompletedToday(true);
            setStreak((prev) => prev + 1)

            await AsyncStorage.setItem(
                STORAGE_KEYS.lastCompletedDate,
                today
            )
        }
    };

    const getToday = () =>{
        return new Date().toISOString().split("T")[0];
    }

    return(
        <ReadingContext.Provider
        value={{completedToday, streak, completeReading}}>
            {children}
        </ReadingContext.Provider>
    )
}

export function useReading(){
    const context = useContext(ReadingContext);
    if(!context){
        throw new Error("useReading must be used within ReadingProvider")
        
    }
    return context;
}