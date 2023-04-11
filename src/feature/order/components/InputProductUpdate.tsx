import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { COLORS } from 'assets/global/colors';
import { ParamInputProductInterface } from 'feature/auth/type';
import { useSelector } from 'react-redux';

interface InputProductInterface {
  onPress(): void;
  dataInput: any;
  id: number
}

const InputProductUpdate = ({ onPress, dataInput, id }: InputProductInterface) => {
  const product = useSelector((state: any) => state.products.listProducts[id])
  const [paramsCustom, setParamsCustom] = useState<ParamInputProductInterface>({
    nameProduct: product.name,
    price: product.price,
    costPrice: product.pricev,
  });
  dataInput(paramsCustom.nameProduct, paramsCustom.price, paramsCustom.costPrice);
  const onTextChange = useCallback((keyName: string, value: string) => {
    setParamsCustom(state => ({ ...state, [keyName]: value }));
  }, []);

  // console.log('Test', paramsCustom.price, paramsCustom.nameProduct);
  return (
    <View
      style={{
        backgroundColor: COLORS.white1,
        paddingVertical: 10,
        paddingHorizontal: 16,
      }}>
      <InputWithTitle
        title="Tên sản phẩm"
        request
        placeholder="Ví dụ: Mì Hảo Hảo"
        value={paramsCustom.nameProduct}
        keyName={'nameProduct'}
        onTextChange={onTextChange}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <InputWithTitle
          title="Giá bán"
          request
          placeholder="0.000"
          flex={1}
          keyName={'price'}
          value={paramsCustom.price}
          onTextChange={onTextChange}
        />
        <View style={{ width: 25 }} />
        <InputWithTitle
          title="Giá vốn"
          placeholder="0.000"
          flex={1}
          keyName={'costPrice'}
          value={paramsCustom.costPrice}
          onTextChange={onTextChange}
          type={'number-pad'}
        />
      </View>
      <InputWithTitle
        title="Danh mục"
        placeholder="Chọn 1 hoặc nhiều danh mục"
        editable={false}
        leftIcon={require('assets/icons/png/ic_down_arrow.png')}
        onPress={onPress}
      />
    </View>
  );
};;

export default InputProductUpdate;

const styles = StyleSheet.create({});
