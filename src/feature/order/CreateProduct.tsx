import { Text, View } from 'react-native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { ScaledSheet } from 'react-native-size-matters';
import BottomSheetComponent from 'components/common/BottomSheet';
import { WINDOW_HEIGHT } from '../../utilities';
import ProductBody from './components/ProductBody';
import Content from './components/BottomSheetContent';
import { useSelector, useDispatch } from 'react-redux';
import InputPlus from './components/InputPlus';
import { addProducts } from '../../redux/productSlice';
import { useNavigation } from '@react-navigation/native';


type NavigationType = {
  navigate(value: string): void;
}

const CreateProduct = memo(function CreateProduct() {
  const [show, setShow] = useState(false);
  const showInput = useSelector((state: any) => state.categorys.addCategory);
  const dispath = useDispatch();
  const listProduct = useSelector((state: any) => state.products.listProducts);
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
  return (
    <View
      // onPress={Keyboard.dismiss}
      accessible={false}
      style={styles.container}>
      <HeaderBase
        title={'Tạo sản phẩm'}
        bgColor={COLORS.primary}
        color={COLORS.white1}
      />
      <ProductBody
        onShowBottomSheet={() => {
          setShow(true);
        }}
        getData={GetInputData}
      />
      {/* footer component */}
      <View style={styles.SButton}>
        <ButtonBase title="Tạo thêm" onPress={() => {}} />
        <ButtonBase
          title="Hoàn tất"
          background={true}
          onPress={() => {
            dispath(
              addProducts({
                id: listProduct.length,
                name: name,
                price: price,
                remaining: `còn: ${5}`,
                image: {
                  uri: image,
                },
                touch: 0,
              }),
            );
            return navigation.navigate("CreateOrderScreen");
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
  );
});

export default CreateProduct;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  SButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '15@s',
    backgroundColor: COLORS.white1,
    padding: '15@s',
  },
  onShowBottomSheet: {
    zIndex: 1,
    height: 24,
    width: 24,
    tintColor: COLORS.white1,
  },
});
