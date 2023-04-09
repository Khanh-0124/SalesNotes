import {
  Text,
  View,
  SafeAreaView,
  Button,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import StatusBarComponent from 'components/base/StatusBar';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { GeneralNoti, RemindNotfi } from 'feature/notification/index';

const renderScene = SceneMap({
  first: GeneralNoti,
  second: RemindNotfi,
});
const NotifiScreen = React.memo(function NotifiScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Chung' },
    { key: 'second', title: 'Nhắc nợ' },
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: COLORS.white1 }}
      indicatorStyle={{ backgroundColor: COLORS.primary }}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={{
            color: focused ? COLORS.primary : COLORS.black1,
            fontSize: 14,
          }}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <HeaderBase
        title={'Thông báo'}
        bgColor={COLORS.white1}
        color={COLORS.black1}
        isIconLeft={false}
      />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
});

export default NotifiScreen;

const styles = ScaledSheet.create({
  textAnimation: { fontSize: 28, color: 'red', fontWeight: 'bold' },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
