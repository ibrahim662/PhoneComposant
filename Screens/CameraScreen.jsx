import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Image, SafeAreaView,Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "@rneui/themed";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

import { useNavigation } from "@react-navigation/native";

import CameraPreview from "./CameraPreview"
const CameraScreen =  () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState("granted");
  const [hasCameraPermission, setHasCameraPermission] = useState();

  const [flash, setFlash] = useState("off");
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const camera = useRef([])

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  
  const __takePicture = async () => {
    if (!camera) return
    const photo = await camera.current.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  const __startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
 if(status === 'granted'){

}else{
   Alert.alert("Access denied")
 }
  }
  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }
  const flashs = () => {
      setFlash((current) => (
        current === FlashMode.off ? FlashMode.on : FlashMode.off
      ));
  }

  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    __startCamera()
  }

  if (capturedImage) {
    let sharePic = () => {
      shareAsync(capturedImage.uri).then(() => {
        setCapturedImage(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(capturedImage.uri).then(() => {
        setCapturedImage(undefined);
      });
    };

    return (
      
     <>
  
      {previewVisible && capturedImage ? (
        <>
        <CameraPreview photo={capturedImage}  retakePicture={__retakePicture} />
     
      <SafeAreaView className="flex flex-1">
    
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + capturedImage.base64 }}
          />
        <TouchableOpacity className="flex flex-row justify-around h-20 p-4">
          <Icon name="share-social-outline" type="ionicon" onPress={sharePic} />
          {hasMediaLibraryPermission ? (
            <Icon name="save-outline" type="ionicon" onPress={savePhoto} />
            ) : undefined}
          <Icon
            name="reload-outline"
            type="ionicon"
            onPress={() => setCapturedImage(undefined)}
            />
        </TouchableOpacity>
      </SafeAreaView>
            </>
      ) : (
        <></>
       )}
          </>
       );
  }
  return (
    <View style={styles.container}>
        {previewVisible && capturedImage ? (
            <CameraPreview photo={capturedImage}  retakePicture={__retakePicture} />
          ) : (
      <Camera ref={camera} style={styles.camera} type={type} FlashMode={flash}>
        {console.log(flash)}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flash}
            onPress={flashs}>
            <Text style={styles.text}>turn on flash</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.snap}
          onPress={__takePicture}
          >
            <Text style={styles.text}>Snap</Text>
          </TouchableOpacity>
          
        </View>
      </Camera>
          )}
    </View>
  );
  }




  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      alignItems: "flex-end", 
     
      //margin: 64,
    },
    button: {
      flex: 1,
      
    },
    flash :{
      flex:1,
     // alignItems: "center"
    },
    snap : {
      flex:1
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });
  
export default CameraScreen