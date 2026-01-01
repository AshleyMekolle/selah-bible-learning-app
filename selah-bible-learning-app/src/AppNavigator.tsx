import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ProgressScreen from "./ProgressScreen";
import StudyScreen from "./StudyScreen";
import ReadScreen from "./ReadScreen";
import ReflectScreen from "./ReflectScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReflectionHistoryScreen from "./ReflectionHistory";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen as any}/>
            <Stack.Screen name="Progress" component={ProgressScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Reflect" component={ReflectScreen as any}/>
            <Stack.Screen name="Read" component={ReadScreen}/>
            <Stack.Screen name="Study" component={StudyScreen}/>
            <Stack.Screen name="ReflectionHistory" component={ReflectionHistoryScreen}/>

        </Stack.Navigator>
    );
}