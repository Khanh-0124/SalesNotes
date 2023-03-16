import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from 'assets/global/colors'
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon'
import Products from './components/Products'
import Categorys from './components/Categorys'

const ManagerProducts = () => {
  const [select, setSelect] = useState(true)
  return (
    <View style={styles.Container}>
      <HeaderWithMultiIcon title={'Quản lý'} firtRightIcon={require('assets/icons/png/ic_search.png')} secondRightIcon={require('assets/icons/png/ic_barcode.png')} thirdRightIcon={require('assets/icons/png/ic_sort.png')} />
      <View style={{ paddingHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', height: 50 }}>
          <TouchableOpacity onPress={() => { setSelect(true) }} style={{ alignSelf: 'center' }}>
            <Text style={{ color: select ? COLORS.primary : COLORS.gray3, fontWeight: '500', fontSize: 15 }}>Sản phẩm</Text>
            {select ? (<View style={styles.lineColor} />) : <View style={styles.lineUncolor} />}
          </TouchableOpacity>
          <View style={{ height: 35, width: 1, backgroundColor: COLORS.gray4, alignSelf: 'center', marginHorizontal: '25%' }} />
          <TouchableOpacity onPress={() => { setSelect(false) }} style={{ alignSelf: 'center' }}>
            <Text style={{ color: !select ? COLORS.primary : COLORS.gray3, fontWeight: '500', fontSize: 15 }}>Danh mục</Text>
            {!select ? (<View style={styles.lineColor} />) : <View style={styles.lineUncolor} />}
          </TouchableOpacity>
        </View>
        {
          select ? <Products /> : <Categorys />
        }
      </View>
    </View>
  )
}

export default ManagerProducts

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white1,
  },
  SButton: {
    padding: 5,

  },
  lineColor: { width: '70%', height: 3, backgroundColor: COLORS.primary, marginTop: 10, alignSelf: 'center' },
  lineUncolor: { width: '70%', height: 3, backgroundColor: COLORS.white1, marginTop: 10, alignSelf: 'center' }
})