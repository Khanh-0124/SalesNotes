import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

const RemindNotfi = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/png/ic_notification_empty.png')}
        style={styles.bellEmpty}
      />
      <Text style={styles.labelNoti}>
        Bạn chưa có thông báo nào? Đừng quên bật "Nhận thông báo" và quay lại
        sao nhé!
      </Text>
    </View>
  );
};

export default RemindNotfi;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: '15@s',
    marginTop: '70@s',
  },
  labelNoti: {
    fontSize: '14@s',
    textAlign: 'center',
    marginTop: '25@s',
    color: COLORS.gray3,
  },
  bellEmpty: {
    width: '80@s',
    height: '80@s',
    tintColor: COLORS.gray3,
  },
});
