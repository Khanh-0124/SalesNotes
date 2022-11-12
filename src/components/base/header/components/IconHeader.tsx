import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Svg from 'assets/icons/svg';
import { normalize, WIDTH } from 'assets/global/layout';
import { COLORS } from 'assets/global/colors';

const sizeIcon = normalize(24);
const IconHeader = () => {
  return (
    <View style={styles.rightHeader}>
      <TouchableOpacity activeOpacity={0.6}>
        <Svg.Qrcode width={sizeIcon} height={sizeIcon} fill={COLORS.white1} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <Svg.Chat width={sizeIcon} height={sizeIcon} fill={COLORS.white1} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <Svg.Bell width={sizeIcon} height={sizeIcon} fill={COLORS.white1} />
      </TouchableOpacity>
    </View>
  );
};

export default IconHeader;

const styles = StyleSheet.create({
  rightHeader: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});
