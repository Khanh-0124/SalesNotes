import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import TouchTabView from 'components/common/TouchTabView';
import { COLORS } from 'assets/global/colors';

const ProfitAndLoss = () => {
  return (
    <View>
      <View style={styles.headerTab}>
        <View style={styles.wrapperCalender}>
          <Image
            source={require('assets/icons/png/ic_calendar.png')}
            style={styles.iconHeader}
          />
        </View>
        <TouchTabView />
      </View>
    </View>
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
  iconHeader: {
    height: 24,
    width: 24,
  },
  wrapperCalender: {
    padding: 8,
    backgroundColor: COLORS.gray4,
    marginRight: 10,
    borderRadius: 8,
  },
});
