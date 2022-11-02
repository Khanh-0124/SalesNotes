import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import * as Svg from 'assets/icons/svg/index';
import InputComponent from 'components/base/Input';
import CheckboxComponent from 'components/base/CheckBox';
import { COLORS } from 'assets/global/colors';
import * as Footer from 'feature/auth/components/index';
import { normalize, WIDTH } from 'assets/global/layout';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { ThemeContextProvider, useTheme } from 'utilities/context/ThemeContext';

interface NavigationType {
  navigation: NavigationProp<ParamListBase>;
}
const SignUp = ({ navigation }: NavigationType) => {
  const [check, setCheck] = React.useState(false);
  const { toggleThemeType, themeType, isDarkTheme, theme } = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-back-circle-sharp"
              type="ionicon"
              size={normalize(28)}
              color={COLORS.primary}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: normalize(25),
              color: COLORS.primary,
              fontWeight: 'bold',
              marginLeft: WIDTH * 0.03,
            }}>
            Sign Up
          </Text>
        </View>
        {/* <Svg.TitleLogin style={{ alignSelf: 'center' }} /> */}
        {/* <Text style={styles.TitleStyle}>Hi, Wecome to sale note! 👋</Text>
        <Text style={{ fontSize: normalize(16), color: 'black' }}>
          Hello again, you’ve been missed!
        </Text> */}

        <View style={{ marginTop: 0 }}>
          <InputComponent title={'Name'} CustomStyleInput={styles.inputStyle} />
          <InputComponent
            title={'Email'}
            CustomStyleInput={styles.inputStyle}
          />
          <InputComponent
            title={'Phone'}
            CustomStyleInput={styles.inputStyle}
          />
          <InputComponent
            title={'Password'}
            secureTextEntry={true}
            CustomStyleInput={styles.inputStyle}
          />
        </View>
        {/* footer */}
        <Footer.FooterAuth title="SIGN UP" />
        <View
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <Text style={styles.textFoot}>You have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontSize: normalize(16), color: COLORS.primary }}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white1,
  },
  TitleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: normalize(26),
  },
  inputStyle: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 10,
  },
  viewChose: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: -18,
  },
  textFoot: {
    color: 'black',
    fontSize: normalize(16),
  },
});
