import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from 'assets/global/colors'
import { CheckBox, Icon } from '@rneui/themed';
import { addCategory } from '../../../redux/productSlice'
import ButtonBase from 'components/base/buttons/ButtonBase'
import { addCatePr } from '../../../redux/categorySlice'
const AddProducts = () => {
  const products = useSelector((state: any) => state.products.listProducts);
  const navigation = useNavigation<any>();
  const [checked, setChecked] = React.useState(false);
  const name = useRoute<any>().params.name;
  const id = useRoute<any>().params.id;
  const dispatch = useDispatch();
  const submit = async () => {
    await products.filter((item: any) => item.addCate === true ? (dispatch(
      addCatePr({
        id: id,
        items: item
      })
    )) : null)
    return navigation.navigate("ManagerProducts")
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white1 }}>
      <HeaderBase title='Thêm sản phẩm vào danh mục' isIconLeft={false} />
      <Text style={{ alignSelf: 'center' }}>Chọn sản phẩm thêm vào "{name}"</Text>
      {
        products.map((item: any, index: any) => {
          return <View key={index} style={styles.SContainer}>
            <CheckBox
              style={{ backgroundColor: 'red' }}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor={COLORS.primary}
              checked={item.addCate}
              onPress={() => dispatch(addCategory({
                id: item.id
              }))}
            />
            <Image source={{ uri: item.image[0]?.uri }} style={{ height: 54, width: 54, borderRadius: 10 }} />
            <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
              <Text>{item.name}</Text>
              <Text style={{ color: COLORS.red2, fontWeight: '600' }}>{item.price} đ</Text>
            </View>
          </View>
        })
      }
      <View style={{ position: 'absolute', bottom: 10, alignSelf: 'center', width: '70%' }}>
        <ButtonBase title='Xác nhận' background onPress={submit} />
      </View>
    </View>
  )
}

export default AddProducts

const styles = StyleSheet.create({
  SContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: COLORS.white1,
    marginVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
})