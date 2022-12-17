import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import * as Svg from 'assets/icons/svg/index';
import InputComponent from 'components/base/header/input/Input';
import CheckboxComponent from 'components/base/CheckBox';
import { COLORS } from 'assets/global/colors';
import * as Footer from 'feature/auth/components/index';
import { normalize, WIDTH } from 'assets/global/layout';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { ThemeContextProvider, useTheme } from 'utilities/context/ThemeContext';
import { handleSignup } from '../../servers/firebase/auth/auth';
import { useSelector, useDispatch } from 'react-redux';
import { changeStateAuth } from '../../redux/userSlice';

interface NavigationType {
  navigation: NavigationProp<ParamListBase>;
}
const SignUp = ({ navigation }: NavigationType) => {
  const dispath = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    handleSignup(email, password);
    dispath(
      changeStateAuth({
        authStateChanged: true,
      }),
    );
  };
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

        <View style={{ marginTop: 0 }}>
          <InputComponent title={'Name'} CustomStyleInput={styles.inputStyle} />
          <InputComponent
            title={'Email'}
            CustomStyleInput={styles.inputStyle}
            textOnChange={mail => setEmail(mail)}
            value={email}
          />
          <InputComponent
            title={'Phone'}
            CustomStyleInput={styles.inputStyle}
          />
          <InputComponent
            title={'Password'}
            secureTextEntry={true}
            CustomStyleInput={styles.inputStyle}
            textOnChange={pass => setPassword(pass)}
            value={password}
          />
        </View>
        {/* footer */}
        <Footer.FooterAuth title="SIGN UP" handleSubmit={submit} />
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
