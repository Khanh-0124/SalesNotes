import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
import { GridOder } from './index';
import { addQuantity, updateProduct } from '../../redux/productSlice';
import { useSelector } from 'react-redux';

const CreateOrderScreen = () => {
  const quantity = useSelector((state: any) => state.products.quantity);
  const pay = useSelector((state: any) => state.products.pay);
  return (
    <View style={styles.container}>
      <HeaderWithMultiIcon
        title={'Bán hàng'}
        leftIcon={require('assets/icons/png/ic_left_arrow.png')}
        firtRightIcon={require('assets/icons/png/ic_search.png')}
        secondRightIcon={require('assets/icons/png/ic_scanner.png')}
        thirdRightIcon={require('assets/icons/png/ic_thunderbolt.png')}
        lastIcon={require('assets/icons/png/ic_more.png')}
      />
      <GridOder />
      {quantity !== 0 ? (
        <TouchableOpacity style={styles.SButton}>
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
