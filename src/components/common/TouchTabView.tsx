import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from 'assets/global/colors';

const dataTab = [
  {
    id: 1,
    name: 'Hôm nay',
    isChoose: false,
  },
  {
    id: 2,
    name: 'Tháng này',
    isChoose: true,
  },
  {
    id: 3,
    name: 'Tháng trước',
    isChoose: false,
  },
];
const TouchTabView = () => {
  const [data, setData] = useState(dataTab);
  return (
    <View style={styles.wrapper}>
      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.wrapperItem,
            { backgroundColor: item.isChoose ? COLORS.white1 : null },
          ]}
          onPress={() => {
            let newDataTab = data.map(eachDataTab => {
              return {
                ...eachDataTab,
                isChoose: eachDataTab.id === item.id,
              };
            });
            setData(newDataTab);
          }}>
          <Text
            style={[
              styles.text,
              { color: item.isChoose ? COLORS.primary : COLORS.black1 },
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TouchTabView;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 4,
    backgroundColor: COLORS.gray5,
    borderRadius: 10,
  },
  wrapperItem: {
    padding: 10,
    borderRadius: 7,
  },
  text: {
    fontSize: 12,
    marginHorizontal: 5,
  },
});
