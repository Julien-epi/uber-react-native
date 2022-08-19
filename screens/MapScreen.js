import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map"
import MapView from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";

const MapScreen = () => {

  const Stack = createStackNavigator();

  return (
    <SafeAreaView>
      <View>
        <Text>MapScreen</Text>
        <View className="h-1/2">
          <Map />
        </View>
        <View className="h-1/2">
          <Stack.Navigator>
            <Stack.Screen 
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
