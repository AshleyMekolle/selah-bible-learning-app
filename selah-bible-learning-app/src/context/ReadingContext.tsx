import { createContext, useContext, useState, ReactNode } from "react";

type ReadingContextType ={
    completedToday: boolean;
    streak: number;
    completeReading: () => void;
};

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export function ReadingProvider ({children} : {children: ReactNode}){
    const [completedToday, setCompletedToday] = useState(false);
    const [streak, setStreak] = useState(0)

    const completeReading = () =>{
        if (!completedToday){
            setCompletedToday(true);
            setStreak((prev) => prev + 1)
        }
    };

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