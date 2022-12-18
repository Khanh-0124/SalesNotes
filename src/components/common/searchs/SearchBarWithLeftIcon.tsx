import { TouchableOpacity, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { ScaledSheet } from 'react-native-size-matters';

const SearchBarWithLeftIcon = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/icons/png/ic_search.png')}
        style={[
          {
            height: 24,
            width: 24,
            marginLeft: 5,
            position: 'absolute',
            tintColor: COLORS.gray3,
            zIndex: 1,
            alignSelf: 'center',
            left: 25,
          },
        ]}
      />
      <View style={styles.wrapperSearch}>
        <TextInput
          placeholder="Tìm tên, mã SKU, ..."
          style={styles.SInput}
          placeholderTextColor={COLORS.gray6}
        />
        <TouchableOpacity>
          <Image
            source={require('assets/icons/png/ic_scanner.png')}
            style={styles.SIcon}
          />
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
    marginLeft: '10@s',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    padding: '10@s',
  },
  SInput: {
    width: '90%',
    backgroundColor: COLORS.white1,
    borderRadius: '5@s',
    paddingVertical: '7@s',
    paddingLeft: '45@s',
  },
  wrapperSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
