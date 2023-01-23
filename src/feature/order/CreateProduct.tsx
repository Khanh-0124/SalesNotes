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

const CreateProduct = memo(function CreateProduct() {
  const [show, setShow] = useState(false);
  // const addField = useCallback(()=> {
  //   if()
  // }, [])
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
      />
      {/* footer component */}
      <View style={styles.SButton}>
        <ButtonBase title="Tạo thêm" onPress={() => {}} />
        <ButtonBase title="Hoàn tất" background={true} onPress={() => {}} />
      </View>
      {show ? (
        <BottomSheetComponent
          bottom={0}
          title="Danh mục"
          height={WINDOW_HEIGHT * 0.6}
          onPress={() => setShow(false)}
          childrenComponents={<Content />}
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
