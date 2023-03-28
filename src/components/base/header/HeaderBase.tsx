import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
import { useNavigation } from '@react-navigation/native';

interface HeaderBaseProps {
  iconBack?: boolean,
  title: string;
  bgColor?: string;
  color?: string;
  isIconLeft?: boolean;
}

const HeaderBase = memo(function HeaderBase({
  iconBack = true,
  title,
  bgColor,
  color,
  isIconLeft = true,
}: HeaderBaseProps) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {
        iconBack ? (<TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('assets/icons/png/ic_left_arrow.png')}
            style={[styles.icon, { tintColor: color }]}
          />
        </TouchableOpacity>) : <View />
      }

      <Text style={[styles.title, { color: color }]}>{title}</Text>
      {isIconLeft ? (
        <TouchableOpacity>
          <Image
            source={require('assets/icons/png/ic_settings.png')}
            style={[styles.icon, { tintColor: color }]}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
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
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '14@s',
    fontWeight: '500',
  },
});
