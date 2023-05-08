import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { COLORS } from 'assets/global/colors';

const Paybook = ({ id }: any) => {
  const transactionList = useSelector(
    (state: any) => state.clients.listClients[id]?.transactionList,
  );
  const customer = useSelector((state: any) => state.clients.listClients[id]);
  // console.log(customer.sum);
  return (
    <View>
      <View style={{ backgroundColor: COLORS.gray2, height: 10 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <Image
          source={require('assets/icons/png/ic_money2.png')}
          style={{
            height: 20,
            width: 20,
            tintColor: customer?.sum > 0 ? COLORS.red2 : COLORS.green2,
          }}
        />
        <Text style={{ fontWeight: '600', marginLeft: 5, color: COLORS.gray6 }}>
          Tôi phải {customer?.sum > 0 ? 'thu' : 'trả'}{' '}
        </Text>
      </View>
      <Text
        style={{
          color: customer?.sum > 0 ? COLORS.red2 : COLORS.green2,
          fontWeight: '600',
          fontSize: 17,
          textAlign: 'center',
          marginTop: 10,
        }}>
        {customer?.sum < 0 ? customer?.sum * -1 : customer?.sum} đ
      </Text>
      <View
        style={{ backgroundColor: COLORS.gray2, padding: 10, marginTop: 20 }}>
        <Text style={styles.textBox}>Lịch sử chi tiết</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={styles.textBox2}>Ngày</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '53%',
            }}>
            <Text style={styles.textBox2}>Đã đưa</Text>
            <Text style={styles.textBox2}>Đã nhận</Text>
          </View>
        </View>
        {/* list order */}
      </View>
      {/*  map */}
      <ScrollView style={{ height: '90%' }}>
        {transactionList?.map((i: any, index: any) => {
          return (
            <TouchableOpacity key={index} style={styles.BoxItem}>
              <View style={{ width: '40%' }}>
                <Text style={{ fontSize: 11 }}>{i?.date}</Text>
                <Text style={{ marginTop: 5, fontSize: 15 }}>
                  {i?.description || 'Thanh  toán'}
                </Text>
              </View>
              <View
                style={{
                  width: '60%',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      marginLeft: '40%',
                      color: COLORS.red2,
                      fontWeight: '600',
                    }}>
                    {i?.give > 0 ? i?.give : ' '}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      marginLeft: '67%',
                      color: COLORS.green2,
                      fontWeight: '600',
                    }}>
                    {i?.take > 0 ? i?.take : ' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Paybook;

const styles = StyleSheet.create({
  textBox2: {
    color: COLORS.gray6,
  },
  textBox: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 8,
  },
  BoxItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,

    elevation: 4,
    marginVertical: 10,
  },
});
