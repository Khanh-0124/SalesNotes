import {
  Text,
  View,
  ScrollView,
  Keyboard,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { TakePhotos } from '../components';
import { COLORS } from 'assets/global/colors';
import { ScaledSheet } from 'react-native-size-matters';
import CollapsibleComponents from 'components/common/collapsible/CollapsibleComponents';
import {
  navigateToCameraFile,
  navigateToProductScreen,
} from 'utilities/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, deleteImage } from '../../../redux/imageSlice';
import InputProduct from '../components/InputProduct';
import AddIamgeProduct from '../components/AddIamgeProduct';
import uuid from 'react-native-uuid';
import {
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

interface ProductBodyInterface {
  onShowBottomSheet(): void;
}
interface OptionInterface {
  savePhotos: boolean;
  mediaType: string;
}

const ProductBody = ({ onShowBottomSheet }: ProductBodyInterface) => {
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
    console.log(uri);
    dispatch(
      addImage({
        id: uuid.v4(),
        uri: uri,
      }),
    );
  }, []);
  const listImages = useSelector((state: any) => state.images.listImages);
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
      <InputProduct onPress={onShowBottomSheet} />
      <CollapsibleComponents title="Thêm thông tin" />
      <CollapsibleComponents title="Thông tin bán Online" />
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
