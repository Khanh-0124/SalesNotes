import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { NavigateType } from 'utilities/type/type';
import { useNavigation } from '@react-navigation/native';
import { listProducts } from 'utilities/data';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from 'assets/global/colors';

const GridOder = () => {
  const navigation = useNavigation<NavigateType>();
  const producst = useSelector((state: any) => state.products.listProducts);
  // const [items, setItems] = React.useState(producst);
  return (
    <FlatGrid
      itemDimension={100}
      data={producst}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={15}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (item.id === 0) {
                navigation.navigate('CreateProduct');
              }
            }}
            activeOpacity={0.5}
            style={[styles.itemContainer]}>
            <Image
              source={item.image}
              style={styles.Simage}
              resizeMode="cover"
            />
            <Text style={[styles.itemCode, { marginVertical: 3 }]}>
              {item.price ? `${item.remaining}` : ``}
            </Text>
            <Text
              style={
                item.id === producst.length - 1
                  ? styles.addProduct
                  : styles.itemName
              }>
              {item.name}
            </Text>
            <Text style={styles.itemCode}>
              {item.price ? `${item.price}\n` : ``}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};;;

export default GridOder;

const styles = StyleSheet.create({
  gridView: {},
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.82,
    elevation: 3,
  },
  Simage: {
    height: '40%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  addProduct: {
    fontSize: 16,
    color: COLORS.blue2,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 2,
  },
  itemName: {
    fontSize: 16,
    color: COLORS.black1,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 5,
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: COLORS.black1,
  },
});
