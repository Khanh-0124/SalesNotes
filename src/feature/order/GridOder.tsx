import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { FlatGrid, SimpleGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from 'assets/global/colors';
import { addQuantity, updateProduct, updateRemaining } from '../../redux/productSlice';
import { BottomSheet } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import ButtonBase from 'components/base/buttons/ButtonBase';

const GridOder = () => {
  const navigation = useNavigation<any>();
  const producst = useSelector((state: any) => state.products.listProducts);
  const quantity = useSelector((state: any) => state.products.quantity);
  const dispatch = useDispatch();
  // const [items, setItems] = React.useState(producst);
  const handlePlus = (id: number, touch: number, price: number) => {
    if (producst[id].remaining == 0) {
      Alert.alert('', 'Đã đạt giới hạn sản phẩm này', [
        {
          text: 'Đã hiểu',
        }
      ])
    }
    else {
      dispatch(
        updateProduct({
          id: id,
          touch: touch + 1,
          plus: true
        }),
      );
      dispatch(
        addQuantity({
          add: quantity + 1,
          pay: price,
        }),
      );
    }
  };
  const handleMinus = (id: number, touch: number, price: number) => {
    // console.log(producst[id].touch > producst[id].remaining)
    dispatch(
      updateProduct({
        id: id,
        touch: touch - 1,
        plus: false
      }),
    );
    dispatch(
      addQuantity({
        add: quantity - 1,
        pay: -price,
      }),
    );
  };
  const [addRemain, setAddRemain] = useState(false)
  const [paramsCustom, setParamsCustom] = useState<any>({
    name: '',
    price: 0,
    uri: '',
    input: 0,
    id: 0
  });
  const onTextChange = useCallback((keyName: string, value: any) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);
  const AddReamain = (id: number, name: string, price: any, uri: any) => {
    setAddRemain(!addRemain)
    onTextChange("name", name)
    onTextChange("price", price)
    onTextChange("uri", uri)
    onTextChange("id", id)
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateProduct")} style={styles.addProducts}>
        <Text> {`+ Thêm s.phẩm`}</Text>
      </TouchableOpacity>
      <FlatGrid
        itemDimension={100}
        data={producst}
        style={styles.gridView}
        spacing={15}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
              {
                item.remaining != 0 ? handlePlus(item.id, item.touch, parseInt(item.price)) : AddReamain(item.id, item.name, item.price, item.image[0].uri)
              }
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
                    }}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              {
                item.remaining == 0 ?
                  <View style={{
                    position: 'absolute', top: 10, zIndex: 1, backgroundColor: '#fff', paddingVertical: 5
                    , paddingHorizontal: 5, borderRadius: 5
                  }}>
                    <Text>Tạm hết hàng</Text>
                  </View> : null
              }
              <Image
                source={{ uri: item.image[0]?.uri }}
                style={styles.Simage}
                resizeMode="cover"
              />
              <Text style={[styles.itemCode, { marginVertical: 3 }]}>
                {item.price && item.remaining != 0 ? `Còn ${item.remaining} ${item.dv}` : `Còn ${item.remaining} ${item.dv}`}
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
                {item.price ? `${item.price}` : ``}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View>
        <BottomSheet backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onBackdropPress={() => setAddRemain(!addRemain)} modalProps={{ animationType: 'fade' }} isVisible={addRemain}>
          <View style={{ padding: 15, backgroundColor: '#fff', height: 350 }}>
            <Text style={{ alignSelf: 'center', fontWeight: '600', marginBottom: 15, fontSize: 18 }}>Cập nhật tồn kho</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                <Image source={{ uri: paramsCustom.uri }}
                  style={{ height: 50, width: 50, borderRadius: 10, marginRight: 15 }}
                  resizeMode="cover" />
                <Text>{paramsCustom.name}</Text>
              </View>
              <Text>{paramsCustom.price} VND</Text>
            </View>
            <InputWithTitle title='Cập nhật tồn kho hiện tại' value={paramsCustom.input} onTextChange={onTextChange} placeholder={'0'} keyName={'input'} type={'number-pad'} />
            <View style={{ width: '50%', alignSelf: 'center', marginTop: 40 }}>
              <ButtonBase title='Cập nhật' onPress={() => {
                setAddRemain(false)
                dispatch(updateRemaining({
                  id: paramsCustom.id,
                  newremain: paramsCustom.input
                }))
              }} background />
            </View>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

export default GridOder;

const styles = StyleSheet.create({
  gridView: {
    flex: 1
  },
  itemContainer: {
    // justifyContent: 'center',
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
