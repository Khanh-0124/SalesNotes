import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer1 from './CustomDrawer1';
import { ScreensArray } from './arrays';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: styles.drawerStyles,
      }}
      drawerContent={props => <CustomDrawer1 {...props} />}>
      {ScreensArray.map((_, i) => (
        <Drawer.Screen
          key={i}
          name={_.route}
          component={_.component}
          options={{
            item: _,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({
  drawerStyles: {
    width: 270,
    backgroundColor: 'transparent',
    marginTop: 45
  },
});
