import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import InputWithTitle from 'components/base/header/input/InputWithTitle';

const Profile = () => {
  const counterRef = useRef(0);
  const handleButtonClick = () => {
    counterRef.current += 1;
    console.log(counterRef.current);
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white1 }}>
      <HeaderBase
        iconBack={false}
        title="Thông tin cá nhân"
        isIconLeft={false}
        bgColor={''}
        color={''}
      />
      <Button title="Increment" onPress={handleButtonClick} />
      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.white1,
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                padding: 8,
                backgroundColor: COLORS.white1,
                borderRadius: 50,
                position: 'absolute',
                bottom: 0,
                right: 0,
                zIndex: 1,
              }}>
              <Image
                source={require('assets/icons/png/ic_camera.png')}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray3,
                }}
              />
            </TouchableOpacity>
            <Image
              source={require('assets/photos/img_food1.png')}
              style={{ height: 90, width: 90, borderRadius: 50 }}
            />
          </View>
        </View>
        <View>
          <InputWithTitle
            title="Tên cửa hàng"
            onPress={() => {}}
            placeholder={'Ví dụ: khánh'}
            value={'Tạp hoá & Bánh mỳ Khánh Vũ'}
          />
          <InputWithTitle
            title="Số điện thoại"
            onPress={() => {}}
            placeholder={'Ví dụ: 012345678'}
            value={'012345678'}
          />
          <InputWithTitle
            title="Địa chỉ"
            onPress={() => {}}
            placeholder={'Thêm địa chỉ'}
            value={'Trục Ninh, Nam Định'}
          />
          <InputWithTitle
            title="Mô tả cửa hàng"
            onPress={() => {}}
            placeholder={'Ví dụ: Chuyên bánh mỳ kẹp các loại'}
            value={'vd'}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
