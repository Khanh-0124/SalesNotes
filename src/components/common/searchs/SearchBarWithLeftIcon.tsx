import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  ImageStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { ScaledSheet } from 'react-native-size-matters';

interface SearchWithLeftIconInterface {
  placeholder: string;
  backgroundColor: string;
  customStyleIconLeft?: ImageStyle;
  source: any;
  width?: string;
  styleIconLeft?: ImageStyle;
  touchPlus?: any;
}

const SearchBarWithLeftIcon = ({
  placeholder,
  backgroundColor,
  customStyleIconLeft,
  source,
  width = '90%',
  styleIconLeft,
  touchPlus,
}: SearchWithLeftIconInterface) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Image
        source={require('assets/icons/png/ic_search.png')}
        style={styles.icSearch}
      />
      <View style={styles.wrapperSearch}>
        <TextInput
          placeholder={placeholder}
          style={[styles.SInput, { width: width }]}
          placeholderTextColor={COLORS.gray6}
        />
        <TouchableOpacity style={customStyleIconLeft} onPress={touchPlus}>
          <Image source={source} style={[styles.SIcon, styleIconLeft]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBarWithLeftIcon;

const styles = ScaledSheet.create({
  SIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.white1,
    // marginLeft: '10@s',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@s',
    alignSelf: 'center',
  },
  SInput: {
    backgroundColor: COLORS.gray2,
    borderRadius: '5@s',
    paddingVertical: '10@s',
    paddingLeft: '45@s',
    marginRight: '10@s',
  },
  wrapperSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icSearch: {
    height: 24,
    width: 24,
    marginLeft: 5,
    position: 'absolute',
    tintColor: COLORS.gray3,
    zIndex: 1,
    alignSelf: 'center',
    left: 25,
  },
});
