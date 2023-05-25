import { StyleSheet, Text, View, TextStyle } from 'react-native';
import React, { useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import AnimateNumber from 'react-native-animate-number';
import { formatVND } from 'assets/global/formatMoney';

interface AnimationType {
  number: number;
  unit: boolean;
  customTextStyle: TextStyle;
}
const AnimationNumberComponent = ({
  number,
  unit,
  customTextStyle,
}: AnimateNumber) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View>
      {isShow && unit ? (
        <Text style={customTextStyle}>{formatVND(number) || 0} đ</Text>
      ) : (
        <AnimateNumber
          value={number}
          countBy={25370}
          timing="linear"
          onFinish={() => setIsShow(true)}
          style={customTextStyle}
        />
      )}
    </View>
  );
};

export default AnimationNumberComponent;

const styles = StyleSheet.create({});
