import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon'

const DetailOrder = () => {
  const route = useRoute<any>().params
  const order = useSelector((state: any) => state.orders.listOrders[route.id]);
  console.log(order)
  return (
    <View>
      <HeaderWithMultiIcon title='Chi tiết hoá đơn' firtRightIcon={{}} />
      <Text>{order.code}</Text>
    </View>
  )
}

export default DetailOrder

const styles = StyleSheet.create({})