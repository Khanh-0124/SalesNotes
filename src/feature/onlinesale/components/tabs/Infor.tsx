import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import InputComponent from 'components/base/header/input/Input';
import InputWithTitle from 'components/base/header/input/InputWithTitle';

const Infor = ({ name, phone, add }: any) => {
  const [paramsCustom, setParamsCustom] = useState<any>({
    name: name,
    phone: phone,
    add: add,
  });
  const onTextChange = useCallback((keyName: string, value: string) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <InputWithTitle title={'Tên liên hệ'} placeholder={''} request value={paramsCustom.name} keyName={'name'}
        onTextChange={onTextChange} />
      <InputWithTitle title={'số điện thoại'} placeholder={''} value={paramsCustom.phone} keyName={'phone'}
        onTextChange={onTextChange} />
      <InputWithTitle title={'Địa chỉ'} placeholder={''} value={paramsCustom.add} keyName={'add'}
        onTextChange={onTextChange} />
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