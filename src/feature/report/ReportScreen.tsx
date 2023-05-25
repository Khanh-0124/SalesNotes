import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {
  Store,
  ProfitAndLoss,
  WareHouse,
  RevenueAndExpenditure,
} from './tabview/index';
import { useDispatch } from 'react-redux';
import { changeDateFilter } from '../../redux/userSlice';

const renderScene = SceneMap({
  first: ProfitAndLoss,
  second: Store,
  third: WareHouse,
  fourth: RevenueAndExpenditure,
});

const today = new Date();
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

const firstDayOfMonth = firstDay.toISOString().slice(0, 10);
const lastDayOfMonth = lastDay.toISOString().slice(0, 10);

const ReportScreen = () => {
  const layout = useWindowDimensions();
  const dispatch = useDispatch()
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Lãi lỗ' },
    { key: 'second', title: 'Cửa hàng' },
    { key: 'third', title: 'Kho hàng' },
    { key: 'fourth', title: 'Thu chi' },
  ]);
  useEffect(() => {
    dispatch(changeDateFilter({
      start: firstDayOfMonth,
      end: lastDayOfMonth
    }))
  }, [])
  // console.log(firstDayOfMonth)
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
      <StatusBar barStyle={'dark-content'} />
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
  container: { flex: 1, backgroundColor: '#fff' },
});
