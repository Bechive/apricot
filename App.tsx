import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import BulbScreen from './src/screens/BulbScreen';

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Camera: CameraScreen,
        Bulb: BulbScreen,
    }, 
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'Apricot App'
        }
    }, 
)

export default createAppContainer(navigator);