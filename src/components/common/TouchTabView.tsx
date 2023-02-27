import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from 'assets/global/colors';

interface TouchTabInterface {
  dataTab: any;
}

const TouchTabView = ({ dataTab }: TouchTabInterface) => {
  const [data, setData] = useState(dataTab);
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={styles.wrapperCalender}>
          <Image
            source={require('../../assets/icons/png/ic_calendar.png')}
            style={{ height: 24, width: 24 }}
          />
        </View>
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
      </View>
      {data.map(item =>
        item.isChoose ? (
          <View key={item.id}>
            <item.tabContent />
          </View>
        ) : null,
      )}
    </View>
  );
};

export default TouchTabView;

const styles = StyleSheet.create({
  container: {},
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
  wrapperCalender: {
    padding: 8,
    backgroundColor: COLORS.gray4,
    marginRight: 10,
    borderRadius: 8,
  },
  wrapperHeader: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: COLORS.white1,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
