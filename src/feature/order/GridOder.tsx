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
import { addQuantity, updateProduct } from '../../redux/productSlice';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const GridOder = () => {
  const navigation = useNavigation<NavigateType>();
  const producst = useSelector((state: any) => state.products.listProducts);
  const quantity = useSelector((state: any) => state.products.quantity);
  const dispatch = useDispatch();
  // const [items, setItems] = React.useState(producst);
  const handlePlus = (id: number, touch: number, price: number) => {
    dispatch(
      updateProduct({
        id: id,
        touch: touch + 1,
      }),
    );
    dispatch(
      addQuantity({
        add: quantity + 1,
        pay: price,
      }),
    );
  };
  const handleMinus = (id: number, touch: number, price: number) => {
    dispatch(
      updateProduct({
        id: id,
        touch: touch - 1,
      }),
    );
    dispatch(
      addQuantity({
        add: quantity - 1,
        pay: -price,
      }),
    );
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: COLORS.white1 }}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateProduct")} style={styles.addProducts}>
        <Text> {`+ Thêm s.phẩm`}</Text>
      </TouchableOpacity>
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
              onPress={() =>
                handlePlus(item.id, item.touch, parseInt(item.price))
              }
              activeOpacity={0.5}
              style={[styles.itemContainer]}>
              {item.touch !== 0 ? (
                <View style={styles.ButtonAdd}>
                  <TouchableOpacity
                    style={{ padding: 5 }}
                    onPress={() =>
                      handleMinus(item.id, item.touch, parseInt(item.price))
                    }>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{}}>
                    <Text style={{}}>{item.touch}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ padding: 5 }}
                    onPress={() => {
                      handlePlus(item.id, item.touch, parseInt(item.price));
                      // console.log('a: ', typeof parseInt(item.price));
                    }}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
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

    </View>
  );
};

export default GridOder;

const styles = StyleSheet.create({
  gridView: {
  },
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
  ButtonAdd: {
    padding: 1,
    borderRadius: 5,
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    top: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  addProducts: {
    height: 40, width: 120, backgroundColor: COLORS.white1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingHorizontal: 5,
    marginLeft: 15, marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.82,
    elevation: 3,
    marginTop: 10
  }
});
