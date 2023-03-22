import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import { useRoute } from '@react-navigation/native'
const AddProducts = () => {
  const name = useRoute<any>().params.name;

  return (
    <View>
      <HeaderBase title='Thêm sản phẩm vào danh mục' isIconLeft={false} />
      <Text style={{ alignSelf: 'center' }}>Chọn sản phẩm thêm vào "{name}"</Text>
    </View>
  )
}

export default AddProducts

const styles = StyleSheet.create({})