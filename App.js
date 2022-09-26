import { StatusBar } from "expo-status-bar";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/profile/Profile";
import ManageItem from "./screens/ManageItem";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function CommunicationOptions() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="Profile" component={Profile} />
      {/* TODO clarify function of "edit" button in bottom nav */}
      <BottomTabs.Screen name="Edit" component={ManageItem} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={CommunicationOptions}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageItem" component={ManageItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
