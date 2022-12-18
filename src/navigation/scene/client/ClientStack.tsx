import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import BottomTabs from './BottomTabScenes';
import {
  NotifiScreen,
  CreateOrderScreen,
  CreateProduct,
  ReportScreen,
} from 'feature/index';
import DrawerNav from 'navigation/drawer/DrawerNav';
import { WareHouse } from 'feature/report/tabview';

const Stack = createStackNavigator();

const ClientStack = () => {
  return (
    <Stack.Navigator initialRouteName="DrawerNav">
      <Stack.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTabs}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="NotifiScreen"
        component={NotifiScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="CreateOrderScreen"
        component={CreateOrderScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="CreateProduct"
        component={CreateProduct}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="WareHouse"
        component={WareHouse}
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
