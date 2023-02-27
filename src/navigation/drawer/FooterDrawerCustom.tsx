import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

interface FooterType {
  onPress: () => void;
}
const FooterDrawerCustom = ({ onPress }: FooterType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Image
          style={styles.icFooter}
          source={require('assets/icons/png/ic_settings_drawer.png')}
        />
        <Text>Cài đặt cá nhân</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FooterDrawerCustom;

const styles = StyleSheet.create({
  icFooter: {
    height: 24,
    width: 24,
    marginRight: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
