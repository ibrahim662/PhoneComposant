import React, { useState, useEffect } from "react";
import {  View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default AudioScreen = () => {

  const navigation = useNavigation();
  
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/goku.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    
    <View className="flex-1 justify-center bg-white p-10">
        <TouchableOpacity 
        onPress={() => navigation.navigate("Home")}
        className=" bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg">
          <Icon name="arrow-left" size={40} />
        </TouchableOpacity>
      <Icon name="play-outline" type="ionicon" size={50} onPress={playSound} />
    </View>
  );
}