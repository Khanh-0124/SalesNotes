import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomSheet } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../../servers/firebase/crud';
import { inputDebt, deleteDebt, setSum } from '../../../redux/clientSlice';

let sumgive = 0,
  sumtake = 0;
const CustomerDetail = () => {
  const route = useRoute<any>().params;
  const transactionList = useSelector(
    (state: any) => state.clients.listClients[route.id].transactionList,
  );
  const dispatch = useDispatch();
  (sumgive = 0), (sumtake = 0);
  transactionList.forEach((item: any) => {
    item.balance = item.give - item.take;
    sumgive += item.give;
    sumtake += item.take;
  });
  
  const sum: number = sumgive - sumtake
  const bc = useSelector((state: any) => state.clients.bc);
  const client = useSelector((state: any) => state.clients.listClients);
  const [showBottom, setShowBottom] = useState(false);
  const navigation = useNavigation<any>();
  useEffect(() => {
    addData('ClientStack', 'Customers', { ListOfCustomers: client });
  }, [client]);
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  let nowday = `${day}/${month}/${year}`;
  const [id, setId] = useState(-1);
  const [idbc, setIdbc] = useState(-1);
  const [idDebt, setIdBebt] = useState(-1);
  const [delGive, setDelGive] = useState<any>(0);
  const [delTake, setDelTake] = useState<any>(0);
  useEffect(() => { 
    dispatch(setSum({
      id: route.id,
      sum: sum
    }))
  }, [sum])
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderBase title={route.name} isIconLeft={false}  />
      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View>
            <Text style={{ fontWeight: '600', fontSize: 15 }}>
              {sum == 0
                ? `Thanh toán hết`
                : sum > 0
                ? `Tôi phải thu`
                : `Tôi phải trả`}
            </Text>
            <Text
              style={{
                color:
                  sum == 0
                    ? COLORS.red2
                    : sum > 0
                    ? COLORS.red2
                    : COLORS.green2,
                fontWeight: '600',
                marginVertical: 10,
              }}>
              {(sum > 0 ? sum : sum * -1) || 0} đ
            </Text>
          </View>
          {sum == 0 ? null : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('InputDetails', {
                  name: route.name,
                  phone: route.phone,
                  id: route.id,
                  giveOrTake: sum > 0,
                  pay: sum > 0 ? sum : sum * -1,
                  tt: true,
                });
              }}
              style={{
                backgroundColor: COLORS.primary,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{ color: '#fff' }}>Thanh toán</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text>{`${transactionList.length} giao dịch`}</Text>
          <View
            style={{
              width: '80%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <Text style={{ marginRight: 30 }}>{`Tôi đã đưa`}</Text>
            <Text>{`Tôi đã nhận`}</Text>
          </View>
        </View>
        {/*  map */}
        <ScrollView style={{ height: '70%' }}>
          {transactionList.map((i: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setId(index);
                  setDelGive(i.give);
                  setDelTake(i.take);
                  setShowBottom(true);
                  setIdbc(parseInt(i.idbc));
                }}
                style={styles.BoxItem}>
                <View style={{ width: '60%' }}>
                  <Text style={{ fontSize: 11 }}>{i?.date}</Text>
                  <Text style={{ marginTop: 5, fontSize: 15 }}>
                    {i?.description || 'Thanh  toán'}
                  </Text>
                </View>
                <View
                  style={{
                    width: '50%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        marginRight: 30,
                        color: COLORS.red2,
                        fontWeight: '600',
                      }}>
                      {i?.give > 0 ? i?.give : ' '}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        marginRight: 30,
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
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}>
        <ButtonBase
          title="Nhập giao dịch"
          background
          onPress={() => {
            navigation.navigate('InputDetails', {
              name: route.name,
              phone: route.phone,
              id: route.id,
            });
          }}
        />
      </View>
      <BottomSheet
        backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        onBackdropPress={() => {
          setShowBottom(false);
        }}
        modalProps={{ animationType: 'fade' }}
        isVisible={showBottom}>
        <View style={{ backgroundColor: '#fff', height: 200, padding: 20 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('', 'Xác nhận xoá?', [
                  {
                    text: 'Huỷ',
                    style: 'cancel',
                  },
                  {
                    text: 'Xoá',
                    onPress: () => {
                      setShowBottom(false);
                      dispatch(
                        deleteDebt({
                          id: route.id,
                          idDebt: id,
                          sum:
                            delGive > 0
                              ? sum- parseInt(delGive)
                              : sum + parseInt(delTake),
                        }),
                      );
                    },
                  },
                ]);
              }}
              style={{
                padding: 8,
                backgroundColor: COLORS.red2,
                borderRadius: 10,
              }}>
              <Text style={{ fontWeight: '600', color: '#fff' }}>Xoá</Text>
            </TouchableOpacity>
            <Text style={{ alignSelf: 'center' }}>Chi tiết giao dịch</Text>
            <TouchableOpacity
              onPress={() => setShowBottom(false)}
              style={{ marginTop: 5 }}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              bottom: 50,
              position: 'absolute',
              alignSelf: 'center',
              width: '90%',
            }}>
            <ButtonBase
              title="Chỉnh sửa"
              background
              onPress={() => {
                // console.log(delGive > delTake)
                setShowBottom(false);
                return navigation.navigate('InputDetails', {
                  name: route.name,
                  phone: route.phone,
                  id: route.id,
                  idDebt: id,
                  giveOrTake: delGive > delTake ? false : true,
                  date: transactionList[id].date,
                  pay: delGive > delTake ? delGive : delTake,
                  des: transactionList[id].description,
                  update: true,
                  idbc,
                });
              }}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default CustomerDetail;

const styles = StyleSheet.create({
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
