import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY="REFLECTIONS";

export type Reflection ={
    date:string;
    text:string;
}

export async function saveReflection(reflection:Reflection) {
    try{
        const existing = await AsyncStorage.getItem(STORAGE_KEY);
        const refelections = existing ? JSON.parse(existing) : {};

        refelections[refelections.date] = reflection;

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(refelections));
    }catch (error){
        console.error("Failed to save refelection", error)
    }
}

export async function getReflectionbyDate(date: string) {
    try{
        const existing = await AsyncStorage.getItem(STORAGE_KEY);

        if(!existing) return null
        const refelections = JSON.parse(existing);

        return refelections[date] || null;

    }catch (error){
        console.error("Failed to load refelection", error)
        return null;
    }
}