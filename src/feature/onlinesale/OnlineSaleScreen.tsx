import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import HeaderBase from 'components/base/header/HeaderBase';
import { useSelector } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import ModalConfig from 'components/common/ModalConfig';
import { ParamAddClientInterface } from 'feature/auth/type';
import InputComponent from 'components/base/header/input/Input';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { useNavigation } from '@react-navigation/native';

const OnlineSale = () => {
  const client = useSelector((state: any) => state.clients.listClients)
  const convert = (name: string) => {
    let words = name.split(" ");
    let initials = "";
    for (let i = 0; i < words.length; i++) {
      initials += words[i].charAt(0);
    }
    return initials;
  }
  const [paramsCustom, setParamsCustom] = useState<ParamAddClientInterface>({
    name: '',
    phone: '',
    show: false,
    add: '',
    modalAdd: false
  });
  const onTextChange = useCallback((keyName: string, value: any) => {
    setParamsCustom(state => ({ ...state, [keyName]: value }));
  }, []);
  const navigation = useNavigation<any>()

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
      <TouchableOpacity style={styles.button} onPress={() =>
        onTextChange("show", true)
      }>
        <Text style={{ color: COLORS.white1 }}> + Thêm khách hàng</Text>
      </TouchableOpacity>
      {/*  */}
      <ModalConfig onOffShow={() => onTextChange("show", false)} visible={paramsCustom.show} layout={{ height: 300, width: '90%' }}>
        <View style={{ width: '100%', paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: '600', alignSelf: 'center' }}>Thêm vào danh bạ</Text>
          <InputComponent title={'Tên liên hệ'}
            value={paramsCustom.name}
            keyName={'name'}
            placeholder='Ví dụ: Tạp hoá Khánh Zùa'
            onTextChange={onTextChange} />
          <InputComponent title={'Số điện thoại'}
            value={paramsCustom.phone}
            keyName={'phone'}
            placeholder='Ví dụ: Tạp hoá Khánh Zùa'
            onTextChange={onTextChange} />
          <InputComponent title={'Địa chỉ'}
            value={paramsCustom.add}
            keyName={'add'}
            disable
            placeholder='Ví dụ: Tạp hoá Khánh Zùa'
            onPress={() => {
              onTextChange("show", false)
              return navigation.navigate("AddressScreen")
            }}
            onTextChange={onTextChange} />
          <TouchableOpacity style={styles.SinputStyle} onPress={() => {
            onTextChange("show", false)
          }}>
            <Text style={{ color: COLORS.white1 }}>Thêm</Text>
          </TouchableOpacity>
        </View>
      </ModalConfig>
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
  },
  SinputStyle: { justifyContent: 'center', alignItems: 'center', padding: 8, backgroundColor: COLORS.primary, borderRadius: 10, width: 100, height: 40, alignSelf: 'center', marginTop: 20 }
})