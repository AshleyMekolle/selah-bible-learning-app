import AppNavigator from "./src/navigation/AppNavigator";
import { ReadingProvider } from "./src/context/ReadingContext";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { View } from "react-native";


export default function App (){
   const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
   })

   if(!fontsLoaded){
    return <View/>
   }
  return(
    <ReadingProvider>
      <NavigationContainer>
            <AppNavigator/>
      </NavigationContainer>
    </ReadingProvider>
  );
}