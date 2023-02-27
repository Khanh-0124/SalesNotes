import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Svg from 'assets/icons/svg/index';
import { normalize, WIDTH } from 'assets/global/layout';
import { COLORS } from 'assets/global/colors';
import { ScaledSheet } from 'react-native-size-matters';
import HeaderSearchWithScanner from 'components/common/HeaderSearchWithScanner';
import WrapperContent from './components/WrapperContent';
import SearchBarWithLeftIcon from 'components/common/searchs/SearchBarWithLeftIcon';
import { useNavigation } from '@react-navigation/native';

const sizeIcon = normalize(16);

const WarehouseScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SearchBarWithLeftIcon
        placeholder={'Tìm tên, mã SKU, ...'}
        backgroundColor={COLORS.primary}
        source={require('assets/icons/png/ic_scanner.png')}
      />
      <ScrollView>
        {/* header */}
        <View style={{ backgroundColor: '#fff', padding: 15 }}>
          <View style={styles.wapperTitle}>
            <Text>{`3 mã sản phẩm`}</Text>
            <TouchableOpacity
              style={styles.reportStyle}
              activeOpacity={0.4}
              onPress={() => navigation.navigate('WareHouse')}>
              <Svg.TrendHome width={sizeIcon} height={sizeIcon} />
              <Text style={styles.textLeft}>{`Báo cáo`}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SContent}>
            <WrapperContent
              title="Giá trị tồn"
              uri={require('assets/icons/png/ic_dollar.png')}
              number={48000}
              unit
            />
            <WrapperContent
              title="Số lượng"
              uri={require('assets/icons/png/ic_boxes.png')}
              number={9}
              unit={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WarehouseScreen;

const styles = ScaledSheet.create({
  reportStyle: {
    flexDirection: 'row',
  },
  textLeft: {
    fontSize: '14@s',
    color: COLORS.blue2,
    marginLeft: '5@s',
  },
  container: {
    flex: 1,
  },
  wapperTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
