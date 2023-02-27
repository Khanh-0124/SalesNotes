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

const OrderAll = () => {
  const [data, setData] = useState(dataOrder);
  return (
    <ScrollView>
      {data.map(item => (
        <TouchableOpacity
          activeOpacity={0.4}
          key={item.id}
          style={{
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
          }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontWeight: '600', fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ marginVertical: 8 }}>
                {`${item.hours} - ${item.code}`}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: COLORS.green1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                height: 25,
                paddingHorizontal: 5,
                borderRadius: 6,
              }}>
              <Text style={{ color: COLORS.green2 }}>
                {item.delivered === true ? 'Đã giao' : 'Chưa giao'}
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
          <Text style={{ alignSelf: 'flex-end', color: COLORS.green2 }}>
            {item.paid ? 'Đã thanh toán' : 'Chưa thanh toán'}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default React.memo(OrderAll);

const styles = StyleSheet.create({});
