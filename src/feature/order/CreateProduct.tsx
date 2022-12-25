import { Text, View, ScrollView, Keyboard, Image } from 'react-native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { TakePhotos } from './components';
import { COLORS } from 'assets/global/colors';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { ScaledSheet } from 'react-native-size-matters';
import BottomSheetComponent from 'components/common/BottomSheet';
import CollapsibleComponents from 'components/common/collapsible/CollapsibleComponents';
import { WINDOW_HEIGHT } from '../../utilities';
import { navigateToCameraFile } from 'utilities/navigation';
import { useSelector } from 'react-redux';

const CreateProduct = memo(function CreateProduct() {
  const [show, setShow] = useState(false);
  const TakePhotoFromCamera = useCallback(() => {
    navigateToCameraFile();
  }, []);
  const listImages = useSelector(state => state.images.listImages);
  return (
    <View
      onPress={Keyboard.dismiss}
      accessible={false}
      style={styles.container}>
      <HeaderBase
        title={'Tạo sản phẩm'}
        bgColor={COLORS.primary}
        color={COLORS.white1}
      />
      <ScrollView>
        <View style={styles.STouchImage}>
          <View>
            <TakePhotos
              title={'Tải ảnh lên'}
              photo={require('assets/icons/png/ic_add_image.png')}
              onPress={TakePhotoFromCamera}
            />
            <TakePhotos
              title={'Chụp ảnh'}
              camera={require('assets/icons/png/ic_add_photo.png')}
              onPress={TakePhotoFromCamera}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {listImages.map(item => (
              <View key={item.id}>
                <Image
                  source={{ uri: item.uri }}
                  style={{ height: 90, width: 90, marginLeft: 5 }}
                />
              </View>
            ))}
          </View>
        </View>
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
            />
            <View style={{ width: 25 }} />
            <InputWithTitle title="Giá vốn" placeholder="0.000" flex={1} />
          </View>
          <InputWithTitle
            title="Danh mục"
            placeholder="Chọn 1 hoặc nhiều danh mục"
            editable={false}
            leftIcon={require('assets/icons/png/ic_down_arrow.png')}
            onPress={() => {
              setShow(true);
            }}
          />
        </View>
        <CollapsibleComponents title="Thêm thông tin" />
        <CollapsibleComponents title="Thông tin bán Online" />
      </ScrollView>
      {/* footer component */}
      <View style={styles.SButton}>
        <ButtonBase title="Tạo thêm" />
        <ButtonBase title="Hoàn tất" background={true} />
      </View>
      {show ? (
        <BottomSheetComponent
          bottom={0}
          title="Danh mục"
          height={WINDOW_HEIGHT * 0.6}
          onPress={() => setShow(false)}
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
  STouchImage: {
    backgroundColor: COLORS.gray2,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '15@s',
    backgroundColor: COLORS.white1,
    padding: '15@s',
  },
});
