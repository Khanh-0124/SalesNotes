import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';

type NavigationType = {
  navigate(value: string): void
}

const Products = () => {
  const products = useSelector((state: any) => state.products);
  const navigation = useNavigation<NavigationType>()
  return (
    <View style={{}}>
      <FlatGrid
        itemDimension={100}
        data={products.listProducts}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={15}
        renderItem={({ item }) => (<TouchableOpacity onPress={() => navigation.navigate("ContainerUpdateDeatail")} style={styles.containerItem}>
          <Image source={item.image} style={styles.image} resizeMode='cover' />
          <View style={{ width: '90%', height: 1, backgroundColor: COLORS.gray1, marginTop: 5, alignSelf: 'center' }} />
          <Text style={{ marginVertical: 5, marginLeft: 10 }}>{item.name}</Text>
          <Text style={{ color: COLORS.red2, marginLeft: 10 }}>{item.price} đ</Text>
        </TouchableOpacity>)}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  gridView: {},
  containerItem: {
    backgroundColor: COLORS.white1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingBottom: 4,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    height: 90,
    width: '100%',
    borderRadius: 10
  }
})