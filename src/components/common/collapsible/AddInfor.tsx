import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import React, { useCallback, useState } from 'react';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { listCategoryCreateOrder } from 'utilities/data';
import { TextInput } from 'react-native-paper';

const AddInfor = ({ dataChill }: any) => {
  const [dataCategory, setDataCategory] = useState(listCategoryCreateOrder);
  const SLine = useCallback(() => {
    return (
      <View
        style={{ width: '100%', backgroundColor: COLORS.gray2, height: 15 }}
      />
    );
  }, []);
  const [paramsCustom, setParamsCustom] = useState<any>({
    dv: '',
    remain: 0,
  });
  const onTextChange = useCallback((keyName: string, value: string) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);
  // const toggleSwitch = () => {
  //   setChecked(!checked);
  // };
  dataChill(paramsCustom.remain, paramsCustom.dv);
  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Quản lý tồn kho</Text>
        <View style={styles.Sswitch}>
          <Text style={{ fontSize: 15, marginVertical: 5 }}>Theo dõi số lượng tồn kho</Text>
        </View>
        <View style={styles.wrapper}>
          <InputWithTitle
            title="Tồn kho"
            placeholder="0"
            value={paramsCustom.remain}
            keyName={'remain'}
            onTextChange={onTextChange}
          />
        </View>
      </View>
      <SLine />
      <View style={styles.wrapper}>
        <InputWithTitle
          title="Tên sản phẩm"
          placeholder="Ví dụ: Cai"
          value={paramsCustom.dv}
          keyName={'dv'}
          onTextChange={onTextChange}
        />
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
