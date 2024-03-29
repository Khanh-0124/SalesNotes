import { TouchableOpacity, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { HEIGHT, WIDTH } from 'assets/global/layout';
import { normalize } from 'assets/global/layout';
import IconHeader from './components/IconHeader';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

interface DrawerNaviType {
  openDrawer: () => void;
}

const HeaderHome = () => {
  const navigation = useNavigation<DrawerNaviType>();
  return (
    <View style={styles.container}>
      <View style={styles.leftHeader}>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ flexDirection: 'row' }}>
          <Image
            source={require('assets/photos/store.png')}
            style={styles.image}
          />
          <View style={{ flexDirection: 'column', marginLeft: WIDTH * 0.02 }}>
            <Text style={styles.textName}>Khánh</Text>
            <TouchableOpacity>
              <Text style={styles.text}>Thông tin cửa hàng</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
        <View style={{ flex: 2 }} />
        <IconHeader />
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = ScaledSheet.create({
  container: {
    height: HEIGHT < 500 ? HEIGHT * 0.3 : HEIGHT * 0.12,
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingTop: 50
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
