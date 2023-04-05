import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import {
  Store,
  ProfitAndLoss,
  WareHouse,
  RevenueAndExpenditure,
} from '../../report/tabview/index';
import OrderAll from './OrderAll';
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon';

const renderScene = SceneMap({
  first: OrderAll,
  second: Store,
  third: WareHouse,
  fourth: RevenueAndExpenditure,
});

const OrderTracking = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tất cả' },
    { key: 'second', title: 'Đang xử lý' },
    { key: 'third', title: 'Đã giao' },
    { key: 'fourth', title: 'Huỷ' },
    // { key: 'fifth', title: 'Trả hàng' },
    // { key: 'sixth', title: 'Huỷ' },
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
      <StatusBar barStyle={'dark-content'} />
      <HeaderWithMultiIcon
        title={'Đơn hàng'}
        leftIcon={require('assets/icons/png/ic_left_arrow.png')}
        firtRightIcon={require('assets/icons/png/ic_search.png')}
        secondRightIcon={require('assets/icons/png/ic_filter.png')}
        thirdRightIcon={require('assets/icons/png/ic_more.png')}
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

export default OrderTracking;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
