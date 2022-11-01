import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import BottomTabs from './BottomTabScenes';

const Stack = createStackNavigator();

const ClientStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={BottomTabs}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
};

export default ClientStack;

const styles = StyleSheet.create({});
