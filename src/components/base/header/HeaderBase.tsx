import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { reset } from '../../../redux/productSlice';
import { useDispatch } from 'react-redux';
interface HeaderBaseProps {
  iconBack?: boolean,
  title: string;
  bgColor?: string;
  color?: string;
  isIconLeft?: boolean;
  clean?: boolean
}

const HeaderBase = memo(function HeaderBase({
  iconBack = true,
  title,
  bgColor = '#fff',
  color,
  isIconLeft = true,
  clean = false
}: HeaderBaseProps) {
  const dispath = useDispatch()
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: bgColor, width: '100%' }, isIconLeft ? null : { paddingRight: 26 }]}>
      {
        iconBack ? (<TouchableOpacity onPress={() => {
          clean ? dispath(reset({ touch: 0 })) : null
          return navigation.goBack()
        }}>
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
    paddingTop: 65,

  },
  title: {
    fontSize: '14@s',
    fontWeight: '500',
  },
});
