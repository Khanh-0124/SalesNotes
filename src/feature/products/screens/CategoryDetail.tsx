import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon'
import { COLORS } from 'assets/global/colors'
import { edit } from '../../../redux/categorySlice'
import ModalConfig from 'components/common/ModalConfig'
import ButtonBase from 'components/base/buttons/ButtonBase'

const CategoryDetail = () => {
  const route = useRoute<any>().params
  const dispatch = useDispatch()
  // const [name, setName] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState('')
  const categorys = useSelector((state: any) => state.categorys.listCategory[route?.id]);
  const Edit = () => {
    dispatch(edit({
      id: route.id,
      name: input
    }))
    setShowModal(false)
  }
  const f_show = () => {
    setShowModal(!showModal)
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
      <HeaderWithMultiIcon title={input || route.name} firtRightIcon={require('assets/icons/png/ic_search.png')} secondRightIcon={require('assets/icons/png/ic_edit.png')} onSecond={f_show} thirdRightIcon={require('assets/icons/png/ic_delete.png')} />
      <ModalConfig visible={showModal} layout={{ height: '30%', width: '80%' }}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)} style={{ position: 'absolute', right: -55, top: 5 }}>
              <Image
                source={require('assets/icons/png/ic_close.png')}
                style={{ height: 16, width: 16, tintColor: COLORS.gray3 }}
              />
            </TouchableOpacity>
            <View style={{
              marginVertical: 10,
              marginTop: 70,
              alignSelf: 'center',
              marginBottom: 20
            }}>
              <TextInput placeholder='Nhập tên danh mục' value={input} onChangeText={(text) => setInput(text)} />
            </View>
            <View style={{}}>
              <ButtonBase title='OK' onPress={Edit} background />
            </View>
          </View>
        </View>
      </ModalConfig>
      {
        categorys.products.map((item: any, index: any) => {
          return <View style={styles.SContainer}>
            <Image source={{ uri: item.image[0]?.uri }} style={{ height: 54, width: 54, borderRadius: 10 }} />
            <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
              <Text>{item.name}</Text>
              <Text style={{ color: COLORS.red2, fontWeight: '600' }}>{item.price} đ</Text>
            </View>
          </View>
        })
      }
    </View>
  )
}

export default CategoryDetail

const styles = StyleSheet.create({
  SContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: COLORS.white1,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10
  },
  header: {
    width: '100%',
    height: '100%',
  },
})