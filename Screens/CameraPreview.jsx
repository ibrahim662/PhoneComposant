import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, ImageBackground, View, TouchableOpacity } from 'react-native';

 const CameraPreview = ({photo, retakePicture}) => {
    console.log('sdsfds', photo)
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            flex: 1
          }}
        />
        <TouchableOpacity 
        onPress={retakePicture}
        >
            <Text>Retake Pic</Text>
        </TouchableOpacity>
      </View>
    )
  }
  export default CameraPreview;