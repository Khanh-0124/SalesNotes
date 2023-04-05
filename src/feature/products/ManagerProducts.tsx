import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from 'assets/global/colors'
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon'
import Products from './screens/Products'
import Categorys from './screens/Categorys'
import { useDispatch, useSelector } from 'react-redux'
import { addList, plusCate } from '../../redux/categorySlice'
import { addData } from '../../servers/firebase/crud'

const ManagerProducts = () => {
  const [select, setSelect] = useState(true)
  const categorys = useSelector((state: any) => state.categorys.listCategory);
  const category = useSelector((state: any) => state.categorys);
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    addData('ClientStack', "ListCategorys", { ListCategorys: category })
  }, [categorys])

  return (
    <View style={styles.Container}>
      <HeaderWithMultiIcon clean={true} title={'Quản lý'} firtRightIcon={require('assets/icons/png/ic_search.png')} secondRightIcon={require('assets/icons/png/ic_barcode.png')} thirdRightIcon={require('assets/icons/png/ic_sort.png')} />
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
      {!select && (<TouchableOpacity onPress={() => {
        dispatch(
          addList({
            id: categorys.length,
            addItem: inputData,
            image: null,
            tick: false,
          }),
        );
        dispatch(
          plusCate({
            addCate: false,
          }),
        );
      }} activeOpacity={0.5}
        style={{ position: 'absolute', bottom: 20, right: 15, padding: 10, backgroundColor: COLORS.primary, borderRadius: 50 }}>
        <Text style={{ color: COLORS.white1 }}>+ Tạo danh mục</Text>
      </TouchableOpacity>)}

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