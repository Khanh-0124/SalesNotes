import { TouchableOpacity, Text, View, Image } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';

const GeneralNoti = () => {
  return (
    <View style={styles.container}>
      <View style={styles.STopHeader}>
        <Text style={styles.title}>Trước đó</Text>
        <TouchableOpacity>
          <Text>Đọc tất cả </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.componentNoti}>
        <Image
          source={require('../../assets/icons/png/ic_bell.png')}
          style={styles.image}
        />
        <View style={{ width: '80%' }}>
          <Text style={styles.title}>Xác nhận giao hàng</Text>
          <Text>
            Bạn đã giao đơn ZDXJS cho khách - 10.000đ chưa? Nhấn đề kiểm tra
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/png/ic_more.png')}
            style={styles.icMore}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default GeneralNoti;

const styles = ScaledSheet.create({
  container: {
    padding: '15@s',
    backgroundColor: COLORS.white1,
    // flex: 1,
    width: '100%',
  },
  STopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '14@s',
    fontWeight: 'bold',
    marginBottom: '5@s',
  },
  componentNoti: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 24,
    width: 24,
    marginRight: '15@s',
    tintColor: COLORS.primary,
  },
  icMore: {
    height: '24@s',
    width: '24@s',
    marginLeft: '10@s',
  },
});
