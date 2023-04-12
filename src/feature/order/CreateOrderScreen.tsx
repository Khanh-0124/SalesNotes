import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
import { GridOder } from './index';
import { addQuantity, updateProduct } from '../../redux/productSlice';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addData } from '../../servers/firebase/crud';

const CreateOrderScreen = () => {
  const quantity = useSelector((state: any) => state.products.quantity);
  const products = useSelector((state: any) => state.products.listProducts);
  const pay = useSelector((state: any) => state.products.pay);
  const navigation = useNavigation<any>();
  const handleSubmit = () => {
    navigation.navigate('TrackingOrder');
  };
  useEffect(() => {
      addData('ClientStack', "Products", { ListProducts: products })
  }, [products])
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <HeaderWithMultiIcon
        clean={quantity > 0 ? true : false}
        ask={quantity > 0 ? true : false}
        title={'Bán hàng'}
        leftIcon={require('assets/icons/png/ic_left_arrow.png')}
        firtRightIcon={require('assets/icons/png/ic_search.png')}
        secondRightIcon={require('assets/icons/png/ic_scanner.png')}
        thirdRightIcon={require('assets/icons/png/ic_thunderbolt.png')}
        lastIcon={require('assets/icons/png/ic_more.png')}
      />
      <GridOder />
      {quantity !== 0 ? (
        <TouchableOpacity style={styles.SButton} onPress={() => handleSubmit()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Image
                source={require('assets/icons/png/ic_bag.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: 'white',
                  marginRight: 15,
                }}
              />
              <View
                style={{
                  padding: 4,
                  backgroundColor: 'red',
                  borderRadius: 50,
                  position: 'absolute',
                  top: -13,
                  right: 8,
                }}>
                <Text style={[styles.text, { fontSize: 11 }]}>{quantity}</Text>
              </View>
            </View>
            <Text style={styles.text}>{pay}</Text>
          </View>
          <Text style={styles.text}>Tiếp tục</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CreateOrderScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  textClassify: {
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    color: COLORS.primary,
  },
  SButton: {
    width: '90%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
