import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import React, { useCallback, useState } from 'react';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { listCategoryCreateOrder } from 'utilities/data';

const AddInfor = () => {
  const [dataCategory, setDataCategory] = useState(listCategoryCreateOrder);
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
        <Text style={{ fontSize: 15, marginBottom: 20 }}>Phân loại</Text>
        {dataCategory.map(item => (
          <TouchableOpacity
            key={item.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray4,
              padding: 10,
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <View style={{}}>
              <Text
                style={{ fontWeight: '500', fontSize: 15, marginBottom: 10 }}>
                {item.name}
              </Text>
              <Text>{item.code}</Text>
            </View>
            <Text>{`Còn hàng  >`}</Text>
          </TouchableOpacity>
        ))}
        <ButtonBase
          title="+ Thêm phân loại"
          onPress={() => console.log('a')}
          background
        />
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
