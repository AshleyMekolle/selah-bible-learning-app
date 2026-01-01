import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY="REFLECTIONS";

export type Reflection ={
    date:string;
    text:string;
}

export async function saveReflection(reflection:Reflection) {
    try{
        const existing = await AsyncStorage.getItem(STORAGE_KEY);
        const reflections = existing ? JSON.parse(existing) : {};

        reflections[reflections.date] = reflection;

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reflections));
    }catch (error){
        console.error("Failed to save reflection", error)
    }
}

export async function getReflectionbyDate(date: string) {
    try{
        const existing = await AsyncStorage.getItem(STORAGE_KEY);

        if(!existing) return null
        const refelections = JSON.parse(existing);

        return refelections[date] || null;

    }catch (error){
        console.error("Failed to load reflection", error)
        return null;
    }
}

export async function getAllReflections(): Promise<Reflection[]> {
    try {
        const existing = await AsyncStorage.getItem(STORAGE_KEY);

        if (!existing) return [];

        const reflectionsMap: Record<string, Reflection> = JSON.parse(existing);
        
        return Object.values(reflectionsMap).sort((a, b) => 
            b.date.localeCompare(a.date)
        );

    } catch (error) {
        console.error("Failed to load reflections", error);
        return [];
    }
}