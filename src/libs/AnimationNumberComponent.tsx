import { StyleSheet, Text, View, TextStyle } from 'react-native';
import React, { useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import AnimateNumber from 'react-native-animate-number';

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
        <Text style={customTextStyle}>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(number)}
        </Text>
      ) : (
        <AnimateNumber
          value={number}
          countBy={707}
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
