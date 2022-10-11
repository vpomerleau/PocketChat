import { StatusBar } from "expo-status-bar";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/profile/Profile";
import ManageItem from "./screens/ManageItem";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function CommunicationOptions() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        headerTintColor: GlobalStyles.colors.neutral1000,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        tabBarActiveTintColor: GlobalStyles.colors.tertiary800,
        tabBarInactiveTintColor: GlobalStyles.colors.neutral1000,
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      {/* TODO clarify function of "edit" button in bottom nav */}
      <BottomTabs.Screen
        name="Edit"
        component={ManageItem}
        options={{ headerShown: false }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
            // title: "PocketChat",
            headerShown: false,
          }}>
          <Stack.Screen
            name="MainScreen"
            component={CommunicationOptions}
            screenOptions={{ backgroundColor: GlobalStyles.colors.neutral200 }}
          />
          <Stack.Screen name="ManageItem" component={ManageItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
