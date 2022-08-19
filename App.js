import { Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { store } from "./store";
import { TailwindProvider } from "tailwindcss-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, } from "@react-navigation/stack";

export default function App() {

  const Stack = createStackNavigator();
  return (
    // Instance tailwind on app 
    <TailwindProvider>
      {/* Instance store redux component */}
      <Provider store={store}>
        {/* Navigation on this app */}
        <NavigationContainer>
          {/* Safe zone for display component */}
        <SafeAreaProvider>
          <Stack.Navigator>
          <Stack.Screen 
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </TailwindProvider>
  );
}
