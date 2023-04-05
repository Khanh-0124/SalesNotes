import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { COLORS } from 'assets/global/colors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage } from '../../../redux/imageSlice';
import { addData } from '../../../servers/firebase/crud';

interface ImageInterface {
  id: number;
  uri: string;
}

const AddIamgeProductUpdate = () => {
  const dispath = useDispatch();
  const listImages = useSelector((state: any) => state.images.listImages);
  const handleDeleteImage = (id: number) => {
    dispath(
      deleteImage({
        id,
      }),
    );
  };
  useEffect(() => {
    if (listImages.length !== 0)
      addData('ClientStack', "ListImages", { ListImages: listImages })
  }, [listImages])
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        flexDirection: 'row',
      }}>
      {listImages?.map((item: ImageInterface) => (
        <View key={item.id}>
          <Image source={{ uri: item.uri }} style={styles.imageFromList} />
          <TouchableOpacity
            style={styles.wrapperDeleteImage}
            onPress={() => handleDeleteImage(item.id)}>
            <Image
              source={require('assets/icons/png/icon_x_mark.png')}
              style={styles.deleteImage}
            />
          </TouchableOpacity>
          <View style={styles.wrapperIndex}>
            <Text style={styles.indexNumber}>
              {listImages.map((e: { id: number }) => e.id).indexOf(item.id) + 1}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default AddIamgeProductUpdate;

const styles = StyleSheet.create({
  wrapperIndex: {
    position: 'absolute',
    left: 15,
    backgroundColor: COLORS.white1,
    width: 24,
    height: 24,
    borderRadius: 50,
    top: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  indexNumber: {
    color: COLORS.primary,
    zIndex: 2,
    alignSelf: 'center',
    textAlign: 'center',
  },
  imageFromList: {
    height: 90,
    width: 90,
    marginLeft: 10,
    borderRadius: 10,
  },
  deleteImage: {
    zIndex: 1,
    height: 24,
    width: 24,
    tintColor: COLORS.white1,
  },
  wrapperDeleteImage: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
