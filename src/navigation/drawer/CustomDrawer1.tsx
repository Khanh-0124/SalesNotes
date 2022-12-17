import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { COLORS } from 'assets/global/colors';
import { colors } from './constant';
import { constant } from './constant';
import Icon from './Icons';

interface DrawerItemType {
  label: string;
  onPress: () => void;
  tabBarTestID: any;
  type: string;
  name: string;
  notification: number;
}

const DrawerItem = ({
  label,
  onPress,
  tabBarTestID,
  type,
  name,
  notification,
}: DrawerItemType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={styles.drawerItem}>
      <Icon type={type} name={name} />
      <Text style={styles.label}>{label}</Text>
      {notification > 0 && (
        <View style={styles.notiWrapper}>
          <Text>{notification}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const ProjectItem = () => {
  return <></>;
};

const ProfileItem = () => {
  return <></>;
};

const CustomDrawer1 = (props: any) => {
  const { state, descriptors, navigation } = props;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.wrapper, styles.marginTop]}>
        <Text>Header</Text>
      </View>
      {/* Drawer List Item */}
      <DrawerContentScrollView
        {...props}
        style={[styles.wrapper, styles.marginVertical]}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const color = isFocused ? colors.dark : colors.gray;
          const drawerItem = options.item;
          console.log('drawerItem', drawerItem);

          return (
            <DrawerItem
              key={index}
              label={drawerItem.label}
              onPress={onPress}
              tabBarTestID={undefined}
              name={drawerItem.icon}
              type={drawerItem.type}
              notification={drawerItem.notification}
            />
          );
        })}
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
      {/* footer */}
      <View style={[styles.wrapper, styles.marginBottom]}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default CustomDrawer1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.white1,
    borderRadius: constant.borderRadius,
    padding: constant.SPACING,
  },
  marginTop: {
    marginTop: constant.SPACING / 2,
  },
  marginBottom: { marginTop: constant.SPACING / 2 },
  marginVertical: { marginTop: constant.SPACING / 2 },
  drawerItem: {
    flexDirection: 'row',
    padding: constant.SPACING / 2,
  },
  label: {
    fontSize: constant.textFontSize,
    color: colors.dark,
    paddingHorizontal: constant.SPACING,
  },
  notiWrapper: {},
});
