import { Text, View, ScrollView, TextInput } from 'react-native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { TakePhotos } from '../components';
import { COLORS } from 'assets/global/colors';
import { ScaledSheet } from 'react-native-size-matters';
import CollapsibleComponents from 'components/common/collapsible/CollapsibleComponents';
import { navigateToCameraFile } from 'utilities/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, deleteImage } from '../../../redux/imageSlice';
import InputProduct from '../components/InputProduct';
import AddIamgeProduct from '../components/AddIamgeProduct';
import uuid from 'react-native-uuid';
import { launchImageLibrary } from 'react-native-image-picker';
import AddInfor from 'components/common/collapsible/AddInfor';
import InputWithTitle from 'components/base/header/input/InputWithTitle';

interface ProductBodyInterface {
  onShowBottomSheet(): void;
  getData: any;
}
interface OptionInterface {
  savePhotos: boolean;
  mediaType: string;
}

const ProductBody = ({ onShowBottomSheet, getData }: ProductBodyInterface) => {
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
  const [remain, setRemain] = useState(0);
  const [dv, setDv] = useState('')
  const callbackChill = (_remain: number, _dv: string) => {
    setRemain(_remain)
    setDv(_dv)
  }
  const GetDataInput = (name: string, price: string, pricev: number) => {
    getData(name, price, listImages, pricev, remain, dv);
  };
  return (
    <ScrollView>
      <View style={styles.STouchImage}>
        <View style={{ marginRight: 5 }}>
          <TakePhotos
            title={listImages.length === 0 ? 'Tải ảnh lên' : ''}
            photo={require('assets/icons/png/ic_add_image.png')}
            onPress={TakePhotoFromLibrary}
          />
          <TakePhotos
            title={listImages.length === 0 ? 'Chụp ảnh' : ''}
            camera={require('assets/icons/png/ic_add_photo.png')}
            onPress={TakePhotoFromCamera}
          />
        </View>
        <AddIamgeProduct />
      </View>
      <InputProduct onPress={onShowBottomSheet} dataInput={GetDataInput} />
      <CollapsibleComponents
        Contents={() => <AddInfor dataChill={callbackChill} />}
        title={'Thêm thông tin'}
      />
    </ScrollView>
  );
};

export default ProductBody;

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
  deleteImage: {
    zIndex: 1,
    height: 24,
    width: 24,
    tintColor: COLORS.white1,
  },
});
