import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import * as Svg from 'assets/icons/svg/index';
import InputComponent from 'components/base/header/input/Input';
import CheckboxComponent from 'components/base/CheckBox';
import { COLORS } from 'assets/global/colors';
import * as Footer from './components/index';
import { normalize } from 'assets/global/layout';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { handleLogin } from '../../servers/firebase/auth/auth';
import { useSelector, useDispatch } from 'react-redux';

interface NavigationType {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen = ({ navigation }: NavigationType) => {
  // console.log(useSelector(state) => )
  const dispath = useDispatch();
  const [check, setCheck] = React.useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Svg.TitleLogin style={{ alignSelf: 'center' }} />
        <Text style={styles.TitleStyle}>Hi, Wecome to sale note! 👋</Text>
        <Text style={{ fontSize: normalize(16), color: 'black' }}>
          {`Hello again, you’ve been missed!`}
        </Text>

        <View style={{ marginTop: 10 }}>
          <InputComponent
            title={'Email'}
            CustomStyleInput={styles.inputStyle}
            textOnChange={mail => setEmail(mail)}
            value={email}
          />
          <InputComponent
            title={'Password'}
            secureTextEntry={true}
            CustomStyleInput={styles.inputStyle}
            textOnChange={pass => setPass(pass)}
            value={pass}
          />
        </View>
        <View style={styles.viewChose}>
          <CheckboxComponent
            title={'Remember Me'}
            onPress={() => setCheck(!check)}
            check={check}
          />
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{ color: COLORS.red1, fontSize: normalize(16) }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        {/* footer */}
        <Footer.FooterAuth handleSubmit={() => handleLogin(email, pass)} />
        <View
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <Text style={styles.textFoot}>You have don't account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontSize: normalize(16), color: COLORS.primary }}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

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
