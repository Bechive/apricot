import React, { useState } from 'react';
import { Text, StyleSheet, View, NativeModules, Button } from 'react-native';

const turnOn = () => {
    NativeModules.Bulb.turnOn();
}

const BulbScreen = ({ navigation }) => {
    const [isOn, setIsOn] = useState(false);

    const update = () => {
        NativeModules.Bulb.getStatus((err: any, isOn: any) => {
            setIsOn(isOn);
        });
    }

    const turnOn = () => {
        NativeModules.Bulb.turnOn();
        update();
    }

    const turnOff = () => {
        NativeModules.Bulb.turnOff();
        update();
    }

    return (
        <View>
            <Button title={`turn ${isOn ? "ON" : "OFF"}`} onPress={() => isOn ? turnOff() : turnOn()}/>
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default BulbScreen;
