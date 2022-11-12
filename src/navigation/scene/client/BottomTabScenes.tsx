import {Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import 'react-native-gesture-handler';

// Typescript
import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from 'react-native-animated-nav-tab-bar';
import HomeScreen from '../../../feature/home/HomeScreen';
import SettingScreen from '../../../feature/setting/SettingScreen';
import Profile from '../../../feature/profile/Profile';
import {COLORS} from '../../../assets/global/colors';

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
        name="Thu chi"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="settings"
              size={size ? size : 24}
              color={focused ? '#fff' : '#ccc'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
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
