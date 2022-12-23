import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as auth from 'feature/auth/index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  ThemeContextProvider,
  useTheme,
} from '../../../../src/utilities/context/ThemeContext';
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    // <View style={{flex: 1}}>
    // <ThemeContextProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={auth.LoginScreen} />
      <Stack.Screen name="SignUp" component={auth.SignUpScreen} />
    </Stack.Navigator>
    // </ThemeContextProvider>
    // </View>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
