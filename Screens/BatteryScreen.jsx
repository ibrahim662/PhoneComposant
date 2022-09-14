import * as React from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from "react-native-circular-progress-indicator";

export default class BatteryScreen extends React.Component {
  
  state = {
    batteryLevel: null,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel);
    });
  }

  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Current Battery Level: {Math.round(this.state.batteryLevel * 100) + "%"}</Text>
        <View style={{ flex: 3 }}>
        <CircularProgress
          value={Math.round(this.state.batteryLevel * 100)}
         // maxValue={6500}
          radius={180}
          textColor={"#ecf0f1"}
          activeStrokeColor={"#f39c12"}
          inActiveStrokeColor={"#9b59b6"}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={40}
          activeStrokeWidth={40}
          title={"%"}
          titleColor={"#000"}
          titleStyle={{ fontWeight: "bold" }}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});