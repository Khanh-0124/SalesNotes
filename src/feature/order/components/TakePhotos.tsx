import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

interface TakePhotoProps {
  title: string;
  photo?: any;
  camera?: any;
  onPress(): void;
}
const TakePhotos = ({ title, photo, camera, onPress }: TakePhotoProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}>
      <Image source={photo | camera} style={styles.icon} />
      <Text style={[styles.title, title ? { paddingHorizontal: 8 } : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(TakePhotos);

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    padding: '8@s',
    borderWidth: '1@s',
    borderColor: COLORS.primary,
    borderRadius: '10@s',
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
    color: COLORS.primary,
    fontSize: '14@s',
  },
});
