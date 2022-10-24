import {Text, View} from 'react-native';
import React from 'react';

// Typescript
import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from 'react-native-animated-nav-tab-bar';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/feature/home/HomeScreen';
import SettingScreen from './src/feature/setting/SettingScreen';
import Profile from './src/feature/profile/Profile';

import {Icon} from '@rneui/base';
const Tabs = AnimatedTabBarNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#2F7C6E',
          inactiveTintColor: '#222222',
        }}>
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name="Home"
                size={size ? size : 24}
                color={focused ? color : '#222222'}
                focused={focused}
                color={'#ccc'}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name="Home"
                size={size ? size : 24}
                color={focused ? color : '#222222'}
                focused={focused}
                color={'#ccc'}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name="Home"
                size={size ? size : 24}
                color={focused ? color : '#222222'}
                focused={focused}
                color={'#ccc'}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({});
