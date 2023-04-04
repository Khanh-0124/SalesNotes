import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import InputComponent from 'components/base/header/input/Input';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { deleteCustomer, updateCustomer } from '../../../../redux/clientSlice';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const Infor = ({ name, phone, add, id }: any) => {
  const navigation = useNavigation<any>()
  const [paramsCustom, setParamsCustom] = useState<any>({
    name: name,
    phone: phone,
    add: add,
  });
  const onTextChange = useCallback((keyName: string, value: string) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <InputWithTitle title={'Tên liên hệ'} placeholder={''} request value={paramsCustom.name} keyName={'name'}
        onTextChange={onTextChange} />
      <InputWithTitle title={'số điện thoại'} placeholder={''} value={paramsCustom.phone} keyName={'phone'}
        onTextChange={onTextChange} />
      <InputWithTitle title={'Địa chỉ'} placeholder={''} value={paramsCustom.add} keyName={'add'}
        onTextChange={onTextChange} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 0, position: 'absolute', padding: 15, width: '108%' }}>
        <ButtonBase title='Xoá' onPress={() => {
          Alert.alert('', 'Xác định xoá?', [
            {
              text: 'Xoá',
              onPress: () => {
                dispatch(deleteCustomer({
                  id: id
                }))
                return navigation.goBack()
              },
            },
            {
              text: 'Huỷ',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ]);
        }} />
        <ButtonBase title='Cập nhật' background onPress={() => {
          dispatch(updateCustomer({
            id: id,
            name: paramsCustom.name,
            phone: paramsCustom.phone,
            add: paramsCustom.add
          }))
          Alert.alert('', 'Cập nhật thành công', [
            {
              onPress: () => console.log('Cancel Pressed'),
              style: 'default',
            },
          ]);

        }} />
      </View>
    </View>
  )
}

export default Infor

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 10,
  },
})