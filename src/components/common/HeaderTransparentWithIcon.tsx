import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { WINDOW_HEIGHT } from 'utilities/index';
import { COLORS } from 'assets/global/colors';

type HeaderTransparentType = {
  tintColor?: string;
  onPress(): void;
};
const HeaderTransparent = ({
  tintColor = COLORS.black1,
  onPress,
}: HeaderTransparentType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('assets/icons/png/ic_arrow_left.png')}
        style={[styles.iconLeft, { tintColor: tintColor }]}
      />
    </TouchableOpacity>
  );
};

export default HeaderTransparent;

const styles = StyleSheet.create({
  iconLeft: {
    height: 30,
    width: 30,
    marginLeft: 20,
  },
});
