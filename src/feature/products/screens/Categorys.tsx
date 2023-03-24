import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import { useNavigation } from '@react-navigation/native';
import { ColorSpace } from 'react-native-reanimated';
type NavigationType = {
  navigate(value: any, params: any): void
}
const Categorys = () => {
  const navigation = useNavigation<NavigationType>();
  const categorys = useSelector((state: any) => state.categorys.listCategory);
  const f_filter = (id: any) => categorys[id].products.filter((value: any, index: any, self: any) => {
    return self.indexOf(value) === index;
  });
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <ScrollView>
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
            <Text>Số lượng: {f_filter(item.id)?.length || 0}</Text>
          </View>
        </TouchableOpacity>
      })}
      </ScrollView>

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