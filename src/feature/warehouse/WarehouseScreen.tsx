import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Image } from '@rneui/base';

const WarehouseScreen = () => {
  const customers = useSelector((state: any) => state.clients.listClients);
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
      }}>
      <View>
        <View
          style={{
            backgroundColor: COLORS.gray2,
            height: 100,
            marginHorizontal: 20,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            marginTop: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center' }}>Bạn mượn nợ</Text>
            <Text style={{ textAlign: 'center', marginTop: 5 }}>Tổng</Text>
            <Text style={{ textAlign: 'center', marginTop: 5 }}>{`12 d`}</Text>
          </View>
          <View style={{ height: '60%', width: 1, backgroundColor: '#ccc' }} />
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center' }}>Bạn cho nợ</Text>
            <Text style={{ textAlign: 'center', marginTop: 5 }}>Tổng</Text>
            <Text style={{ textAlign: 'center', marginTop: 5 }}>{`12 d`}</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={
            () => {}
            // navigation.navigate('DebtBookHistory')
          }
          style={styles.btndownload}>
          <Image
            source={require('../../assets/icons/png/ic_download.png')}
            style={{ height: 20, width: 20, tintColor: '#fff' }}
          />
          <Text style={[styles.textHeader, { color: '#fff', marginLeft: 10 }]}>
            Tải báo cáo
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Tôi phải trả</Text>
          <Text style={[styles.textHeader, { color: COLORS.green2 }]}>
            {1.2} đ
          </Text>
        </View>
        <View style={{ height: 50, width: 1, backgroundColor: COLORS.gray1 }} />
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Tôi phải thu</Text>
          <Text style={[styles.textHeader, { color: COLORS.red2 }]}>{1} đ</Text>
        </View>
      </View>

      <View>
        <View
          style={{ width: '100%', backgroundColor: COLORS.gray2, padding: 10 }}>
          <Text style={styles.textHeader}>Danh sách khách hàng</Text>
        </View>
        {customers.map((i: any) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('CustomerDetail', {
                  name: i.name,
                  phone: i.phone,
                  id: i.id,
                })
              }>
              <Text style={styles.textHeader}>{i.name}</Text>
              <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                <Text
                  style={[
                    styles.textHeader,
                    {
                      color:
                        i.sum == 0
                          ? COLORS.red2
                          : i.sum > 0
                          ? COLORS.red2
                          : COLORS.green2,
                    },
                  ]}>
                  {(i.sum > 0 ? i.sum : i.sum * -1) || 0}đ
                </Text>
                <Text style={{ marginTop: 10 }}>
                  {' '}
                  {parseInt(i.sumGive) - parseInt(i.sumTake) == 0
                    ? ``
                    : i.sum > 0
                    ? `Tôi phải thu`
                    : `Tôi phải trả`}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default WarehouseScreen;

const styles = StyleSheet.create({
  boxHeader: { alignItems: 'center', flex: 1, marginVertical: 10 },
  textHeader: { fontSize: 17, fontWeight: '500' },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray1,
    paddingBottom: 13,
  },
  btndownload: {
    alignSelf: 'center',
    marginBottom: 20,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: COLORS.gray4,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
