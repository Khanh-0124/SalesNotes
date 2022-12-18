import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from './constant';

const HeaderDrawerCustom = () => {
  return (
    <TouchableOpacity>
      <View style={styles.SHeader}>
        <Image
          source={require('../../assets/icons/png/ic_user.png')}
          style={styles.person}
        />
        <View style={styles.SName}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{`Khánh`}</Text>
          <Text style={{ fontSize: 14 }}>{`Vũ Văn Khánh`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderDrawerCustom;

const styles = StyleSheet.create({
  person: {
    height: 24,
    width: 24,
    tintColor: colors.darkGray,
  },
  SHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  SName: {
    marginLeft: 10,
  },
});
