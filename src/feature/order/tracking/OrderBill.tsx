import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { useNavigation, useRoute } from '@react-navigation/native';
import { addQuantity, updateProduct, reset } from '../../../redux/productSlice';
import ButtonBase from 'components/base/buttons/ButtonBase';
import ViewShot from 'react-native-view-shot';
import HeaderBase from 'components/base/header/HeaderBase';
import Share from 'react-native-share';
import { addListOrder } from '../../../redux/orderSlice';

const BillPay = ({ title, value }: { title: string; value: number }) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 10,
      }}>
      <Text>{title}</Text>
      <Text>{value} VND</Text>
    </View>
  );
};

const OrderBill = () => {
  const route = useRoute<any>().params;
  const products = useSelector((state: any) => state.products);
  let i = 0;
  const ref = useRef();

  const shareSubmit = (ref: any) => {
    ref.current?.capture().then((uri: any) => {
      const options = {
        message: 'Chi tiết hoá đơn',
        url: uri,
      };
      Share.open(options)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  };
  // console.log(route.dateAhours)

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderBase title={'Chi tiết hoá đơn'} isIconLeft={false} />
      <ViewShot
        style={{ padding: 15, backgroundColor: 'white' }}
        ref={ref}
        options={{ fileName: 'Your-File-Name', format: 'jpg', quality: 0.9 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ height: 70, width: 70 }}
            source={require('assets/photos/img_qr.png')}
          />
          <View style={{ width: '70%', justifyContent: 'center' }}>
            <Text style={{ fontWeight: '600', fontSize: 15 }}>
              Vũ Văn Khánh
            </Text>
            <Text>{`0367473926 - số 5 ngõ 99, Phúc Diễn, Bắc từ liêm`}</Text>
          </View>
        </View>
        <View style={styles.dotted} />
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ fontWeight: '600', fontSize: 15, marginVertical: 5 }}>
            HOÁ ĐƠN BÁN HÀNG
          </Text>
          <Text>{route.code} - {route.dateAhours}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Text>Khách: </Text>
          <Text style={{ fontWeight: '700' }}>{route.name || "Khách lẻ"}</Text>
        </View>
        <View style={styles.dotted} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={styles.title}>ĐƠN GIÁ</Text>
          <Text style={styles.title}>SL</Text>
          <Text style={styles.title}>THÀNH TIỀN</Text>
        </View>
        <View style={styles.line} />
        {products.listProducts.map((item: any, index: any) => {
          if (item.touch !== 0) {
            return (
              <View key={index} style={{ marginTop: 10 }}>
                <Text>{`${++i}. ${item.name}`}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}>
                  <Text>{item.price}</Text>
                  <Text>x {item.touch}</Text>
                  <Text>{item.touch * item.price}</Text>
                </View>
              </View>
            );
          }
        })}
        <View style={styles.dotted} />
        <BillPay title="Tổng cộng" value={route.pay} />
        <BillPay title="Khách trả" value={route.payClient} />
        <View style={styles.dotted} />
        <View style={{ alignSelf: 'center', marginTop: 10 }}>
          <Text>Bán hàng chuyên nghiệp bằng ứng dụng</Text>
          <Text style={{ fontWeight: '600', fontSize: 17, marginVertical: 10 }}>
            Cảm ơn quý khách và hẹn gặp lại
          </Text>
        </View>
      </ViewShot>
      <View
        style={{
          padding: 15,
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          width: '90%',
        }}>
        <ButtonBase
          title="Gửi hoá đơn"
          background
          onPress={() => shareSubmit(ref)}
        />
      </View>
    </View>
  );
};

export default OrderBill;

const styles = StyleSheet.create({
  dotted: {
    borderStyle: 'dashed',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 1,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.gray1,
    marginVertical: 10,
  },
  title: {
    fontWeight: '600',
    color: COLORS.gray3,
  },
});
