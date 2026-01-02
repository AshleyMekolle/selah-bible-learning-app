import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProgressScreen from "../screens/ProgressScreen";
import StudyScreen from "../screens/StudyScreen";
import ReadScreen from "../screens/ReadScreen";
import ReflectScreen from "../screens/ReflectScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReflectionHistoryScreen from "../screens/ReflectionHistory";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
    <Stack.Navigator initialRouteName="Splash" screenOptions={ {headerShown: true, headerTitle: ''}}>
            <Stack.Screen name="Splash" component={SplashScreen}  />
            <Stack.Screen name="Home" component={HomeScreen as any} />
            <Stack.Screen name="Progress" component={ProgressScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Reflect" component={ReflectScreen as any} />
            <Stack.Screen name="Read" component={ReadScreen}/>
            <Stack.Screen name="Study" component={StudyScreen} />
            <Stack.Screen name="ReflectionHistory" component={ReflectionHistoryScreen}/>

        </Stack.Navigator>
    );
}