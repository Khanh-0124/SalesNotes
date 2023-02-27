import { StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { normalize, WIDTH } from 'assets/global/layout';

interface ItemType {
  title: string;
  number: number;
  image?: any;
  color: string;
}
const ItemSlide = ({ title, number, image, color }: ItemType) => {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        width: WIDTH * 0.4,
        marginTop: 10,
      }}>
      <View>
        <Text style={{ fontSize: normalize(14) }}>{title}</Text>
        <Text style={{ fontSize: normalize(14) }}>{number}</Text>
      </View>
    </View>
  );
};

export default ItemSlide;

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: {prop => prop.colo},
  // },
});
