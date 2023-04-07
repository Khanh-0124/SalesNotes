import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { dataOrder } from 'utilities/data';
import { COLORS } from 'assets/global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { updateDelivered } from '../../../redux/orderSlice';

const OrderDelivered = () => {
  let orders = useSelector((state: any) => state.orders.listOrders);
  const dispatch = useDispatch()
  const [data, setData] = useState(orders);
  const navigation = useNavigation<any>()
  const submit = (id: number) => {
    return navigation.navigate("DetailOrder", { id: id });
  }
  orders = orders.filter((item: any) => item.delivered == true)
  return (
    <ScrollView>
      {orders.map((item: any) => (
        <TouchableOpacity
          onPress={() => submit(item.id)}
          activeOpacity={0.4}
          key={item.id}
          style={styles.SOrder}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontWeight: '600', fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ marginVertical: 8 }}>
                {`${item.date.hours} ${item.date.date}/${item.date.month} - ${item.code}`}
              </Text>
            </View>
            <View style={[styles.SCheck, item.delivered ? null : { backgroundColor: COLORS.orange1 }]}>
              <Text style={{ color: item.delivered ? COLORS.green2 : COLORS.red2, fontWeight: '600' }}>
                {item.delivered == true ? 'Đã giao' : 'Đang xử lý'}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.gray1,
              width: '100%',
              marginVertical: 10,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Text>Tổng cộng</Text>
            <Text>{item.sum}</Text>
          </View>
          {
            item.ghino > 0 && item.sum != item.ghino ? <Text style={{ alignSelf: 'flex-end', color: !item.paid ? COLORS.red2 : COLORS.orange2 }}>
              {'Thanh toán 1 phần'}
            </Text> : item.ghino == 0 ? (<Text style={{ alignSelf: 'flex-end', color: COLORS.green2 }}>
              {'Đã thanh toán'}
            </Text>) : (<Text style={{ alignSelf: 'flex-end', color: COLORS.red2 }}>
              {'Chưa thanh toán'}
            </Text>)
          }
          {item.delivered ? null : <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <TouchableOpacity onPress={() => { console.log(item.delivered) }} style={styles.button}>
              <Text >Huỷ bỏ</Text>
            </TouchableOpacity>
            <View style={{ width: 10 }} />
            <TouchableOpacity onPress={() => {
              dispatch(updateDelivered({
                id: item.id
              }))
            }} style={[{ backgroundColor: COLORS.primary }, styles.button]} >
              <Text style={{ color: "#fff" }}>Đã giao</Text>
            </TouchableOpacity>
          </View>}

        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default React.memo(OrderDelivered);

const styles = StyleSheet.create({
  SOrder: {
    backgroundColor: COLORS.white1,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  SCheck: {
    // backgroundColor: COLORS.green1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 25,
    paddingHorizontal: 5,
    borderRadius: 6,
  },
  button: {
    padding: 8, borderRadius: 10, flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray1
  }
});
