import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { HEIGHT, WIDTH } from 'assets/global/layout';
import { normalize } from 'assets/global/layout';
import IconHeader from './components/IconHeader';
import { ScaledSheet } from 'react-native-size-matters';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHeader}>
        <Image
          source={require('assets/photos/store.png')}
          style={styles.image}
        />
        <View style={{ flexDirection: 'column', marginLeft: WIDTH * 0.02 }}>
          <Text style={styles.textName}>Khánh</Text>
          <Text style={styles.text}>Thông tin cửa hàng</Text>
        </View>
        <View style={{ flex: 2 }} />
        <IconHeader />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = ScaledSheet.create({
  container: {
    height: HEIGHT < 500 ? HEIGHT * 0.3 : HEIGHT * 0.09,
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  rightHeader: {
    flex: 4,
  },
  textName: {
    fontSize: '15@s',
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '13@s',
    color: '#fff',
  },
  leftHeader: {
    flexDirection: 'row',
    flex: 5,
  },
  image: {
    width: WIDTH * 0.1,
    height: WIDTH * 0.1,
    borderRadius: 50,
  },
});
