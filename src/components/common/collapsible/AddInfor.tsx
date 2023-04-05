import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import React, { useCallback, useState } from 'react';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { listCategoryCreateOrder } from 'utilities/data';
import { TextInput } from 'react-native-paper';

const AddInfor = ({ dataChill }) => {
  const [dataCategory, setDataCategory] = useState(listCategoryCreateOrder);
  const SLine = useCallback(() => {
    return (
      <View
        style={{ width: '100%', backgroundColor: COLORS.gray2, height: 15 }}
      />
    );
  }, []);
  const [remain, setRemain] = useState(0);
  const [dv, setDv] = useState('');

  // const toggleSwitch = () => {
  //   setChecked(!checked);
  // };
  dataChill(remain, dv);
  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Quản lý tồn kho</Text>
        <View style={styles.Sswitch}>
          <Text style={{ fontSize: 15, marginVertical: 5 }}>Theo dõi số lượng tồn kho</Text>
        </View>
        <View style={{}}>
          <Text style={{ fontWeight: '600', fontSize: 16, marginVertical: 10 }}>Tồn kho</Text>
          <TextInput placeholder='0' style={{ height: 40, marginTop: 10, borderRadius: 10, }} value={remain} onChangeText={(t) => setRemain(t)} keyboardType='number-pad' />
        </View>
      </View>
      <SLine />
      <View style={styles.wrapper}>
        <InputWithTitle title={'Đơn vị'} placeholder={'Ví dụ: 1 hộp'} value={dv} onTextChange={(t) => setDv(t)} />
      </View>
      <SLine />
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
