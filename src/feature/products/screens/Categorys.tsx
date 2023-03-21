import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import { useNavigation } from '@react-navigation/native';
type NavigationType = {
  navigate(value: any, params: any): void
}
const Categorys = () => {
  const navigation = useNavigation<NavigationType>();
  const categorys = useSelector((state: any) => state.categorys.listCategory);
  return (
    <View style={{ paddingHorizontal: 15 }}>
      {categorys.map((item: any, index: any) => {
        return <TouchableOpacity onPress={() => navigation.navigate("CategoryDetail", { id: item.id, name: item.name })} style={styles.SContainer} key={index}>
          <Image
            source={
              item.image === null
                ? require('assets/icons/png/ic_picnic.png')
                : item.image
            }
            style={styles.SImage}
          />
          <View style={styles.SViewText}>

            <Text style={{ fontWeight: '600' }}>{item.name}</Text>
            <Text>Số lượng: {item.products?.length || 0}</Text>
          </View>
        </TouchableOpacity>
      })}
    </View>
  )
}

export default Categorys

const styles = StyleSheet.create({
  SContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLORS.gray1,
    borderBottomWidth: 1,
    paddingBottom: 10,

  },
  SImage: {
    height: 24, width: 24
  },
  SViewText: {
    marginLeft: 10
  }
})