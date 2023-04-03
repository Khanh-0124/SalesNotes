import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import TouchTabView from 'components/common/TouchTabView';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import CollapsibleComponents from 'components/common/collapsible/CollapsibleComponents';
import AddInfor from 'components/common/collapsible/AddInfor';
import InputWithTitle from 'components/base/header/input/InputWithTitle';

export const dataTabThuchi = [
  {
    id: 1,
    name: 'Hôm nay',
    isChoose: false,
    // tabContent: CollectedByMonth,
  },
  {
    id: 2,
    name: 'Tháng này',
    isChoose: true,
    // tabContent: CollectedByMonth,
  },
  {
    id: 3,
    name: 'Tháng trước',
    isChoose: false,
    // tabContent: CollectedByMonth,
  },
];

const Paybook = () => {
  const [choose, setChoose] = useState(dataTabThuchi)
  const [idchoose, setIdchoose] = useState(2)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 15, flex: 1 }}>
        <StatusBar barStyle={'dark-content'} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.wrapperCalender}>
            <Image
              source={require('assets/icons/png/ic_calendar.png')}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', padding: 4, borderRadius: 10, backgroundColor: COLORS.gray5, }}>
            {
              choose.map((item: any) => <TouchableOpacity onPress={() => { setIdchoose(item.id) }} style={[{ padding: 7, borderRadius: 10 }, idchoose == item.id ? { backgroundColor: COLORS.white1 } : null]} key={item.id}>
                <Text style={{ fontSize: 14 }}>{item.name}</Text>
              </TouchableOpacity>)
            }
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10 }}>
          <Text>Số dư: </Text>
          <Text style={{ color: COLORS.red2, fontWeight: '600' }}>{`200.000`}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.itemBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.icon} source={require('../../assets/icons/png/ic_fund.png')} />
              <Text style={{ marginTop: 5 }}>Tổng thu</Text>
            </View>
            <Text style={[styles.textBox, { color: COLORS.red2 }]}>{`120.000`}</Text>
          </View>
          <View style={styles.itemBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.icon} source={require('../../assets/icons/png/ic_cash.png')} />
              <Text style={{ marginTop: 5 }}>Tổng chi</Text>
            </View>
            <Text style={[styles.textBox, { color: COLORS.green2 }]}>{`120.000`}</Text>
          </View>
        </View>
        {/* body */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30 }}>
          <View style={{ width: '50%' }} />
          <Text>Chi</Text>
          <Text>Thu</Text>
        </View>
        <ScrollView style={{}}>
          <CollapsibleComponents
            leftComponents
            HeaderContent={() => <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', borderRadius: 10 }}>
              <View style={{ flexDirection: 'row', width: '50%', }}>
                <View style={{ padding: 10, backgroundColor: '#ccc', borderRadius: 8, marginRight: 10 }}>
                  <Text>{'28'}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: '600' }}>{`Thứ Ba`}</Text>
                  <Text>{`Tháng 3/23`}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '55%' }}>
                <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, marginLeft: 10 }}>{`1000`}</Text>
                <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1 }}>{`1000`}</Text>
              </View>
            </View>}
            Contents={() => (
              <View style={{ paddingHorizontal: 15, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Chưa phân loại</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '47%' }}>
                  <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, marginLeft: 24 }}>{`1000`}</Text>
                  <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, marginLeft: 44 }}>{`1000`}</Text>
                </View>
              </View>
            )}
            title={''}
          />
          <CollapsibleComponents
            layout={120}
            leftComponents
            HeaderContent={() => <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', borderRadius: 10 }}>
              <View style={{ flexDirection: 'row', width: '50%', }}>
                <View style={{ padding: 10, backgroundColor: '#ccc', borderRadius: 8, marginRight: 10 }}>
                  <Text>{'28'}</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: '600' }}>{`Thứ Ba`}</Text>
                  <Text>{`Tháng 3/23`}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '55%' }}>
                <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, marginLeft: 10 }}>{`1000`}</Text>
                <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1 }}>{`1000`}</Text>
              </View>
            </View>}
            Contents={() => (
              <View style={{ paddingHorizontal: 15, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Chưa phân loại</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '47%' }}>
                  <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, marginLeft: 24 }}>{`1000`}</Text>
                  <Text style={{ textAlign: 'center', alignSelf: 'center', flex: 1, marginLeft: 44 }}>{`1000`}</Text>
                </View>
              </View>
            )}
            title={''}
          />
        </ScrollView>
        {/* foot */}
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, padding: 15, justifyContent: 'space-between', width: '108%' }}>
          <ButtonBase title='Khoản chi' onPress={() => { }} />
          {/* <View style={{ width: 30 }} /> */}
          <ButtonBase title='Khoản thu' onPress={() => { }} background />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Paybook;

const styles = StyleSheet.create({
  wrapperCalender: {
    padding: 8,
    backgroundColor: COLORS.gray4,
    marginRight: 10,
    borderRadius: 8,
  },
  itemBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.gray5, marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10
  },
  textBox: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 25
  },
  icon: {
    height: 18, width: 18,
    tintColor: COLORS.red2,
    marginRight: 5
  }
});
