import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import CameraScreen from "./Screens/CameraScreen";
import ContactScreen from "./Screens/ContactScreen";
import SensorScreen from "./Screens/SensorScreen";
import PedometerScreen from "./Screens/PedometerScreen";
import BatteryScreen from "./Screens/BatteryScreen";
import VibrationScreen from "./Screens/VibrationScreen";
import AudioScreen from "./Screens/AudioScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: "Contact" }}
        />
        <Stack.Screen name="contact" component={ContactScreen} />
        <Stack.Screen
          name="Sensor"
          component={SensorScreen}
          options={{ title: "Sensor" }}
        />
        <Stack.Screen name="sensor" component={SensorScreen} />
        <Stack.Screen
          name="Pedometre"
          component={PedometerScreen}
          options={{ title: "Pedometre" }}
        />
        <Stack.Screen name="pedometre" component={PedometerScreen} />
        <Stack.Screen
          name="Battery"
          component={BatteryScreen}
          options={{ title: "Battery" }}
        />
        <Stack.Screen name="battery" component={BatteryScreen} />
        <Stack.Screen
          name="Vibration"
          component={VibrationScreen}
          options={{ title: "Vibration" }}
        />
        <Stack.Screen name="vibration" component={VibrationScreen} />
        <Stack.Screen
          name="Audio"
          component={AudioScreen}
          options={{ title: "Audio" }}
        />
        <Stack.Screen name="audio" component={AudioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
