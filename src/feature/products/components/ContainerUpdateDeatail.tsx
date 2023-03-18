import { StyleSheet, Text, View } from 'react-native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { ScaledSheet } from 'react-native-size-matters';
import BottomSheetComponent from 'components/common/BottomSheet';
import { WINDOW_HEIGHT } from '../../../utilities';
import Content from 'feature/order/components/BottomSheetContent';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DetailProduct from './DetailProduct';
import InputPlus from 'feature/order/components/InputPlus';
import { addProducts, updateDetail } from '../../../redux/productSlice';
import { useRoute } from '@react-navigation/native'
import { imageSlice } from '../../../redux/imageSlice';

type NavigationType = {
  navigate(value: string): void;
}

const ContainerUpdateDeatail = () => {
  const [show, setShow] = useState(false);
  const showInput = useSelector((state: any) => state.categorys.addCategory);
  const dispath = useDispatch();
  const route = useRoute().params;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();
  // const addField = useCallback(()=> {
  //   if()
  // }, [])
  const GetInputData = (name: string, price: string, uri: any) => {
    // console.log('man tao sp:', name, price);
    setName(name);
    setPrice(price);
    setImage(uri);
  };
  const navigation = useNavigation<NavigationType>();
  // console.log(image)
  return (
    <View>
      <DetailProduct onShowBottomSheet={() => {
        setShow(true);
      }}
        getData={GetInputData} />
      {/* footer component */}
      <View style={styles.SButton}>
        <ButtonBase title="Xoá" onPress={() => { }} />
        <ButtonBase
          title="Cập nhật"
          background={true}
          onPress={() => {
            dispath(
              updateDetail({
                id: route.id,
                image: image
              })
            )
            return navigation.navigate("ManagerProducts");
          }}
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