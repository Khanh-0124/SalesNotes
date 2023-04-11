import { StyleSheet, Text, View } from 'react-native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { ScaledSheet } from 'react-native-size-matters';
import BottomSheetComponent from 'components/common/BottomSheet';
import { WINDOW_HEIGHT } from '../../../utilities';
import Content from 'feature/order/components/BottomSheetContent';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DetailProduct from '../screens/DetailProduct';
import InputPlus from 'feature/order/components/InputPlus';
import { deleteProduct, updateDetail } from '../../../redux/productSlice';
import { useRoute } from '@react-navigation/native'

type NavigationType = {
  navigate(value: string): void;
}

const ContainerUpdateDeatail = () => {
  const [show, setShow] = useState(false);
  const showInput = useSelector((state: any) => state.categorys.addCategory);
  const dispath = useDispatch();
  const route = useRoute<any>().params;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [pricev, setPricev] = useState(0);
  const [image, setImage] = useState();
  const [dv, setDV] = useState('');
  const [remain, setRemain] = useState(0);
  const GetInputData = (name: string, price: string, uri: any, pricev: number, dv: string, remain: number) => {
    setName(name);
    setPrice(price);
    setImage(uri);
    setPricev(pricev);
    setDV(dv);
    setRemain(remain)
  };
  const navigation = useNavigation<NavigationType>();
  const handleUpdate = () => {
    // console.log(name)
    dispath(updateDetail({ id: route?.id, image: image, name: name, price: price, pricev: pricev, dv: dv, remain: remain }));
    return navigation.navigate("ManagerProducts");
  }
  return (
    <View>
      <DetailProduct onShowBottomSheet={() => {
        setShow(true);
      }}
        getData={GetInputData} id={route.idUpdate} />
      {/* footer component */}
      <View style={styles.SButton}>
        <ButtonBase title="Xoá" onPress={() => {
          dispath(deleteProduct({
            id: route.id
          }))
          return navigation.navigate("ManagerProducts");
        }} />
        <ButtonBase
          title="Cập nhật"
          background={true}
          onPress={() => handleUpdate()}
        />
      </View>
      {show ? (
        <BottomSheetComponent
          bottom={0}
          title="Danh mục"
          height={WINDOW_HEIGHT * 0.6}
          onPress={() => setShow(false)}
          childrenComponents={showInput ? <InputPlus /> : <Content />}
        />
      ) : null}
    </View>
  )
}

export default ContainerUpdateDeatail

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: COLORS.white1,
    padding: 15,
  },
  onShowBottomSheet: {
    zIndex: 1,
    height: 24,
    width: 24,
    tintColor: COLORS.white1,
  },
})