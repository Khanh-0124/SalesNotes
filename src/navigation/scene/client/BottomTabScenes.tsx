import React from 'react';
import { Icon } from '@rneui/themed';
import {
  AnimatedTabBarNavigator,
} from 'react-native-animated-nav-tab-bar';
import { COLORS } from 'assets/global/colors';
import {
  WarehouseScreen,
  HomeScreen,
  OnlineSale,
  Profile,
  Paybook,
} from 'feature/index';

const Tabs = AnimatedTabBarNavigator();

const BottomTabScenes = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: COLORS.primary,
        activeBackgroundColor: COLORS.primary,
        labelStyle: {},
      }}>
      <Tabs.Screen
        name="Quản lý"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="store"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Sổ nợ"
        component={WarehouseScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="book"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Khách hàng"
        component={OnlineSale}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="people"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="Thu chi"
        component={Paybook}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="autorenew"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Cá nhân"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="person"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabScenes;

