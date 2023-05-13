import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from 'assets/global/colors';
import { formatVND } from 'assets/global/formatMoney';

interface ContentsCollapsibaleInterface {
  dataList: any;
  addItem?: string;
}
const ContentsCollapsibale = ({
  dataList,
  addItem,
}: ContentsCollapsibaleInterface) => {
  const [data, setData] = useState(dataList);
  return (
    <View style={styles.container}>
      {data.map((item: any) => (
        <View
          key={item.id}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.Stext}>{item.name}</Text>
          <Text style={[styles.Stext, { marginRight: 22 }]}>{formatVND(item.sum)}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContentsCollapsibale;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  Stext: {
    color: COLORS.black2,
    marginVertical: 10,
  },
});
