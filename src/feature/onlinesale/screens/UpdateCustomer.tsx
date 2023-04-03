import { StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBase from 'components/base/header/HeaderBase'
import { useRoute } from '@react-navigation/native'
import All from '../components/tabs/All'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { COLORS } from 'assets/global/colors'
import Infor from '../components/tabs/Infor'
import Paybook from '../components/tabs/Paybook'


const UpdateCustomer = () => {
  const name = useRoute<any>().params.name
  const phone = useRoute<any>().params.phone
  const add = useRoute<any>().params.add
  const layout = useWindowDimensions();
  const renderScene = SceneMap({
    first: All,
    second: Paybook,
    third: (props) => <Infor name={name} phone={phone} add={add} />
  });

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

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Đơn hàng' },
    { key: 'second', title: 'Sổ nợ' },
    { key: 'third', title: 'Thông tin' },
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderBase title={name} isIconLeft={false} />
      <StatusBar barStyle={'dark-content'} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  )
}

export default UpdateCustomer

const styles = StyleSheet.create({})