import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import { formatVND } from 'assets/global/formatMoney';
let SUM = 0,
  numberPaid = 0;
const All = ({ id }: { id: any }) => {
  (SUM = 0), (numberPaid = 0);
  const order: Array<any> = useSelector(
    (state: any) => state.orders.listOrders,
  );
  const newOrder = order.filter((i: any) => i.idCustomer == id);
  newOrder.forEach((i: any) => {
    SUM += i.sum;
    i.paid == true ? numberPaid++ : null;
  });
  return (
    <View>
      <View style={{ backgroundColor: COLORS.gray2, height: 10 }} />
      <View style={styles.AllBox}>
        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('/assets/icons/png/ic_dollar.png')}
              style={styles.image}
            />
            <Text>Doanh thu</Text>
          </View>
          <Text style={styles.textBox}>{formatVND(SUM)} đ</Text>
        </View>
        <View style={{ height: 70, width: 1, backgroundColor: COLORS.gray1 }} />
        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('/assets/icons/png/ic_clipboard.png')}
              style={styles.image}
            />
            <Text>Đơn đã giao</Text>
          </View>
          <Text style={styles.textBox}>{numberPaid}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: COLORS.gray2, padding: 10 }}>
        <Text style={styles.textBox}>Lịch sử chi tiết</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={styles.textBox2}>Ngày</Text>
          <Text style={styles.textBox2}>Chi tiết đơn hàng</Text>
        </View>
        {/* list order */}
      </View>
      <ScrollView style={{ padding: 15 }}>
        {newOrder.map((i: any) => (
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text>{`${i.date.date}/${i.date.month}/${i.date.year}`}</Text>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                }}>{`${i.date.hours}`}</Text>
            </View>
            <View
              style={{
                width: 1,
                backgroundColor: COLORS.gray1,
                height: 65,
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 20,
                  backgroundColor: COLORS.gray1,
                  right: -4.4,
                  top: 10,
                  position: 'absolute',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
                padding: 10,
                backgroundColor: COLORS.gray2,
                marginBottom: 10,
                borderRadius: 10,
                alignItems: 'stretch',
              }}>
              <View>
                <View
                  style={{
                    borderRadius: 5,
                    padding: 3,
                    backgroundColor: COLORS.green1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 11,
                      color: i.paid ? COLORS.green2 : COLORS.red2,
                    }}>
                    {i.paid ? `Đã giao` : 'Đang xử lý'}
                  </Text>
                </View>
                <Text style={[styles.text, { marginTop: 10 }]}># {i.code}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.text}>{i.products.length} sản phẩm</Text>
                <Text
                  style={{
                    color: COLORS.red2,
                    fontWeight: 'bold',
                    marginTop: 10,
                  }}>
                  {i.sum} đ
                </Text>
              </View>
            </View>

            {/* <Text>{i.sum}</Text> */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
  },
  image: {
    height: 16,
    width: 16,
    marginRight: 5,
  },
  AllBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  textBox2: {
    color: COLORS.gray6,
  },
  textBox: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 8,
  },
});
