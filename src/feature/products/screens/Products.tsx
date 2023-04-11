import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';
import { update } from '../../../redux/imageSlice';

type NavigationType = {
  navigate(value: string, params: any): void
}

const Products = () => {
  const dispath = useDispatch()
  const products = useSelector((state: any) => state.products);
  const proBySort = useSelector((state: any) => state.user.listProBySort);
  const navigation = useNavigation<NavigationType>()
  return (
    <View>
      <FlatGrid
        itemDimension={100}
        data={proBySort.length > 0 ? proBySort : products.listProducts}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={15}
        renderItem={({ item, index }) => (<TouchableOpacity onPress={() => {
          dispath(update({
            imagesList: products.listProducts[item.id]?.image
          }))
          return navigation.navigate("ContainerUpdateDeatail", { id: index, idUpdate: item.id })
        }} style={styles.containerItem}>
          {
            item.remaining == 0 ? (<View style={{ position: 'absolute', top: 25, zIndex: 1, alignSelf: 'center', paddingVertical: 10, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 8 }}>
              <Text>Tạm hết hàng</Text>
            </View>) : null
          }
          <Image source={item.image} style={styles.image} resizeMode='cover' />
          <View style={{ width: '90%', height: 1, backgroundColor: COLORS.gray1, marginTop: 5, alignSelf: 'center' }} />
          <Text style={{ marginVertical: 5, marginLeft: 10 }}>{item.name}</Text>
          <Text style={{ marginBottom: 5, marginLeft: 10, fontSize: 12 }}>{item.dv}</Text>
          <Text style={{ color: COLORS.red2, marginLeft: 10 }}>{item.price} đ</Text>
        </TouchableOpacity>)
        }
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
  },
  Hh: { position: 'absolute', zIndex: 1, backgroundColor: '#fff', alignSelf: 'center', borderRadius: 5, top: 25, paddingVertical: 10, paddingHorizontal: 5 }
})