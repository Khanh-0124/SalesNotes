import { Text, View, Image } from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from '@rneui/themed';
// import 'react-native-gesture-handler';

// Typescript
import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from 'react-native-animated-nav-tab-bar';
import { COLORS } from 'assets/global/colors';
import {
  WarehouseScreen,
  HomeScreen,
  OnlineSale,
  Profile,
  Paybook,
} from 'feature/index';

// import {Icon} from '@rneui/base';
const Tabs = AnimatedTabBarNavigator();

const App = () => {
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
        name="Kho Hàng"
        component={WarehouseScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home-assistant"
              type="material-community"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Bán Online"
        component={OnlineSale}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="store-settings"
              type="material-community"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Sổ nợ"
        component={Paybook}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="book"
              size={size ? size : 24}
              type="foundation"
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />
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

export default App;

// const styles = StyleSheet.create({});
