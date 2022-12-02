import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon';

const CreateOrderScreen = () => {
  return (
    <View>
      <HeaderWithMultiIcon
        title={'Bán hàng'}
        leftIcon={require('assets/icons/png/ic_left_arrow.png')}
        firtRightIcon={require('assets/icons/png/ic_search.png')}
        secondRightIcon={require('assets/icons/png/ic_scanner.png')}
        thirdRightIcon={require('assets/icons/png/ic_thunderbolt.png')}
        lastIcon={require('assets/icons/png/ic_more.png')}
      />
    </View>
  );
};

export default CreateOrderScreen;

const styles = StyleSheet.create({});
