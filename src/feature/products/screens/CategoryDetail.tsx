import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const CategoryDetail = () => {
  const route = useRoute().params
  const categorys = useSelector((state: any) => state.categorys.listCategory[route?.id]);
  return (
    <View>
      {
        categorys.products.map((item: any, index: any) => {
          return <View>
            <Image source={{ uri: item.image[0].uri }} style={{ height: 24, width: 24 }} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        })
      }
    </View>
  )
}

export default CategoryDetail

const styles = StyleSheet.create({})