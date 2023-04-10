import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React, { useCallback, useState } from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon'
import { COLORS } from 'assets/global/colors'
import ButtonBase from 'components/base/buttons/ButtonBase'
import { updateDelivered, updateGhino } from '../../../redux/orderSlice'
import { BottomSheet } from '@rneui/themed';

const InputPaied = () => {
  return <View>
    <Text>a</Text>
  </View>
}
const DetailOrder = () => {
  const route = useRoute<any>().params
  const dispatch = useDispatch()
  const order = useSelector((state: any) => state.orders.listOrders[route.id]);
  const navigation = useNavigation<any>()
  const sendOrder = (code: string, dateAhours: string, name: string, sum: any) => {
    return navigation.navigate("OrderBill", { code, dateAhours, name, pay: sum });
  }
  const [isVisible, setIsVisible] = useState(false);
  const [paied, setPaied] = useState('');
  // console.log(order.stringDate, "ghino")
  return (
    <View style={{ flex: 1 }}>
      <HeaderWithMultiIcon title='Chi tiết hoá đơn' firtRightIcon={{}} />
      <ScrollView style={{}}>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500' }}>{order.code}</Text>
              <Text style={{ fontSize: 12, marginTop: 10 }}>{`${order.date.hours} - ${order.date.date}/${order.date.month}`}</Text>
            </View>
            <View style={{ padding: 5, backgroundColor: order.delivered ? COLORS.green1 : COLORS.orange1, borderRadius: 10, alignItems: 'center', justifyContent: 'center', height: 30 }}>
              <Text style={{ color: order.delivered ? COLORS.green2 : COLORS.red2, fontWeight: '600' }}>{order.delivered ? 'Đã giao' : 'Đang xử lý'}</Text>
            </View>
          </View>
          {/* line */}
          <View style={styles.line} />
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 30, fontWeight: '500' }}>{Math.round(order.sum)} VND</Text>
              <TouchableOpacity onPress={() => sendOrder(order.code, order.hours, order.name, order.sum)} activeOpacity={0.5} style={{ backgroundColor: COLORS.green2, borderRadius: 10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 12, color: 'white' }}>Gửi hoá đơn</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 12, color: order.paid ? COLORS.green2 : COLORS.red2 }}>{order.ghino == 0 ? 'Đã thanh toán' : order.ghino == order.sum ? "Chưa thanh toán" : 'Thanh toán 1 phần'}</Text>
          </View>

        </View>
        {/*  */}
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: '500' }}>{order.name}</Text>
        </View>
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 10 }}>
          <FlatList
            data={order.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ height: 45, width: 45, borderRadius: 5, marginRight: 10 }} source={{ uri: item.image[0]?.uri }} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Text>{item.name}</Text>
                      <Text>{item.price} đ</Text>
                    </View>
                    <Text style={{ marginTop: 15 }}>SL: {item.touch}</Text>
                  </View>
                </View>
                {index === order.products.length - 1 ? null : <View style={{ width: '100%', height: 1, backgroundColor: COLORS.gray1, marginVertical: 10 }} />}
              </View>
            )}
          />
        </View>
        {/*  */}
        <View style={{ backgroundColor: 'white', paddingHorizontal: 15, marginTop: 10, paddingVertical: 15 }}>
          <View style={styles.SItem}>
            <Text>Tổng {order.products.length} sản phẩm</Text>
            <Text>{order.sum}</Text>
          </View>
          <View style={styles.SItem}>
            <Text>Phí vận chuyển</Text>
            <Text>- {`${order.phivc}`}</Text>
          </View>
          <View style={styles.SItem}> 
            <Text>Chiết khấu</Text>
            <Text>- {`${order.ck}`}</Text>
          </View>
          <View style={styles.SItem}>
            <Text>Tổng cộng</Text>
            <Text>{order.sum}</Text>
          </View>
        </View>

        {/* footer */}
      </ScrollView >
      {
        !order.delivered ? <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', paddingVertical: 10 }}>
          <ButtonBase title='Huỷ' onPress={() => { console.log(order.ghino, "a") }} />
          <ButtonBase title='Đã giao' onPress={() => {
            // console.log(item.id)
            dispatch(updateDelivered({
              id: route.id
            }))
          }} background />
        </View> : null
      }
      {/*  */}
      {
        order.ghino == 0 ? null : (<View style={{ position: 'absolute', bottom: order.delivered ? 10 : 70, width: '100%' }}>
          <TouchableOpacity onPress={() => { setIsVisible(true) }} activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.primary, padding: 15, borderRadius: 15, marginHorizontal: 15 }}>
            <Image source={require('assets/icons/png/ic_history.png')} style={{ height: 20, width: 20, tintColor: '#fff', alignSelf: 'center', marginRight: 10 }} />
            <Text style={{ color: '#fff' }}>Thanh toán nợ</Text>
          </TouchableOpacity>
        </View>)
      }

      <BottomSheet backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onBackdropPress={() => setIsVisible(false)} modalProps={{ animationType: 'fade' }} isVisible={isVisible}>
        <View style={{ height: 350, backgroundColor: '#fff', borderRadius: 15, padding: 15 }}>
          <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: '600' }}>Cần thanh toán</Text>
          <Text style={{ fontSize: 18, color: COLORS.red2, fontWeight: '600', alignSelf: 'center', marginVertical: 15 }}>{order.ghino} VND</Text>
          <View style={{ position: 'absolute', bottom: 0, width: '100%', marginBottom: 26, alignSelf: 'center' }}>
            <View style={{ marginBottom: 100 }}>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>Khách đã trả</Text>
              <TextInput style={{ marginTop: 15, borderColor: COLORS.gray1, borderBottomWidth: 1, paddingBottom: 8 }} placeholder='0 VND' value={paied} onChangeText={(t) => setPaied(t)} />
            </View>
            <ButtonBase title='Xác nhận' onPress={() => {
              dispatch(updateGhino({
                id: order.id,
                ghino: order.ghino - parseInt(paied)
              }))
              setIsVisible(false)
            }} background />
          </View>
        </View>
      </BottomSheet>
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
  },
  tracking: {
    fontSize: 15,
    color: "#333"
  },
  SItem: { marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }
})