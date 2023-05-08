import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import * as Svg from 'assets/icons/svg/index';
import InputComponent from 'components/base/header/input/Input';
import CheckboxComponent from 'components/base/CheckBox';
import { COLORS } from 'assets/global/colors';
import * as Footer from './components/index';
import { normalize } from 'assets/global/layout';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { handleLogin } from 'servers/firebase/auth/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ParamLoginInterface } from '../auth/type';
import auth from '@react-native-firebase/auth';
import { changeStateAuth } from '../../redux/userSlice';
import { getData } from '../../servers/firebase/crud';
import { cloudBc, cloudData } from '../../redux/clientSlice';
import { cloudProducts } from '../../redux/productSlice';
import { cloudImages } from '../../redux/imageSlice';

interface NavigationType {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen = ({ navigation }: NavigationType) => {
  const dispath = useDispatch();
  const [check, setCheck] = React.useState(false);
  const [paramsCustom, setParamsCustom] = useState<ParamLoginInterface>({
    username: 'khanh@gmail.com',
    password: 'khanh2001',
  });
  const onTextChange = useCallback((keyName: string, value: string) => {
    setParamsCustom(state => ({ ...state, [keyName]: value }));
  }, []);

  // const products = useSelector((state: any) => state.products);
  useEffect(() => {
    getData("ClientStack", 'Customers').then((datta) => {
      dispath(cloudData(
        {
          data: datta?.ListOfCustomers || []
        }
      ))
    })
    getData("ClientStack", 'Products').then((datta) => {
      let pr = datta?.ListProducts
      pr ? dispath(cloudProducts(
        {
          product: pr,
        }
      )) : null
    })
    getData("ClientStack", 'Debits').then((datta) => {
      let bc = datta?.DataDebit
      bc ? dispath(cloudBc(
        {
          bc: bc,
        }
      )) : null
    })
    getData('ClientStack', "ListImages").then((datta) => {
      let image = datta?.ListImages
      dispath(cloudImages({
        image: image
      }))
    })
    getData('ClientStack', "ListCategorys").then((datta) => {
      let cate = datta?.listCategory
      let prono = datta?.productsNoCategory
      dispath(cloudImages({
        category: cate,
        proNo: prono
      }))
    })
    // console.log(products, "dangtest")
    auth().onAuthStateChanged((user: any) => {
      if (user) {
        dispath(
          changeStateAuth({
            change: true,
          }),
        );
      }
    });

  }, []);

  // console.log(data, "Data")
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Svg.TitleLogin style={{ alignSelf: 'center' }} />
        <Text style={styles.TitleStyle}>
          Xin chào!, Chào mừng đến với Sales Notes 👋
        </Text>
        <Text style={styles.SText}>{`Đăng nhập để sử dụng dịch vụ`}</Text>

        <View style={{ marginTop: 10 }}>
          <InputComponent
            title={'Tên người dùng'}
            value={paramsCustom.username}
            keyName={'username'}
            CustomStyleInput={styles.inputStyle}
            onTextChange={onTextChange}
          />
          <InputComponent
            title={'Mật khẩu'}
            value={paramsCustom.password}
            keyName={'password'}
            secureTextEntry={true}
            CustomStyleInput={styles.inputStyle}
            onTextChange={onTextChange}
          />
        </View>
        <View style={styles.viewChose}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{ color: COLORS.red1, fontSize: normalize(16) }}>
              {`Quên mật khẩu`}
            </Text>
          </TouchableOpacity>
        </View>
        {/* footer */}
        <Footer.FooterAuth
          handleSubmit={() => {
            handleLogin(paramsCustom.username, paramsCustom.password)
          }
          }
        />
        <View
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <Text style={styles.textFoot}>You have don't account?</Text>
          <TouchableOpacity onPress={() => {
            return navigation.navigate('SignUp')
          }}>
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
  SText: {
    fontSize: normalize(18),
    color: 'black',
    marginTop: 10,
    fontWeight: '600',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20

  },
  textFoot: {
    color: 'black',
    fontSize: normalize(16),
  },
});
