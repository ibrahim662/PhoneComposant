import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Active Camera"
        onPress={() => navigation.navigate("Camera", { name: "Camera" })}
      />
      <Button
        title="Contact"
        onPress={() => navigation.navigate("Contact", { name: "contact" })}
      />
      <Button
        title="Active sensor"
        onPress={() => navigation.navigate("Sensor", { name: "sensor" })}
      />
      <Button
        title="Pedometre"
        onPress={() => navigation.navigate("Pedometre", { name: "pedometre" })}
      />
      <Button
        title="Get battery level"
        onPress={() => navigation.navigate("Battery", { name: "battery" })}
      />
      <Button
        title="Vibration"
        onPress={() => navigation.navigate("Vibration", { name: "vibration" })}
      />
        <Button
        title="Audio"
        onPress={() => navigation.navigate("Audio", { name: "audio" })}
      />
    </View>
  );
};

export default HomeScreen;
