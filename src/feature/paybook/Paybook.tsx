import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import TouchTabView from 'components/common/TouchTabView';
import { COLORS } from 'assets/global/colors';

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
      <View style={{ padding: 15 }}>
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
            <Text>Tổng thu</Text>
            <Text style={[styles.textBox, { color: COLORS.red2 }]}>{`120.000`}</Text>
          </View>
          <View style={styles.itemBox}>
            <Text>Tổng chi</Text>
            <Text style={[styles.textBox, { color: COLORS.green2 }]}>{`120.000`}</Text>
          </View>
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
    marginTop: 10
  }
});
