import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import AnimationNumberComponent from '../../../../libs/AnimationNumberComponent';
import { COLORS } from 'assets/global/colors';

const SecondTab = () => {
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <View style={styles.STitleHeader}>
          <Image
            source={require('assets/icons/png/ic_coin.png')}
            style={styles.Scoin}
          />
          <Text>Lợi nhuận</Text>
        </View>
        <AnimationNumberComponent
          number={32000}
          unit={true}
          customTextStyle={{
            color: COLORS.primary,
            fontSize: 28,
            fontWeight: '600',
          }}
        />
      </View>
    </View>
  );
};

export default SecondTab;

const styles = StyleSheet.create({
  wrapperHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white1,
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
  },
  Scoin: {
    height: 18,
    width: 18,
    marginRight: 5,
  },

  STitleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
});
