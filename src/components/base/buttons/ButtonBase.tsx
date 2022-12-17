import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

interface ButtonBaseTypeProps {
  title: string;
  background?: boolean;
}
const ButtonBase = React.memo(function ButtonBase({
  title,
  background = false,
}: ButtonBaseTypeProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.container,
        { backgroundColor: background ? COLORS.primary : COLORS.white1 },
      ]}>
      <Text style={{ color: background ? COLORS.white1 : COLORS.primary }}>
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
