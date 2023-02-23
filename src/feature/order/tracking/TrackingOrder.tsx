import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from 'assets/global/colors';

const TrackingOrder = () => {
  const products = useSelector((state: any) => state.products);
  return (
    <View style={{ padding: 15 }}>
      <TouchableOpacity onPress={() => console.log('a')}>
        <Text>+ Thêm sản phẩm</Text>
      </TouchableOpacity>
      {products.listProducts.map((item: any, index: any) => {
        return item.id !== 0 ? (
          <View>
            <View
              key={index}
              style={{ flexDirection: 'row', paddingVertical: 5 }}>
              <Image
                source={item.image}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 8,
                  marginRight: 10,
                }}
              />
              <View style={{ flexDirection: 'column', width: '80%' }}>
                <Text> {item.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{item.touch}</Text>
                  <Text style={{ color: 'red' }}>
                    {item.price * item.touch}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: COLORS.gray1,
                marginVertical: 5,
              }}
            />
          </View>
        ) : null;
      })}
      <View style={styles.line} />
      <View>
        <Text>Khách hàng</Text>
      </View>
      <View style={styles.line} />
      <View>
        <View style={styles.BoxItem}>
          <Text>Khuyến mãi</Text>
          <View style={styles.sale}>
            <Text>{'Chọn khuyến mãi >'}</Text>
          </View>
        </View>
        <View style={styles.BoxItem}>
          <Text>Tổng {products.quantity} sản phẩm</Text>
          <Text>{products.pay}</Text>
        </View>
        <View style={styles.BoxItem}>
          <Text>Phí vận chuyển</Text>
          <Text>12000</Text>
        </View>
        <View style={styles.BoxItem}>
          <Text>Chiết khấu</Text>
          <Text>10%</Text>
        </View>
        <View style={styles.BoxItem}>
          <Text>Tổng cộng</Text>
          <Text>{products.pay - products.pay * (10 / 100) + 12000}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.Spay}>
        <Text>Thanh toán trước</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackingOrder;

const styles = StyleSheet.create({
  line: {
    height: 10,
    width: '100%',
    backgroundColor: COLORS.gray5,
    borderRadius: 10,
    marginVertical: 5,
  },
  sale: {
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  BoxItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Spay: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
