import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import InputWithTitle from 'components/base/header/input/InputWithTitle'
import AddInfor from 'components/common/collapsible/AddInfor'
import CollapsibleComponents from 'components/common/collapsible/CollapsibleComponents'
import { TakePhotoFromCamera } from 'feature/camera/TakePhotoFromCamera'
import { TakePhotos } from 'feature/order/components'
import AddIamgeProduct from 'feature/order/components/AddIamgeProduct'
import InputProduct from 'feature/order/components/InputProduct'
import { useDispatch, useSelector } from 'react-redux'
import { launchImageLibrary } from 'react-native-image-picker'
import { navigateToCameraFile } from 'utilities/navigation'
import { addImage } from '../../../redux/imageSlice'
import uuid from 'react-native-uuid';
import { COLORS } from 'assets/global/colors'
import AddIamgeProductUpdate from './AddIamgeProductUpdate'
interface ProductBodyInterface {
  onShowBottomSheet(): void;
  getData: any;
}
const DetailProduct = ({ onShowBottomSheet, getData }: ProductBodyInterface) => {
  const dispatch = useDispatch();
  const TakePhotoFromCamera = useCallback(() => {
    navigateToCameraFile({ navigate: 'CreateProduct' });
  }, []);

  let options = {
    savePhotos: true,
    mediaType: 'photo',
    includeBase64: true,
    presentationStyle: 'overCurrentContext',
    storageOptions: {
      skipBackup: true,
    },
  };
  const TakePhotoFromLibrary = useCallback(async () => {
    // const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.CAMERA,
    // );
    // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //   const result = await launchCamera(options);
    //   let uri = result.assets[0].uri;
    //   console.log(uri);
    // }
    const result = await launchImageLibrary(options);
    let uri = result.assets[0].uri;
    // console.log(uri);
    dispatch(
      addImage({
        id: uuid.v4(),
        uri: uri,
      }),
    );
  }, []);
  const listImages = useSelector((state: any) => state.images.listImages);
  const GetDataInput = (name: string, price: string) => {
    getData(name, price, listImages);
  };
  return (
    <View>
      <HeaderBase title='Chi tiết sản phẩm' isIconLeft={false} />
      <ScrollView>
        <View style={styles.STouchImage}>
          <View style={{ marginRight: 5 }}>
            <TakePhotos
              title={listImages?.length === 0 ? 'Tải ảnh lên' : ''}
              photo={require('assets/icons/png/ic_add_image.png')}
              onPress={TakePhotoFromLibrary}
            />

            <TakePhotos
              title={listImages?.length === 0 ? 'Chụp ảnh' : ''}
              camera={require('assets/icons/png/ic_add_photo.png')}
              onPress={TakePhotoFromCamera}
            />
          </View>
          <AddIamgeProductUpdate />
        </View>
        <InputProduct onPress={onShowBottomSheet} dataInput={GetDataInput} />
        <CollapsibleComponents
          Contents={() => <AddInfor />}
          title={'Thêm thông tin'}
        />
        <CollapsibleComponents
          Contents={() => (
            <View style={{ paddingHorizontal: 15, marginVertical: 10 }}>
              <View style={{ marginBottom: 20 }}>
                <InputWithTitle title={'Giá khuyến mãi'} placeholder={'0.000'} />
              </View>
              <InputWithTitle
                title={'Mô tả'}
                placeholder={'Ví dụ: Mỳ ly hảo hảo chua cay'}
              />
            </View>
          )}
          title={'Thông tin Online'}
        />
      </ScrollView>
    </View>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  STouchImage: {
    backgroundColor: COLORS.gray2,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteImage: {
    zIndex: 1,
    height: 24,
    width: 24,
    tintColor: COLORS.white1,
  },
})