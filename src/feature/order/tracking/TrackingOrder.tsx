import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { useNavigation } from '@react-navigation/native';
import { addQuantity, updateProduct, reset } from '../../../redux/productSlice';
import DatePicker from 'react-native-date-picker';
import ButtonBase from 'components/base/buttons/ButtonBase';
import DraggableBottomSheet from 'components/common/BottomSheet';
import HeaderBase from 'components/base/header/HeaderBase';

const PayConfirmSheet = (
  pay: number,
  payClient: number,
  onTextChange: any,
  navigation: any,
) => {
  let check = false;
  if (pay - payClient > 0) {
    check = true;
  } else {
    check = false;
  }
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Text
        style={{
          fontSize: 28,
          color: COLORS.red2,
          fontWeight: '600',
          alignSelf: 'center',
        }}>
        {pay}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: '85%' }}>
          <InputWithTitle
            request={false}
            title="Khách trả"
            placeholder="0.00đ"
            keyName="payClient"
            value={payClient}
            onTextChange={onTextChange}
            type="number-pad"
          />
        </View>
      </View>
      {check === true ? (
        <View
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
          <Text
            style={{
              fontWeight: '600',
            }}>{`Ghi nợ: `}</Text>
          <Text
            style={{
              color: COLORS.red2,
              fontWeight: '600',
            }}>
            {pay - payClient}
          </Text>
        </View>
      ) : null}
      <View style={{ marginTop: 200 }}>
        <ButtonBase
          title="Xác nhận"
          onPress={() => {
            return navigation.navigate('OrderBill', { pay, payClient });
          }}
          background
        />
      </View>
    </View>
  );
};
const TrackingOrder = () => {
  const [showSheet, setShowSheet] = useState(false);
  const products = useSelector((state: any) => state.products);
  // const quantity = useSelector((state: any) => state.products.quantity);
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [paramsCustom, setParamsCustom] = useState({
    note: '',
    payClient: 0,
  });
  const onTextChange = useCallback((keyName: string, value: string) => {
    setParamsCustom(state => ({ ...state, [keyName]: value }));
  }, []);
  const dispatch = useDispatch();
  const handlePlus = (id: number, touch: number, price: number) => {
    dispatch(
      updateProduct({
        id: id,
        touch: touch + 1,
      }),
    );
    dispatch(
      addQuantity({
        add: products.quantity + 1,
        pay: price,
      }),
    );
  };
  const handleMinus = (id: number, touch: number, price: number) => {
    dispatch(
      updateProduct({
        id: id,
        touch: touch - 1,
      }),
    );
    dispatch(
      addQuantity({
        add: products.quantity - 1,
        pay: -price,
      }),
    );
  };
  let sum = 0;
  return (
    <View style={{ flex: 1 }}>
      <HeaderBase title={'Xác nhận đơn hàng'} isIconLeft={false} />
      <ScrollView style={{ padding: 15 }}>
        <TouchableOpacity
          style={styles.addProduct}
          onPress={() => navigation.navigate('CreateOrderScreen')}>
          <Text style={{ color: COLORS.blue3 }}>+ Thêm sản phẩm</Text>
        </TouchableOpacity>
        {products.listProducts.map((item: any, index: any) => {
          sum = products.pay - products.pay * (10 / 100) + 12000;
          return item.id !== 0 && item.touch !== 0 ? (
            <View key={index}>
              <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(
                      updateProduct({
                        id: item.id,
                        touch: 0,
                      }),
                    );
                    dispatch(
                      reset({
                        add:
                          products.quantity -
                          products.listProducts[item.id].touch,
                        pay:
                          products.pay -
                          products.listProducts[item.id].touch *
                            products.listProducts[item.id].price,
                      }),
                    );
                  }}
                  style={{
                    zIndex: 1,
                    position: 'absolute',
                    backgroundColor: COLORS.gray6,
                    padding: 7,
                    borderRadius: 20,
                    left: -7,
                  }}>
                  <Image
                    style={{
                      height: 6,
                      width: 6,
                      tintColor: COLORS.white1,
                    }}
                    source={require('../../../assets/icons/png/ic_x.png')}
                  />
                </TouchableOpacity>

                <Image
                  source={item.image}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 8,
                    marginRight: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    width: '80%',
                  }}>
                  <Text> {item.name}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={styles.ButtonAdd}>
                        <TouchableOpacity
                          style={{ padding: 5 }}
                          onPress={() => {
                            handleMinus(
                              item.id,
                              item.touch,
                              parseInt(item.price),
                            );
                          }}>
                          <Text>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}}>
                          <Text style={{}}>{item.touch}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{ padding: 5 }}
                          onPress={() => {
                            handlePlus(
                              item.id,
                              item.touch,
                              parseInt(item.price),
                            );
                          }}>
                          <Text>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text
                      style={{
                        color: 'red',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
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
        {products.quantity !== 0 ? <View style={styles.line} /> : null}

        <View style={{ paddingBottom: 10 }}>
          <InputWithTitle
            title="Khách hàng"
            placeholder={'Chọn khách hàng'}
            onPress={() => console.log('b')}
            editable={false}
            leftIcon={require('assets/icons/png/ic_add_image.png')}
          />
        </View>
        <View style={styles.line} />
        <View>
          <View style={styles.BoxItem}>
            <Text>Khuyến mãi</Text>
            <View style={styles.sale}>
              <Text style={{ color: COLORS.green2 }}>
                {'Chọn khuyến mãi >'}
              </Text>
            </View>
          </View>
          <View style={styles.BoxItem}>
            <Text>Tổng {products.quantity} sản phẩm</Text>
            <Text>{products.pay}</Text>
          </View>
          <View style={styles.BoxItem}>
            <Text>Phí vận chuyển</Text>

            <Text style={{ color: COLORS.blue3, fontWeight: '700' }}>
              {products.quantity !== 0 ? 12000 : 0}
            </Text>
          </View>
          <View style={styles.BoxItem}>
            <Text>Chiết khấu</Text>
            <Text style={{ color: COLORS.blue3, fontWeight: '700' }}>10%</Text>
          </View>
          <View style={styles.BoxItem}>
            <Text>Tổng cộng</Text>
            <Text style={{ color: COLORS.red1, fontWeight: '700' }}>{sum}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.Spay}>
          <Text style={{ color: COLORS.blue3 }}>Thanh toán trước</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '80%' }}>
            <InputWithTitle title="" placeholder={'Ghi chú đơn hàng'} />
          </View>
          <TouchableOpacity style={styles.imageSelect}>
            <Image
              style={{ height: 34, width: 34, tintColor: COLORS.blue3 }}
              source={require('assets/icons/png/ic_image.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 15 }}>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{ fontSize: 15, color: COLORS.blue3 }}>
              Ngày tạo: {date.getDate()}/{date.getUTCMonth()}/
              {date.getFullYear()}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          backgroundColor: COLORS.white1,
          paddingTop: 20,
        }}>
        <ButtonBase title="Giao sau" onPress={() => {}} />
        <ButtonBase
          title="Bán nhanh"
          background
          onPress={() => {
            setShowSheet(true);
          }}
        />
      </View>
      {showSheet ? (
        <DraggableBottomSheet
          childrenComponents={PayConfirmSheet(
            sum,
            paramsCustom.payClient,
            onTextChange,
            navigation,
          )}
          title="Xác nhận thanh toán"
          height={500}
          bottom={0}
          onPress={() => setShowSheet(false)}
        />
      ) : null}
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
    backgroundColor: COLORS.green1,
    borderRadius: 10,
  },
  BoxItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  addProduct: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    backgroundColor: COLORS.blue1,
    padding: 10,
    borderRadius: 10,
    marginLeft: '60%',
  },
  ButtonAdd: {
    padding: 1,
    borderRadius: 5,
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    top: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray1,
    marginTop: 10,
  },
  Spay: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.blue3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  imageSelect: {
    borderWidth: 1,
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: COLORS.blue3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
