import {
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

const GridOder = () => {
  const navigation = useNavigation<NavigateType>();
  const [items, setItems] = React.useState([
    {
      id: 0,
      amount: 3,
      name: 'abc',
      price: 3000,
      color: '#1abc9c',
    },
    {
      id: 1,
      name: 'Thêm sản phẩm',
      icon: require('../../assets/icons/png/ic_add_image.png'),
      color: '#9b59b6',
    },
    // { name: 'TURQUOISE', code: '#1abc9c' },
    // { name: 'EMERALD', code: '#2ecc71' },
    // { name: 'PETER RIVER', code: '#3498db' },
    // { name: 'AMETHYST', code: '#9b59b6' },
    // { name: 'WET ASPHALT', code: '#34495e' },
    // { name: 'GREEN SEA', code: '#16a085' },
  ]);
  return (
    <FlatGrid
      itemDimension={100}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (item.id === items.length - 1) {
                navigation.navigate('CreateProduct');
              }
            }}
            activeOpacity={0.5}
            style={[styles.itemContainer, { backgroundColor: item.color }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.amount}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default GridOder;

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
