import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

const OrderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Đơn hàng</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.seeAll}>Tất cả ›</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.textOder}>Chờ xác nhận</Text>
          <Text style={styles.numberOder}>0</Text>
        </TouchableOpacity>
        <View style={{ height: 80, width: 1, backgroundColor: COLORS.gray1 }} />
        <TouchableOpacity
          style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={styles.textOder}>Đang xử lý</Text>
          <Text style={styles.numberOder}>0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderComponent;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: COLORS.white1,
    padding: '10@s',
    marginVertical: 14,
  },
  title: {
    fontSize: '13@s',
    fontWeight: '500',
  },
  seeAll: {
    fontSize: '13@s',
    color: COLORS.primary,
  },
  textOder: {
    fontSize: '13@s',
    marginBottom: 15,
  },
  numberOder: {
    fontSize: '13@s',
    fontWeight: 'bold',
  },
});
