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
import { reset } from '../../redux/imageSlice';
import { actionProducts, resetCate } from '../../redux/categorySlice';
import { addData } from '../../servers/firebase/crud';


type NavigationType = {
  navigate(value: string): void;
}

const CreateProduct = memo(function CreateProduct() {
  const [show, setShow] = useState(false);
  const categorys = useSelector((state: any) => state.categorys);
  const showInput = useSelector((state: any) => state.categorys.addCategory);
  const dispath = useDispatch();
  const listProduct = useSelector((state: any) => state.products.listProducts);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [pricev, setPricev] = useState(0);
  const [image, setImage] = useState();
  const [remain, setRemain] = useState(0);
  const [dv, setDv] = useState('')
  const GetInputData = (name: string, price: string, uri: any, pricev: number, remain: number, dv: string) => {
    setName(name);
    setPrice(price);
    setImage(uri);
    setPricev(pricev);
    setDv(dv)
    setRemain(remain)
  };
  const navigation = useNavigation<NavigationType>();
  const handleSubmit = async (id: number, name: string, price: any, image: any, touch: number, nav: boolean) => {
    dispath(
      actionProducts(
        {
          product: {
            id: id,
            name: name,
            price: price,
            pricev: pricev,
            remain: remain,
            image: image,
            touch: touch,
            dv: dv
          }
        }
      )
    )
    dispath(
      addProducts({
        id: id,
        name: name,
        price: price,
        pricev: pricev,
        remain: remain,
        image: image,
        touch: touch,
        dv: dv
      }),
    );
    dispath(reset({
      reset: []
    }))
    dispath(resetCate({
      set: false
    }))
    return nav ? navigation.navigate("CreateOrderScreen") : null;
  }
  useEffect(() => {
    if (categorys.listCategory.length !== 0)
      addData('ClientStack', "ListCategorys", { ListCategorys: categorys })
  }, [categorys])
  return (
    <View
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
        <ButtonBase title="Tạo thêm" onPress={() => handleSubmit(listProduct.length, name, price, image, 0, false)} />
        <ButtonBase
          title="Hoàn tất"
          background={true}
          onPress={() => handleSubmit(listProduct.length, name, price, image, 0, true)}
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
