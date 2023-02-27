import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from 'assets/global/colors';

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
      {data.map(item => (
        <View
          key={item.id}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.Stext}>{item.name}</Text>
          <Text style={[styles.Stext, { marginRight: 22 }]}>{item.sum}</Text>
        </View>
      ))}
      <TouchableOpacity>
        <Text
          style={{
            color: 'blue',
            textAlign: 'center',
            marginVertical: 10,
            fontSize: 15,
          }}>
          + {addItem}
        </Text>
      </TouchableOpacity>
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
