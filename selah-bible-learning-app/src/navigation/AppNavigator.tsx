import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProgressScreen from "../screens/ProgressScreen";
import StudyScreen from "../screens/StudyScreen";
import ReadScreen from "../screens/ReadScreen";
import ReflectScreen from "../screens/ReflectScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Progress" component={ProgressScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Reflect" component={ReflectScreen}/>
            <Stack.Screen name="Read" component={ReadScreen}/>
            <Stack.Screen name="Study" component={StudyScreen}/>
        </Stack.Navigator>
    );
}