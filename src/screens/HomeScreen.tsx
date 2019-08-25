import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
return (
    <View>
        <Button
            onPress={() => navigation.navigate('Camera')}
            title="Go to Camera"/>
        <Button
            onPress={() => navigation.navigate('Bulb')}
            title="Go to Bulb"/>
        <Button
            onPress={() => console.log('yo')}
            title="Log"/>
    </View>
);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
