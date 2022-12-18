import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useReducer, useRef } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { COLORS } from 'assets/global/colors';
import { colors } from './constant';
import { constant } from './constant';
import Icon from './Icons';
import { ProfileMenu, ProjectsArray } from './arrays';
import HeaderDrawerCustom from './HeaderDrawerCustom';
import FooterDrawerCustom from './FooterDrawerCustom';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  interpolateNode,
} from 'react-native-reanimated';

interface DrawerItemType {
  label: string;
  onPress: () => void;
  tabBarTestID: any;
  type: string;
  name: string;
  notification: number;
  color: string;
  activeItemColor: string;
}

const DrawerItem = ({
  label,
  onPress,
  tabBarTestID,
  type,
  name,
  notification,
  color,
  activeItemColor,
}: DrawerItemType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[styles.drawerItem, { backgroundColor: activeItemColor }]}>
      <View style={styles.row}>
        <Icon type={type} name={name} color={color} />
        <Text style={[styles.label, { color: color }]}>{label}</Text>
      </View>
      {notification > 0 && (
        <View
          style={[
            styles.notiWrapper,
            {
              backgroundColor:
                notification > 5 ? colors.important : colors.normal,
            },
          ]}>
          <Text>{notification}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const ProjectItem = ({ label, type, name, color }: DrawerItemType) => {
  return (
    <TouchableOpacity accessibilityRole="button" style={[styles.drawerItem]}>
      <View style={styles.row}>
        <View style={[styles.wrapperIconProject, { backgroundColor: color }]}>
          <Icon type={type} name={name} color={colors.white} />
        </View>
        <Text style={[styles.label]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ProfileItem = ({ label, type, name, color }: DrawerItemType) => {
  return (
    <TouchableOpacity
      style={[styles.row, { margin: constant.SPACING / 4 }]}
      onPress={{}}>
      <Icon type={type} name={name} color={colors.dark} />
      <Text style={[styles.label]}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawer1 = (props: any) => {
  const { state, descriptors, navigation } = props;
  const [show, toggleProfile] = useReducer(s => !s, false);
  const scrollRef = useRef(null);
  const fun = () => {
    show
      ? scrollRef.current.scrollTo({
          y: 0,
          animated: true,
        })
      : scrollRef.current.scrollToEnd({
          animated: true,
        });
    toggleProfile();
  };
  const progress = useDerivedValue(() => {
    return show ? withSpring(1) : withSpring(0);
  });

  // animation style profile array
  const menuStyles = useAnimatedStyle(() => {
    const scaleY = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      transform: [
        {
          scaleY,
        },
      ],
    };
  });

  //  animation view drwer
  const drawerProgress = useDrawerProgress();
  const animationWrapperDrawer = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      transform: [
        {
          translateX,
        },
      ],
    };
  });
  // (type: string) => {
  //   const val = type === 'top' ? -100 : 100;
  //   const scaleY = interpolate(drawerProgress.value, [0, 1], [val, 1]);
  //   const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1]);
  //   return {
  //     transform: [
  //       {
  //         translateY,
  //       },
  //     ],
  //     opacity,
  //   };
  // };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Animated.View style={[styles.wrapper, styles.marginTop]}>
        <HeaderDrawerCustom />
      </Animated.View>
      {/* Drawer List Item */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        {...props}
        ref={scrollRef}
        style={[styles.marginVertical, animationWrapperDrawer]}>
        <View style={styles.viewScreenArray}>
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

            const color = isFocused ? colors.white : colors.darkGray;
            const activeItemColor = isFocused ? COLORS.primary : null;
            const drawerItem = options.item;

            return (
              <DrawerItem
                key={index}
                label={drawerItem.label}
                onPress={onPress}
                tabBarTestID={undefined}
                name={drawerItem.icon}
                type={drawerItem.type}
                notification={drawerItem.notification}
                color={color}
                activeItemColor={activeItemColor}
              />
            );
          })}
        </View>
        <View style={[styles.viewScreenArray, styles.marginVertical]}>
          <Text>{`Project SalesNotes`}</Text>
          <View style={styles.line} />
          {ProjectsArray.map((_, i) => (
            <ProjectItem
              key={i}
              label={_.title}
              type={_.iconType}
              name={_.icon}
              notification={0}
              color={_.color}
            />
          ))}
        </View>

        {/* profile menu */}
        <Animated.View
          style={[
            styles.viewScreenArray,
            styles.marginVertical,
            { backgroundColor: COLORS.primary },
            menuStyles,
          ]}>
          <Text>{`Cá nhân`}</Text>
          <View style={styles.line} />
          {ProfileMenu.map((_, i) => (
            <ProfileItem
              key={i}
              label={_.label}
              type={_.iconType}
              name={_.icon}
              notification={0}
              color={_.color}
            />
          ))}
        </Animated.View>
        {/* <DrawerItemList {...props} /> */}
      </Animated.ScrollView>
      {/* footer */}
      <Animated.View style={[styles.wrapper, styles.marginBottom]}>
        <FooterDrawerCustom onPress={fun} />
      </Animated.View>
    </View>
  );
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: constant.borderRadius,
  },
  label: {
    fontSize: constant.textFontSize,
    color: colors.dark,
    paddingHorizontal: constant.SPACING,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notiWrapper: {
    paddingVertical: constant.SPACING / 5,
    paddingHorizontal: constant.SPACING / 2,
    borderRadius: constant.SPACING / 2,
  },
  viewScreenArray: {
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  wrapperIconProject: {
    padding: constant.SPACING / 2.4,
    borderRadius: constant.borderRadius,
    margin: constant.SPACING / 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGray,
    marginVertical: constant.SPACING / 2,
  },
});