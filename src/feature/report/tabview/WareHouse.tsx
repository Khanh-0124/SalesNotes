import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TouchTabView from 'components/common/TouchTabView';
import { dataTabKhohang } from 'utilities/data';
import { COLORS } from 'assets/global/colors';

const WareHouse = () => {
  return (
    <View style={{ flex: 1 }}>
      <TouchTabView image={false} dataTab={dataTabKhohang} headerStyle={{ alignSelf: 'center', backgroundColor: COLORS.gray8, borderRadius: 10 }} />
    </View>
  );
};

export default WareHouse;

const styles = StyleSheet.create({});
