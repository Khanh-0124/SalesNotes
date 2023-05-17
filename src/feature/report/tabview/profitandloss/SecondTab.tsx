import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AnimationNumberComponent from '../../../../libs/AnimationNumberComponent';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import CollapsibleComponents from 'components/common/collapsible/CollapsibleComponents';
import Revenue from './Revenue';
import Cost from './Cost';
import { useSelector } from 'react-redux';
import { formatVND } from 'assets/global/formatMoney';

const SecondTab = () => {
  const orders: Array<any> = useSelector(
    (state: any) => state.orders.listOrders,
  );
  // console.log(orders)
  let sum = 0;
  let pricev: number = 0;
  let price: number = 0,
    phivc: number = 0,
    ck: number = 0;
  orders.forEach((i: any, index: any) => {
    // console.log(i);
    pricev += parseInt(i.products[0].pricev);
    // price += parseInt(i.products[0].price);
    phivc += parseInt(i.phivc);
    sum += i.sum;
    ck += (parseInt(i.ck) / 100) * sum;
    // pricev += parseInt(i.pricev);
  });
  const listRevenue = [
    {
      id: 1,
      name: 'Tổng giá bán',
      sum: sum,
    },
    {
      id: 2,
      name: 'Thu phí vận chuyển',
      sum: phivc,
    },
    {
      id: 3,
      name: 'Triết khấu',
      sum: `-${ck}`,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapperHeader}>
        <View style={styles.STitleHeader}>
          <Image
            source={require('assets/icons/png/ic_coin.png')}
            style={styles.Scoin}
          />
          <Text>Lợi nhuận</Text>
        </View>
        <AnimationNumberComponent
          number={sum + phivc - ck - pricev || 0}
          unit={true}
          customTextStyle={{
            color: COLORS.primary,
            fontSize: 28,
            fontWeight: '600',
          }}
        />
      </View>
      <View style={{ backgroundColor: COLORS.white1, padding: 10 }}>
        <Text style={styles.STitleItems}>Chi tiết báo cáo</Text>
        <CollapsibleComponents
          title={'Doanh thu'}
          leftComponents
          number={` ${formatVND(sum + phivc - ck) || 0} đ`}
          customStyles={{
            backgroundColor: COLORS.gray5,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
          Contents={() => <Revenue listRevenue={listRevenue} />}
        />
        <View style={styles.wrapperItem}>
          <Text>Giá vốn bán hàng</Text>
          <Text style={{ color: COLORS.red1, marginRight: 20 }}>
            {formatVND(pricev)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SecondTab;

const styles = StyleSheet.create({
  wrapperHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white1,
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginVertical: 10,
  },
  Scoin: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  wrapperButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: COLORS.white1,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  STitleItems: {
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    fontWeight: '600',
  },
  STitleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  wrapperItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.gray5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
