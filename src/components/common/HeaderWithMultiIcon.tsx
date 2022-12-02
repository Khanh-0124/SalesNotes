import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'assets/global/colors';

interface HeaderMultiIcons {
  title: string;
  leftIcon: any;
  firtRightIcon: any;
  secondRightIcon: any;
  thirdRightIcon: any;
  lastIcon: any;
}
const HeaderWithMultiIcon = ({
  title,
  leftIcon = require('assets/icons/png/ic_left_arrow.png'),
  firtRightIcon,
  secondRightIcon,
  thirdRightIcon,
  lastIcon,
}: HeaderMultiIcons) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={leftIcon} style={{ height: 24, width: 24 }} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.SIcons}>
        <TouchableOpacity>
          <Image source={firtRightIcon} style={{ height: 24, width: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={secondRightIcon} style={{ height: 24, width: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={thirdRightIcon} style={{ height: 24, width: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={lastIcon} style={{ height: 24, width: 24 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderWithMultiIcon;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white1,
    padding: '10@s',
  },
  title: {
    fontSize: '14@s',
    fontWeight: '500',
    marginLeft: '10@s',
  },
  SIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '150@s',
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
