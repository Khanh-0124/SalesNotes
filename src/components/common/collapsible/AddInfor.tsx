import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useCallback } from 'react';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

const AddInfor = () => {
  const SLine = useCallback(() => {
    return (
      <View
        style={{ width: '100%', backgroundColor: COLORS.gray2, height: 15 }}
      />
    );
  }, []);
  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Quản lý tồn kho</Text>
        <View style={styles.Sswitch}>
          <Text style={{ fontSize: 15 }}>Theo dõi số lượng tồn kho</Text>
          <Switch />
        </View>
      </View>

      <SLine />
      <View style={styles.wrapper}>
        <InputWithTitle title={'Đơn vị'} placeholder={'Ví dụ: 1 hộp'} />
      </View>

      <SLine />
      <View style={styles.wrapper}>
        <Text style={{ fontSize: 15 }}>Phân loại</Text>
      </View>
    </View>
  );
};

export default AddInfor;

const styles = ScaledSheet.create({
  title: {
    fontSize: '15@s',
    fontWeight: '500',
  },
  Sswitch: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    paddingHorizontal: '15@s',
    paddingVertical: '10@s',
  },
});
