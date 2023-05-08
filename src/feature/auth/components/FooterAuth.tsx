import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from 'assets/global/colors';
import { normalize } from 'assets/global/layout';
import * as Svg from 'assets/icons/svg/index';
import * as layout from 'assets/global/layout';
import { ThemeContextProvider, useTheme } from 'utilities/context/ThemeContext';

const FooterAuth = ({
  title = 'Đăng nhập',
  handleSubmit,
}: {
  title?: string;
  handleSubmit?: any;
}) => {
  const { toggleThemeType, themeType, isDarkTheme, theme } = useTheme();
  return (
    <View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonLogin}
          activeOpacity={0.5}
          onPress={handleSubmit}>
          <Text style={styles.titleButton}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.viewSocialButton}>
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
    marginBottom: layout.HEIGHT * 0.20
  },
  titleButton: {
    color: COLORS.white1,
    fontSize: normalize(16),
  },
  footer: {
    marginTop:
      layout.HEIGHT > 700 ? layout.HEIGHT * 0.05 : layout.HEIGHT * 0.03,
  },
  otherWith: {
    marginVertical: layout.HEIGHT * 0.07,
  },
  socialkButton: {
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
