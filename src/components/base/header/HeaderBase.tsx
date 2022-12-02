import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
import { useNavigation } from '@react-navigation/native';

interface HeaderBaseProps {
  title: string;
}

const HeaderBase = memo(function HeaderBase({ title }: HeaderBaseProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('assets/icons/png/ic_left_arrow.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Image
          source={require('assets/icons/png/ic_settings.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
});

export default HeaderBase;

const styles = ScaledSheet.create({
  icon: {
    height: '24@s',
    width: '24@s',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10@s',
    backgroundColor: COLORS.white1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '14@s',
    fontWeight: '500',
  },
});
