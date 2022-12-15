import { Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from 'assets/global/colors';
import { ScaledSheet } from 'react-native-size-matters';
import AnimateNumber from 'react-native-animate-number';
import AnimationNumberComponent from '../../../libs/AnimationNumberComponent';
AnimationNumberComponent;

interface WrapperType {
  title: string;
  uri: any;
  number: number;
  unit?: boolean;
}
const WrapperContent = ({ title, uri, number, unit }: WrapperType) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={uri} style={styles.icon} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <AnimationNumberComponent
            number={number}
            unit={unit}
            customTextStyle={{ color: COLORS.primary, fontSize: 15 }}
          />
        </View>
      </View>
    </View>
  );
};

export default WrapperContent;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: COLORS.gray5,
    padding: '15@s',
    borderRadius: '8@s',
    width: '48%',
  },
  title: {
    fontSize: '14@s',
    marginBottom: '5@s',
  },
  icon: {
    height: '14@s',
    width: '14@s',
    tintColor: COLORS.primary,
    marginRight: '10@s',
  },
});
