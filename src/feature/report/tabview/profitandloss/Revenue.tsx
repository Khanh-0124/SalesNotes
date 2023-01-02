import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { listRevenue } from 'utilities/data';
import { COLORS } from 'assets/global/colors';
import ContentsCollapsibale from 'feature/report/components/ContentsCollapsibale';

const Revenue = () => {
  return (
    <ContentsCollapsibale
      addItem="Thêm doanh thu khác"
      dataList={listRevenue}
    />
  );
};

export default Revenue;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  Stext: {
    color: COLORS.black2,
    marginVertical: 10,
  },
});
