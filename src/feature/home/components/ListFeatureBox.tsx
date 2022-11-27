import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { dataBox } from 'assets/global/data';
import { HEIGHT, WIDTH } from 'assets/global/layout';
import { COLORS } from 'assets/global/colors';
import { ScaledSheet } from 'react-native-size-matters';

const ListFeatureBox = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginTop: 15,
      }}>
      {dataBox.map(item => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={item.id}
          style={[styles.viewBox]}>
          <Image
            source={item.icon}
            style={{ width: 32, height: 32, alignSelf: 'center' }}
          />
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListFeatureBox;

const styles = ScaledSheet.create({
  viewBox: {
    width: '23%',
    height: 100,
    backgroundColor: COLORS.white1,
    padding: 10,
    marginHorizontal: '1%',
    marginBottom: '2%',
    borderRadius: '8@s',
  },
  title: {
    fontSize: '13@s',
    textAlign: 'center',
  },
});
