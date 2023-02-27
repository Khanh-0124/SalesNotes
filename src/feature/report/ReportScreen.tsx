import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {
  Store,
  ProfitAndLoss,
  WareHouse,
  RevenueAndExpenditure,
} from './tabview/index';

const renderScene = SceneMap({
  first: ProfitAndLoss,
  second: Store,
  third: WareHouse,
  fourth: RevenueAndExpenditure,
});

const ReportScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Lãi lỗ' },
    { key: 'second', title: 'Cửa hàng' },
    { key: 'third', title: 'Kho hàng' },
    { key: 'fourth', title: 'Thu chi' },
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
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
      <HeaderBase
        title="Báo cáo"
        isIconLeft={false}
        bgColor={COLORS.white1}
        color={COLORS.black1}
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
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
