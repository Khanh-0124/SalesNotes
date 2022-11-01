import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../../assets/global/colors';
import {HEIGHT, WIDTH} from '../../../assets/global/layout';
import {normalize} from '../../../assets/global/layout';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHeader}>
        <Image
          source={require('../../../assets/photos/store.png')}
          style={styles.image}
        />
        <View style={{flexDirection: 'column', marginLeft: WIDTH * 0.02}}>
          <Text style={styles.textName}>Khanh</Text>
          <Text style={styles.text}>Thông tin cửa hàng</Text>
        </View>
      </View>
      <View style={styles.rightHeader}>
        <Text>a</Text>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT * 0.08,
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
    fontSize: normalize(15),
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: normalize(13),
    color: '#fff',
  },
  leftHeader: {
    flexDirection: 'row',
    flex: 5,
    // backgroundColor: 'pink',
    // justifyContent: 'space-around',
  },
  image: {
    width: WIDTH * 0.1,
    height: WIDTH * 0.1,
    borderRadius: 50,
  },
});
