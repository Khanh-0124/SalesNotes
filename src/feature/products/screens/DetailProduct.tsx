import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import InputWithTitle from 'components/base/header/input/InputWithTitle'
import AddInfor from 'components/common/collapsible/AddInfor'
import CollapsibleComponents from 'components/common/collapsible/CollapsibleComponents'
import { TakePhotoFromCamera } from 'feature/camera/TakePhotoFromCamera'
import { TakePhotos } from 'feature/order/components'
import AddIamgeProduct from 'feature/order/components/AddIamgeProduct'
import { useDispatch, useSelector } from 'react-redux'
import { launchImageLibrary } from 'react-native-image-picker'
import { navigateToCameraFile } from 'utilities/navigation'
import { addImage } from '../../../redux/imageSlice'
import uuid from 'react-native-uuid';
import { COLORS } from 'assets/global/colors'
import AddIamgeProductUpdate from '../components/AddIamgeProductUpdate'
import { addData } from '../../../servers/firebase/crud'
import InputProductUpdate from 'feature/order/components/InputProductUpdate'
interface ProductBodyInterface {
  onShowBottomSheet(): void;
  getData: any;
  id: number
}
const DetailProduct = ({ onShowBottomSheet, getData, id }: ProductBodyInterface) => {
  const product = useSelector((state: any) => state.products.listProducts[id])
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
  const [paramsCustom, setParamsCustom] = useState<any>({
    dv: product?.dv || "",
    remain: product?.remaining,
  });
  const onTextChange = useCallback((keyName: string, value: string) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);
  const listImages = useSelector((state: any) => state.images.listImages);
  const GetDataInput = (name: string, price: string, pricev: any) => {
    getData(name, price, listImages, pricev, paramsCustom.dv, paramsCustom.remain);
  };
  useEffect(() => {
    if (listImages.length !== 0)
      addData('ClientStack', "ListImages", { ListImages: listImages })
  }, [listImages])
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
        <InputProductUpdate onPress={onShowBottomSheet} dataInput={GetDataInput} id={id} />
        <View style={{ padding: 15, backgroundColor: '#fff' }}>
          <InputWithTitle
            title="Tồn kho"
            placeholder="0"
            value={paramsCustom.remain}
            keyName={'remain'}
            type={'number-pad'}
            onTextChange={onTextChange}
          />
          <InputWithTitle
            title="Đơn vị"
            placeholder="Ví dụ: cái"
            value={paramsCustom.dv}
            keyName={'dv'}
            onTextChange={onTextChange}
          />
        </View>
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