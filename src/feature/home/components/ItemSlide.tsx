import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { normalize, WIDTH } from 'assets/global/layout';

interface ItemType {
  title: string;
  number: number;
  image?: any;
  color: string;
  bgColor?: string
}
const ItemSlide = ({ title, number, image, color, bgColor }: ItemType) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        backgroundColor: color,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        width: WIDTH * 0.4,
        marginTop: 10,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 10, backgroundColor: bgColor, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
          <Image style={{ height: 18, width: 18, tintColor: 'white' }} source={image} />
        </View>
        <View>
        <Text style={{ fontSize: normalize(14) }}>{title}</Text>
        <Text style={{ fontSize: normalize(14) }}>{number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSlide;

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: {prop => prop.colo},
  // },
});
