import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

const CreateOrderScreen = () => {
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
      <Text>Tất cả</Text>
    </View>
  );
};

export default CreateOrderScreen;

const styles = ScaledSheet.create({
  container: {
    // flex: 1,
  },
  textClassify: {
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
    color: COLORS.primary,
  },
});
