import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { useNavigation } from '@react-navigation/native';
import {
  addQuantity,
  updateProduct,
  reset,
  updateRemaining,
} from '../../../redux/productSlice';
import DatePicker from 'react-native-date-picker';
import ButtonBase from 'components/base/buttons/ButtonBase';
import DraggableBottomSheet from 'components/common/BottomSheet';
import HeaderBase from 'components/base/header/HeaderBase';
import { launchImageLibrary } from 'react-native-image-picker';
import ModalConfig from 'components/common/ModalConfig';
import { addListOrder } from '../../../redux/orderSlice';
import { debouncedSearchCustomers } from 'assets/global/fn_search';
import { addOutofStockWarning } from '../../../redux/notifySlice';

function generateInvoiceCode() {
  let code = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

const PayConfirmSheet = (
  pay: number,
  payClient: number,
  onTextChange: any,
  navigation: any,
  name: string,
  datte: any,
  hours: string,
  month: number,
  year: number,
  add: string,
  dispathch: any,
  orders: any,
  products: any,
  vc: number,
  ck: number,
  idCustomer: any,
) => {
  let check = false;
  if (pay - payClient > 0) {
    check = true;
  } else {
    check = false;
  }
  let codde = generateInvoiceCode();
  let productsOrder = products.filter((item: any) => item.touch !== 0);
  // console.log(check, "as")
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Text
        style={{
          fontSize: 28,
          color: COLORS.red2,
          fontWeight: '600',
          alignSelf: 'center',
        }}>
        {Math.round(pay)}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: '85%' }}>
          <InputWithTitle
            request={false}
            title="Khách trả"
            placeholderStyle={'#333'}
            placeholder={'0 đ'}
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
            {Math.round(pay) - Math.round(payClient)}
          </Text>
        </View>
      ) : null}
      <View style={{ marginTop: 200 }}>
        <ButtonBase
          title="Xác nhận"
          onPress={() => {
            if (payClient < 0) {
              Alert.alert('Nhập đủ các trường');
            } else {
              dispathch(
                addListOrder({
                  data: {
                    id: orders.length,
                    name: name || 'Khách lẻ',
                    idCustomer: idCustomer,
                    date: {
                      hours: hours,
                      date: datte,
                      month: month,
                      year: year,
                    },
                    fulldate: `${datte}/${month}`,
                    code: codde,
                    delivered: true,
                    sum: pay,
                    payClient: payClient,
                    paid: true,
                    ghino: parseInt(pay) - parseInt(payClient),
                    add: add,
                    products: productsOrder,
                    phivc: vc,
                    ck: ck,
                    stringDate: `${year}-${month
                      ?.toString()
                      .padStart(2, '0')}-${datte?.toString().padStart(2, '0')}`,
                  },
                }),
              );
              return navigation.replace('OrderBill', {
                pay,
                payClient,
                name,
                hours,
                datte,
                month,
                year,
                add,
                code: codde,
              });
            }
            // console.log("Khanh name")
            // dispathch(reset({ touch: 0 }))
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
  const orders = useSelector((state: any) => state.orders.listOrders);
  const dispathch = useDispatch();
  // const quantity = useSelector((state: any) => state.products.quantity);
  const customers = useSelector((state: any) => state.clients.listClients);
  const navigation = useNavigation<any>();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [idCustomer, setIdCustomer] = useState(0);
  const [add, setAdd] = useState('');
  const [keyCustomer, setKeyCustomer] = useState('');
  const [ck, setCK] = useState(0);
  const [phiVC, setphiVC] = useState<any>(0);
  const [paramsCustom, setParamsCustom] = useState({
    note: '',
    payClient: 0,
    uri: '',
  });
  const onTextChange = useCallback((keyName: string, value: any) => {
    setParamsCustom(state => ({ ...state, [keyName]: value }));
  }, []);
  let result = debouncedSearchCustomers(keyCustomer, customers);
  let customerss = keyCustomer.length > 0 ? result : customers;
  const dispatch = useDispatch();
  const handlePlus = (id: number, touch: number, price: number) => {
    dispatch(
      updateProduct({
        id: id,
        touch: touch + 1,
        newremain: touch + 1,
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
  let options = {
    savePhotos: true,
    mediaType: 'photo',
    includeBase64: true,
    presentationStyle: 'overCurrentContext',
    storageOptions: {
      skipBackup: true,
    },
  };
  const TakePhotoFromLibrary = useCallback(async () => {
    const result = await launchImageLibrary(options);
    let url = result.assets[0].uri;
    setParamsCustom((state: any) => ({ ...state, ['uri']: url }));
  }, []);
  const createThreeButtonAlert = () =>
    Alert.alert('Chọn ảnh', 'Chọn ảnh ghi chú', [
      {
        text: 'Chọn ảnh có sẵn',
        onPress: () => TakePhotoFromLibrary(),
      },
      {
        text: 'Huỷ',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Chụp ảnh mới', onPress: () => console.log('OK Pressed') },
    ]);
  // let dateAhours = '';
  const [hours, setHours] = useState('');
  const [datee, setDatee] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<number>();
  let code = generateInvoiceCode();
  let productsOrder = products.listProducts.filter(
    (item: any) => item.touch !== 0,
  );
  const warningArray = products.listProducts.filter(
    (item: any) => item.remaining < 10,
  );

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
          sum =
            parseInt(products.pay) -
            parseInt(products.pay) * (ck / 100) +
            parseInt(phiVC);
          if (item.remaining < 10) {
            dispatch(
              addOutofStockWarning({
                OutofStockWarning: warningArray,
              }),
            );
          }
        
          return item.touch !== 0 ? (
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
                    source={require('assets/icons/png/ic_x.png')}
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
        <ModalConfig
          visible={show}
          onOffShow={() => setShow(false)}
          layout={{ height: '25%', width: '80%' }}>
          <View style={{ marginTop: 15 }}>
            <TextInput
              placeholder="Nhập tên hoặc số điện thoại"
              value={keyCustomer}
              onChangeText={t => setKeyCustomer(t)}
            />
            <TouchableOpacity
              onPress={() => {
                setShow(false);
                return navigation.navigate('OnlineSale');
              }}
              style={{ flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ color: COLORS.blue3 }}>Tạo mới</Text>
              <View
                style={{
                  backgroundColor: COLORS.blue3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  marginLeft: 200,
                  paddingHorizontal: 5,
                  padding: 1,
                }}>
                <Text style={{ color: 'white' }}>+</Text>
              </View>
            </TouchableOpacity>
            <ScrollView>
              {customerss.map((customer: any) => (
                <TouchableOpacity
                  key={customer.id}
                  onPress={() => {
                    setShow(false);
                    setName(customer.name);
                    setAdd(customer.add);
                    setIdCustomer(parseInt(customer.id));
                  }}
                  activeOpacity={0.4}
                  style={{ marginTop: 20 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        padding: 5,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: COLORS.gray1,
                        marginRight: 10,
                      }}>
                      <Image
                        source={require('assets/icons/png/ic_user.png')}
                        style={{
                          tintColor: COLORS.gray4,
                          width: 30,
                          height: 30,
                        }}
                      />
                    </View>
                    <Text style={{ color: COLORS.blue3 }}>{customer.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View></View>
          </View>
        </ModalConfig>
        <View style={{ paddingBottom: 10 }}>
          {!name ? (
            <InputWithTitle
              title="Khách hàng"
              placeholder={'Chọn khách hàng'}
              onPress={() => setShow(true)}
              editable={false}
              leftIcon={require('assets/icons/png/ic_add_image.png')}
            />
          ) : (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{
                      tintColor: COLORS.gray4,
                      width: 30,
                      height: 30,
                      marginRight: 10,
                    }}
                    source={require('assets/icons/png/ic_user.png')}
                  />
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      {name}
                    </Text>
                    {/* <View style={{ flexDirection: 'row' }}>
                      <Text>Phải thu: </Text>
                      <Text style={{ color: COLORS.red2 }}>{'1000'} đ</Text>
                    </View> */}
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => setName('')}
                  style={{
                    marginRight: 15,
                    alignSelf: 'center',
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: COLORS.gray3,
                    paddingHorizontal: 5,
                  }}>
                  <Text style={{ alignSelf: 'center' }}>x</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingHorizontal: 0, marginTop: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: '500' }}>Địa chỉ</Text>
                <TextInput
                  placeholder="Nhập địa chỉ cụ thể"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.gray1,
                    paddingBottom: 10,
                    marginTop: 10,
                  }}
                  value={add}
                  onChangeText={text => setAdd(text)}
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.line} />
        <View>
          {/* <View style={styles.BoxItem}>
            <Text>Khuyến mãi</Text>
            <View style={styles.sale}>
              <Text style={{ color: COLORS.green2 }}>
                {'Chọn khuyến mãi >'}
              </Text>
            </View>
          </View> */}
          <View style={styles.BoxItem}>
            <Text>Tổng {products.quantity} sản phẩm</Text>
            <Text>{products.pay}</Text>
          </View>
          <View style={styles.BoxItem}>
            <Text>Phí vận chuyển</Text>
            <TextInput
              placeholder="VD: 12000"
              keyboardType="number-pad"
              value={phiVC}
              onChangeText={t => setphiVC(t)}
            />
            {/* <Text style={{ color: COLORS.blue3, fontWeight: '700' }}>
              {products.quantity !== 0 ? 12000 : 0}
            </Text> */}
          </View>
          <View style={styles.BoxItem}>
            <Text>Chiết khấu</Text>
            <TextInput
              placeholder="VD: 10%"
              keyboardType="number-pad"
              value={ck}
              onChangeText={t => setCK(t)}
            />
            {/* <Text style={{ color: COLORS.blue3, fontWeight: '700' }}>10%</Text> */}
          </View>
          <View style={styles.BoxItem}>
            <Text>Tổng cộng</Text>
            <Text style={{ color: COLORS.red1, fontWeight: '700' }}>
              {Math.round(sum).toLocaleString('vi-VN')}
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '80%' }}>
            <InputWithTitle title="" placeholder={'Ghi chú đơn hàng'} />
          </View>
          <TouchableOpacity
            style={styles.imageSelect}
            onPress={createThreeButtonAlert}>
            <Image
              style={{ height: 34, width: 34, tintColor: COLORS.blue3 }}
              source={require('assets/icons/png/ic_image.png')}
            />
          </TouchableOpacity>
        </View> */}
        <View>
          {paramsCustom.uri !== '' ? (
            <Image
              style={{ height: 24, width: 24 }}
              source={{ uri: paramsCustom.uri }}
            />
          ) : null}
        </View>
        <View style={{ marginVertical: 15 }}>
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ fontSize: 15, color: COLORS.blue3 }}>
                Ngày tạo:{' '}
              </Text>
              <Text style={{ fontSize: 15, color: COLORS.blue3 }}>
                {date.getHours()}:{date.getMinutes()} {date.getDate()}/
                {date.getMonth() + 1}/{date.getFullYear()}
              </Text>
            </View>
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
        <ButtonBase
          title="Giao sau"
          onPress={() => {
            dispatch(
              addListOrder({
                data: {
                  id: orders.length,
                  name: name || 'Khách lẻ',
                  idCustomer: idCustomer,
                  date: {
                    hours: `${date.getHours()}:${date.getMinutes()}`,
                    date: date.getDate(),
                    month: date.getMonth() + 1,
                    year: date.getFullYear(),
                  },
                  fulldate: `${date.getDate()}/${date.getMonth() + 1}`,
                  code: code,
                  delivered: false,
                  sum: sum,
                  paid: false,
                  payClient: paramsCustom.payClient,
                  ghino: sum - paramsCustom.payClient,
                  add: add,
                  products: productsOrder,
                  phivc: phiVC,
                  ck: ck,
                  stringDate: `${date.getFullYear()}-${(date.getMonth() + 1)
                    ?.toString()
                    .padStart(2, '0')}-${date
                    .getDate()
                    ?.toString()
                    .padStart(2, '0')}`,
                },
              }),
            );
            // dispathch(reset({ touch: 0 }))
            navigation.replace('OrderBill', {
              pay: sum,
              name,
              hours,
              datte: date.getDate(),
              month: date.getMonth() + 1,
              year: date.getFullYear(),
              add,
              code: code,
              temp: true,
            });
          }}
        />
        <ButtonBase
          title="Bán nhanh"
          background
          onPress={() => {
            setShowSheet(true);
            setDatee(date.getDate());
            setHours(`${date.getHours()}:${date.getMinutes()}`);
            setMonth(date.getMonth() + 1);
            setYear(date.getFullYear());
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
            name,
            datee,
            hours,
            month,
            year,
            add,
            dispathch,
            orders,
            products.listProducts,
            phiVC,
            ck,
            idCustomer,
          )}
          title="Khách cần thanh toán"
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
