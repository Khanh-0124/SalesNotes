import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TouchTabView from 'components/common/TouchTabView';
import { dataTabStore } from 'utilities/data';
import { COLORS } from 'assets/global/colors';

const Store = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray7 }}>
      <View>
        <TouchTabView image={false} dataTab={dataTabStore} headerStyle={{ alignSelf: 'center', backgroundColor: COLORS.gray8, borderRadius: 10 }} />
      </View>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({});
