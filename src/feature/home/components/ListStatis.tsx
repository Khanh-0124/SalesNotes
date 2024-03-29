import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useCallback } from 'react';
import { COLORS } from 'assets/global/colors';
import { normalize, WIDTH } from 'assets/global/layout';
import * as Svg from 'assets/icons/svg/index';
const sizeIcon = normalize(20);
import ItemSlide from './ItemSlide';
import { useNavigation } from '@react-navigation/native';

const ListStatis = () => {
  const navigation = useNavigation<any>();
  const listItemsSlide = [
    {
      id: 1,
      title: 'Doanh thu',
      number: 0,
      image: require('assets/icons/png/ic_statistics.png'),
      color: COLORS.orange1,
      bgColor: COLORS.orange2
    },
    { id: 2, title: 'Đơn hàng', number: 0, image: require('assets/icons/png/ic_clipboard.png'), color: COLORS.blue1, bgColor: COLORS.blue4 },
    {
      id: 3,
      title: 'Lợi nhuận',
      number: 0,
      image: require('assets/icons/png/ic_money.png'),
      color: COLORS.green1,
      bgColor: COLORS.green3
    },
  ];
  const submit = useCallback((id: number) => {
    id == 2 ? navigation.navigate("OrderTracking") : null
  }, [])
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: WIDTH * 0.03,
        }}>
        <Text style={styles.text}>Hôm nay</Text>
        <TouchableOpacity
          style={styles.reportStyle}
          activeOpacity={0.4}
          onPress={() => navigation.navigate('ReportScreen')}>
          <Svg.TrendHome width={sizeIcon} height={sizeIcon} />
          <Text style={styles.textLeft}>{'Xem lãi lỗ'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listItemsSlide.map((item, index) => (
          <ItemSlide
            onPress={() => submit(item.id)}
            key={index}
            title={item.title}
            number={item.number}
            image={item.image}
            color={item.color}
            bgColor={item.bgColor}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ListStatis;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textLeft: {
    fontSize: normalize(16),
    color: COLORS.blue2,
    marginLeft: normalize(5),
  },
  text: {
    fontSize: normalize(16),
  },
  reportStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
