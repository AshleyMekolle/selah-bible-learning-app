import AppNavigator from "./src/navigation/AppNavigator";
import { ReadingProvider } from "./src/context/ReadingContext";
import { NavigationContainer } from "@react-navigation/native";


export default function App (){
  return(
    <ReadingProvider>
      <NavigationContainer>
            <AppNavigator/>
      </NavigationContainer>
    </ReadingProvider>
  );
}