import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomSheet } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../../servers/firebase/crud';
import { inputDebt } from '../../../redux/clientSlice';

const CustomerDetail = () => {
  const route = useRoute<any>().params;
  const dispatch = useDispatch();
  const give = useSelector(
    (state: any) => state.clients.listClients[route.id].sumGive,
  );
  const take = useSelector(
    (state: any) => state.clients.listClients[route.id].sumTake,
  );
  const client = useSelector((state: any) => state.clients.listClients);
  const [showBottom, setShowBottom] = useState(false);
  const navigation = useNavigation<any>();
  const transactionList = useSelector(
    (state: any) => state.clients.listClients[route.id].transactionList,
  );
  useEffect(() => {
    if (client.length !== 0)
      addData('ClientStack', 'Customers', { ListOfCustomers: client });
  }, [client]);
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  let nowday = `${day}/${month}/${year}`;
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderBase title={route.name} isIconLeft={false} />
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
              {parseInt(give) - parseInt(take) == 0
                ? `Thanh toán hết`
                : parseInt(give) - parseInt(take) > 0
                ? `Tôi phải thu`
                : `Tôi phải trả`}
            </Text>
            <Text
              style={{
                color:
                  parseInt(give) - parseInt(take) == 0
                    ? COLORS.red2
                    : parseInt(give) - parseInt(take) > 0
                    ? COLORS.red2
                    : COLORS.green2,
                fontWeight: '600',
                marginVertical: 10,
              }}>
              {parseInt(give) - parseInt(take) > 0
                ? parseInt(give) - parseInt(take)
                : (parseInt(give) - parseInt(take)) * -1}{' '}
              đ
            </Text>
          </View>
          {parseInt(give) - parseInt(take) == 0 ? null : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('InputDetails', {
                  name: route.name,
                  phone: route.phone,
                  id: route.id,
                  giveOrTake: parseInt(give) - parseInt(take) > 0,
                  pay:
                    parseInt(give) - parseInt(take) > 0
                      ? parseInt(give) - parseInt(take)
                      : parseInt(take) - parseInt(give),
                  tt: true,
                  description: 'Thanh toán',
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
        <ScrollView style={{height: '70%'}}>
          {transactionList.map((i: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setShowBottom(true)}
                style={styles.BoxItem}>
                <View style={{ width: '60%' }}>
                  <Text style={{ fontSize: 11 }}>{i.date}</Text>
                  <Text style={{ marginTop: 5, fontSize: 15 }}>
                    {i.description}
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
                      {i.give > 0 ? i.give : ' '}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        marginRight: 30,
                        color: COLORS.green2,
                        fontWeight: '600',
                      }}>
                      {i.take > 0 ? i.take : ' '}
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
        <View style={{ backgroundColor: '#fff', height: 200, padding: 15 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Text style={{ fontWeight: '600', color: COLORS.red2 }}>Xoá</Text>
            </TouchableOpacity>
            <Text>Chi tiết giao dịch</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
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
