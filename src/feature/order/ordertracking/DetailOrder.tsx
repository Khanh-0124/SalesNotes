import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon'
import { COLORS } from 'assets/global/colors'
import ButtonBase from 'components/base/buttons/ButtonBase'

const DetailOrder = () => {
  const route = useRoute<any>().params
  const order = useSelector((state: any) => state.orders.listOrders[route.id]);
  console.log(order)
  return (
    <View style={{ flex: 1 }}>
      <HeaderWithMultiIcon title='Chi tiết hoá đơn' firtRightIcon={{}} />
      <ScrollView style={{}}>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500' }}>{order.code}</Text>
              <Text style={{ fontSize: 12, marginTop: 10 }}>{order.hours}</Text>
            </View>
            <View style={{ padding: 5, backgroundColor: COLORS.green1, borderRadius: 10, alignItems: 'center', justifyContent: 'center', height: 30 }}>
              <Text style={{ color: COLORS.green2 }}>{order.delivered ? 'Đã giao' : 'Đang xử lý'}</Text>
            </View>
          </View>
          {/* line */}
          <View style={styles.line} />
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 30, fontWeight: '500' }}>{Math.round(order.sum)} VND</Text>
              <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor: COLORS.green2, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 12, color: 'white' }}>Gửi hoá đơn</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 12, color: order.paied ? COLORS.green2 : COLORS.red2 }}>{order.paied ? 'Đã thanh toán' : 'Chưa thanh toán'}</Text>
          </View>

        </View>
        {/*  */}
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: '500' }}>{order.name}</Text>
        </View>
        {/*  */}
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 15 }}></View>
        {/*  */}
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 15 }}></View>
        {/*  */}
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 15 }}></View>
        {/* footer */}
      </ScrollView >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, position: 'absolute', bottom: 10, width: '100%', backgroundColor: 'white', paddingVertical: 10 }}>
        <ButtonBase title='Huỷ' onPress={() => { }} />
        <ButtonBase title='Đã giao' onPress={() => { }} background />
      </View>
    </View>
  )
}

export default DetailOrder

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.gray1,
    marginTop: 8
  }
})