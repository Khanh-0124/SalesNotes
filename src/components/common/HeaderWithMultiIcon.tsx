import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'assets/global/colors';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/imageSlice';
interface HeaderMultiIcons {
  title: string;
  leftIcon?: any;
  firtRightIcon?: any;
  secondRightIcon?: any;
  thirdRightIcon?: any;
  lastIcon?: any;
  clean?: any
}
const HeaderWithMultiIcon = ({
  title,
  leftIcon = require('assets/icons/png/ic_left_arrow.png'),
  firtRightIcon,
  secondRightIcon,
  thirdRightIcon,
  lastIcon,
  clean
}: HeaderMultiIcons) => {
  const dispath = useDispatch()
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <TouchableOpacity onPress={() => {
          clean ? dispath(update({
            imagesList: []
          })) : null
          return navigation.goBack()
        }}>
          <Image source={leftIcon} style={{ height: 24, width: 24 }} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.SIcons}>
        {firtRightIcon ? (<TouchableOpacity>
          <Image source={firtRightIcon} style={styles.icon} />
        </TouchableOpacity>) : null}
        {secondRightIcon ? (<TouchableOpacity>
          <Image source={secondRightIcon} style={styles.icon} />
        </TouchableOpacity>) : null}

        {thirdRightIcon ? (<TouchableOpacity>
          <Image source={thirdRightIcon} style={styles.icon} />
        </TouchableOpacity>) : null}

        {lastIcon ? (<TouchableOpacity>
          <Image source={lastIcon} style={styles.icon} />
        </TouchableOpacity>) : null}

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

  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { height: 24, width: 24, marginHorizontal: 10 }
});
