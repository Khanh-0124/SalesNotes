import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import TouchTabView from 'components/common/TouchTabView';
import { COLORS } from 'assets/global/colors';
import EmptyTab from '../../components/EmptyTab';
import { dataTabProfitAndLoss } from 'utilities/data';

const ProfitAndLoss = () => {
  return (
    <ScrollView>
      <TouchTabView dataTab={dataTabProfitAndLoss} />
      {/* <EmptyTab /> */}
    </ScrollView>
  );
};

export default ProfitAndLoss;

const styles = StyleSheet.create({
  headerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white1,
    padding: 10,
    marginTop: 10,
  },
});
