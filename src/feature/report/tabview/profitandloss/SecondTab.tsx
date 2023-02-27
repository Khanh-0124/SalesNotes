import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AnimationNumberComponent from '../../../../libs/AnimationNumberComponent';
import { COLORS } from 'assets/global/colors';
import ButtonBase from 'components/base/buttons/ButtonBase';
import CollapsibleComponents from 'components/common/collapsible/CollapsibleComponents';
import Revenue from './Revenue';
import Cost from './Cost';

const SecondTab = () => {
  return (
    <View style={{ flex: 1 }}>
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
      <TouchableOpacity style={styles.wrapperButton}>
        <ButtonBase title="Lợi nhuận theo sản phẩm >" onPress={() => {}} />
      </TouchableOpacity>
      <View style={{ backgroundColor: COLORS.white1, padding: 10 }}>
        <Text style={styles.STitleItems}>Chi tiết báo cáo</Text>
        <CollapsibleComponents
          title={'Doanh thu'}
          leftComponents
          number={'40.000'}
          customStyles={{
            backgroundColor: COLORS.gray5,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
          Contents={() => <Revenue />}
        />
        <View style={styles.wrapperItem}>
          <Text>Giá vốn bán hàng</Text>
          <Text style={{ color: COLORS.red1, marginRight: 20 }}>8.000</Text>
        </View>
        <CollapsibleComponents
          title={'Chi phí'}
          leftComponents
          number={'0'}
          customStyles={{
            backgroundColor: COLORS.gray5,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
          Contents={() => <Cost />}
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
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginVertical: 10,
  },
  Scoin: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  wrapperButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: COLORS.white1,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  STitleItems: {
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    fontWeight: '600',
  },
  STitleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  wrapperItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.gray5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
