import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

interface TakePhotoProps {
  title: string;
  photo?: any;
  camera?: any;
}
const TakePhotos = ({ title, photo, camera }: TakePhotoProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <Image source={photo | camera} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TakePhotos;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    padding: '8@s',
    borderWidth: '1@s',
    borderColor: COLORS.primary,
    borderRadius: '10@s',
    width: '120@s',
    alignItems: 'center',
    backgroundColor: COLORS.white1,
    marginVertical: '5@s',
  },
  icon: {
    height: '24@s',
    width: '24@s',
    tintColor: COLORS.primary,
  },
  title: {
    marginLeft: '10@s',
  },
});