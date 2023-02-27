import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { listCost } from 'utilities/data';
import ContentsCollapsibale from 'feature/report/components/ContentsCollapsibale';

const Cost = () => {
  const [dataCost, setDataCost] = useState(listCost);
  return (
    <View style={styles.container}>
      {dataCost.map(item => (
        <ContentsCollapsibale dataList={listCost} addItem="Thêm chi phí khác" />
      ))}
    </View>
  );
};

export default Cost;

const styles = StyleSheet.create({});
