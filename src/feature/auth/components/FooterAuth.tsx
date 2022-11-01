import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { normalize } from 'assets/global/layout';
import * as Svg from 'assets/icons/svg/index';
import * as layout from 'assets/global/layout';
import { ThemeContextProvider, useTheme } from 'utilities/context/ThemeContext';

const FooterAuth = () => {
  const { toggleThemeType, themeType, isDarkTheme, theme } = useTheme();
  return (
    <View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonLogin}
          activeOpacity={0.5}
          onPress={() => {
            toggleThemeType;
            // navigation.navigate('Test2');
            console.log('a');
          }}>
          <Text style={styles.titleButton}>LOGIN</Text>
        </TouchableOpacity>
        <Svg.Width width={'100%'} style={styles.otherWith} />
        {/* View social button */}
        <View style={styles.viewSocialButton}>
          {/* fb login */}
          <TouchableOpacity activeOpacity={0.7} style={styles.socialkButton}>
            <Svg.FB width={layout.WIDTH * 0.05} height={layout.WIDTH * 0.05} />
            <Text style={styles.textButton}>Facbook</Text>
          </TouchableOpacity>
          <View style={{ width: layout.WIDTH * 0.08 }} />
          {/* google login */}
          <TouchableOpacity activeOpacity={0.7} style={styles.socialkButton}>
            <Svg.GG width={layout.WIDTH * 0.05} height={layout.WIDTH * 0.05} />
            <Text style={styles.textButton}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FooterAuth;

const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  titleButton: {
    color: COLORS.white1,
    fontSize: normalize(16),
  },
  footer: {
    marginTop:
      layout.HEIGHT > 700 ? layout.HEIGHT * 0.14 : layout.HEIGHT * 0.03,
  },
  otherWith: {
    marginVertical: layout.HEIGHT * 0.04,
  },
  socialkButton: {
    // backgroundColor: '#ccc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 10,
    borderColor: '#d2d2d2',
    borderWidth: 0.7,
  },
  viewSocialButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textButton: {
    fontSize: normalize(16),
    color: 'black',
    marginLeft: layout.WIDTH * 0.03,
  },
});
