import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

interface ButtonBaseTypeProps {
  title: string;
  background?: boolean;
  onPress?(): void;
  disable?: boolean
}
const ButtonBase = React.memo(function ButtonBase({
  title,
  background = false,
  onPress,
  disable= false
}: ButtonBaseTypeProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={disable ? () => {} : onPress}
      style={[
        [styles.container, disable ? {borderWidth: 0}: null],
        { backgroundColor: disable ? COLORS.gray1 : background ? COLORS.primary : COLORS.white1 },
      ]}>
      <Text style={{ color: disable ? COLORS.white1 : background ? COLORS.white1 : COLORS.primary }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

export default ButtonBase;

const styles = ScaledSheet.create({
  container: {
    padding: '13@s',
    minWidth: '150@s',
    paddingHorizontal: '40@s',
    borderColor: COLORS.primary,
    borderWidth: '1@s',
    borderRadius: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
