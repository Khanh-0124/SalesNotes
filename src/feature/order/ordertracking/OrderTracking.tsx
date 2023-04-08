import { StatusBar, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from 'assets/global/colors';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OrderAll from './OrderAll';
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon';
import OrderProcessing from './OrderProcessing';
import OrderDelivered from './OrderDelivered';
import OrderCanceled from './OrderCanceled';
import { useDispatch, useSelector } from 'react-redux';
import { search, setSateFilter } from '../../../redux/orderSlice';
import { BottomSheet } from '@rneui/themed';
import CalendarComponents from 'components/CalendarComponents';

const renderScene = SceneMap({
  first: OrderAll,
  second: OrderProcessing,
  third: OrderDelivered,
  fourth: OrderCanceled,
});

const OrderTracking = () => {
  const layout = useWindowDimensions();
  const dispatch = useDispatch()
  const stateFilterShow = useSelector((state: any) => state.orders.stateFilterShow)
  const [index, setIndex] = React.useState(0);
  const [showSearch, setShowSearch] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');
  const [showFilter, setShowFilter] = React.useState(false);
  const [routes] = React.useState([
    { key: 'first', title: 'Tất cả' },
    { key: 'second', title: 'Đang xử lý' },
    { key: 'third', title: 'Đã giao' },
    { key: 'fourth', title: 'Huỷ' },
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
  useEffect(() => {
    dispatch(search({
      search: keyword
    }))
    if (!showSearch) {
      setKeyword("")
    }
  }, [keyword, showSearch])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <HeaderWithMultiIcon
        title={'Đơn hàng'}
        leftIcon={require('assets/icons/png/ic_left_arrow.png')}
        firtRightIcon={!showSearch ? require('assets/icons/png/ic_search.png') : require('assets/icons/png/ic_error.png')}
        secondRightIcon={require('assets/icons/png/ic_filter.png')}
        thirdRightIcon={require('assets/icons/png/ic_more.png')}
        onSecond={() => { dispatch(setSateFilter({ state: !stateFilterShow })) }}
        onFirt={() => {
          setShowSearch(!showSearch)
        }}
      />
      {
        showSearch ? (<View>
          <TextInput autoFocus placeholder='Tìm kiếm theo tên, mã  đơn hàng' value={keyword} onChangeText={(t) => { setKeyword(t) }} style={{ padding: 10, marginHorizontal: 15, borderRadius: 10, borderWidth: 1, borderColor: COLORS.primary, marginTop: 5 }} />
        </View>) : null
      }
      {
        stateFilterShow ? <BottomSheet backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onBackdropPress={() => dispatch(setSateFilter({ state: false }))} modalProps={{ animationType: 'fade' }} isVisible={stateFilterShow}>
          <View style={{ paddingBottom: 100, backgroundColor: '#fff' }}>
            <CalendarComponents />
          </View>
        </BottomSheet> : null
      }
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
