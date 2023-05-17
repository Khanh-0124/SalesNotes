import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from 'assets/global/colors'
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon'
import Products from './screens/Products'
import Categorys from './screens/Categorys'
import { useDispatch, useSelector } from 'react-redux'
import { addList, plusCate } from '../../redux/categorySlice'
import { addData } from '../../servers/firebase/crud'
import { sortByProductNameAZ, sortByProductNameZA, sortByProductLowPrice, sortByProductHightPrice, sortByProductOutOfStock } from 'assets/global/sortByName'
import { productsByAZ } from '../../redux/productSlice'
import { addPro } from '../../redux/userSlice'

const sortList = [
  { id: 1, name: "Sản phẩm bán chạy" },
  { id: 2, name: "Giá từ cao đến thấp" },
  { id: 3, name: "Giá từ thấp đến cao" },
  { id: 4, name: "Từ A-Z" },
  { id: 5, name: "Từ Z-A" },
  { id: 6, name: "Sản phẩm hết hàng" },
]
const ManagerProducts = () => {
  const [select, setSelect] = useState(true)
  const categorys = useSelector((state: any) => state.categorys.listCategory);
  const productsStore = useSelector((state: any) => state.products.listProducts);
  const category = useSelector((state: any) => state.categorys);
  const [inputData, setInputData] = useState('');
  const [dataSort, setDataSort] = useState(sortList);
  const [show, setShow] = useState(false);
  const [choose, setChoose] = useState(false);
  const dispatch = useDispatch();
  let productsByName: any;

  const handleSortAZ = (id: number) => {
    switch (id) {
      case 1:
        productsByName = sortByProductLowPrice(productsStore);
        break;
      case 2:
        productsByName = sortByProductHightPrice(productsStore);
        break;
      case 3:
        productsByName = sortByProductLowPrice(productsStore);
        break;
      case 4:
        productsByName = sortByProductNameAZ(productsStore);
        break;
      case 5:
        productsByName = sortByProductNameZA(productsStore);
        break;
      case 6:
        productsByName = sortByProductOutOfStock(productsStore);
        break;
    }
    // dispatch(productsByAZ({
    //   newproducts: productsByName
    // }))
    dispatch(addPro({
      data: productsByName
    }))
  }
  // console.log(productsByNameAZ)

  useEffect(() => {
    addData('ClientStack', "ListCategorys", { ListCategorys: category })
  }, [categorys])

  const ScaleInView = (props: any) => {
    const [scaleAnim] = useState(new Animated.Value(0)); // Khởi tạo giá trị ban đầu của scaleAnim là 0

    useEffect(() => {
      Animated.timing(
        scaleAnim,                       // Truyền giá trị scaleAnim vào hàm timing
        {
          toValue: 1,                   // Đặt giá trị đích của animation là 1 (phóng to view)
          duration: 400,               // Thiết lập thời gian thực hiện animation là 1 giây
          useNativeDriver: true         // Sử dụng native driver để cải thiện hiệu suất của animation
        }
      ).start();                        // Bắt đầu thực hiện animation khi component mount

      return () => {
        scaleAnim.setValue(0);         // Đặt lại giá trị của scaleAnim khi component unmount
      }
    }, [])

    return (
      <Animated.View
        style={{
          ...props.style,
          transform: [{ scale: scaleAnim }],  // Sử dụng transform để thay đổi kích thước view
        }}>
        {props.children}
      </Animated.View>
    );
  }

  return (
    <View style={styles.Container}>
      <HeaderWithMultiIcon clean={true} title={'Quản lý'} firtRightIcon={require('assets/icons/png/ic_search.png')} secondRightIcon={require('assets/icons/png/ic_barcode.png')} onFirt={() => { console.log("a") }} onThird={() => { setShow(!show) }} thirdRightIcon={require('assets/icons/png/ic_sort.png')} />
      {
        show ? (<ScaleInView style={styles.animated}>
          {dataSort.map((item: any) => <TouchableOpacity onPress={() => {
            setChoose(item.id);
            setShow(false)
            handleSortAZ(item.id)
          }} key={item.id} style={styles.modal}>
            {
              <View style={{ padding: 2, borderRadius: 20, borderWidth: 1, borderColor: choose == item.id ? COLORS.primary : COLORS.gray1, marginRight: 10 }}>
                <View style={{ width: 10, height: 10, backgroundColor: choose == item.id ? COLORS.primary : COLORS.white1, borderRadius: 20 }} />
              </View>
            }
            <Text>{item.name}</Text>
          </TouchableOpacity>)}
        </ScaleInView>) : null
      }
      <View style={{ paddingHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', height: 50 }}>
          <TouchableOpacity onPress={() => {
            setSelect(true)
          }} style={{ alignSelf: 'center' }}>
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
  lineUncolor: { width: '70%', height: 3, backgroundColor: COLORS.white1, marginTop: 10, alignSelf: 'center' },
  animated: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: '#fff',
    position: 'absolute', top: 100, right: 10,
    padding: 10,
    borderRadius: 10,
    zIndex: 10
  },
  modal: { paddingVertical: 15, backgroundColor: '#fff', marginTop: 3, width: '100%', zIndex: 2, flexDirection: 'row', alignItems: 'center' }
})