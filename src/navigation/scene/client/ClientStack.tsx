import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import BottomTabs from './BottomTabScenes';
import {
  NotifiScreen,
  CreateOrderScreen,
  CreateProduct,
  ReportScreen,
  CameraFiles,
  ChatScreen,
  OrderTracking,
  TrackingOrder,
  ManagerProducts,
  OrderBill,
  ContainerUpdateDeatail,
  OnlineSale
} from 'feature/index';
import DrawerNav from 'navigation/drawer/DrawerNav';
import { WareHouse } from 'feature/report/tabview';
import CategoryDetail from 'feature/products/screens/CategoryDetail';
import AddProducts from 'feature/products/screens/AddProducts';
import DetailOrder from 'feature/order/ordertracking/DetailOrder';
import AddressScreen from 'feature/onlinesale/screens/AddressScreen';
import DebtBookHistory from 'feature/warehouse/screens/DebtBookHistory';
import UpdateCustomer from 'feature/onlinesale/screens/UpdateCustomer';

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
        name="UpdateCustomer"
        component={UpdateCustomer}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="DebtBookHistory"
        component={DebtBookHistory}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="DetailOrder"
        component={DetailOrder}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="ContainerUpdateDeatail"
        component={ContainerUpdateDeatail}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="AddProducts"
        component={AddProducts}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetail}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="ManagerProducts"
        component={ManagerProducts}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="OrderBill"
        component={OrderBill}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="TrackingOrder"
        component={TrackingOrder}
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
      <Stack.Screen
        name="CameraFiles"
        component={CameraFiles}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="OnlineSale"
        component={OnlineSale}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="OrderTracking"
        component={OrderTracking}
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
