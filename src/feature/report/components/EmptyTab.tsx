import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { COLORS } from 'assets/global/colors';

const EmptyTab = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/icons/png/ic_empty_folder.png')}
        style={styles.imageEmpty}
      />
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 15,
        }}>{`Bạn chưa có dữ liệu bán hàng nào được ghi lại. \nGhi lại đơn hàng mới ngay tại đây nhé!`}</Text>
      <ButtonBase title="Tạo đơn hàng" background onPress={() => {}} />
    </View>
  );
};

export default EmptyTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEmpty: {
    marginTop: 40,
    tintColor: COLORS.gray6,
  },
});
