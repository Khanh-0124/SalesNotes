import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderBase from 'components/base/header/HeaderBase';
import { useSelector } from 'react-redux';
import { COLORS } from 'assets/global/colors';

const OnlineSale = () => {
  const client = useSelector((state: any) => state.clients.listClients)
  const convert = (name: string) => {
    let words = name.split(" ");
    let initials = "";
    for (let i = 0; i < words.length; i++) {
      initials += words[i].charAt(0); // lấy chữ cái đầu của từ
    }
    return initials;
  }
  return (
    <View style={{ flex: 1 }}>
      <HeaderBase iconBack={false} title='Khách hàng' isIconLeft={false} bgColor={'#fff'} />
      <View>
        <FlatList
          data={client}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white1, padding: 20 }}>
              <View style={{ marginRight: 20, }}>
                <Text style={{ color: COLORS.primary, fontSize: 20, fontWeight: '500' }}>{convert(item.name)}</Text>
              </View>
              <View>
                <Text style={{ fontWeight: '600' }}>{item.name}</Text>
                <Text>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        {/*  */}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: COLORS.white1 }}> + Thêm khách hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnlineSale;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingVertical: 15,
    position: 'absolute',
    paddingHorizontal: 15,
    bottom: 25, right: 10
  }
})