import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import firestore from '@react-native-firebase/firestore';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { addData, deleteData, updateData } from '../../servers/firebase/crud';
import CalendarComponents from 'components/CalendarComponents';
import { useSelector } from 'react-redux';

import { dataY } from 'assets/global/filterDateForLineChart';



const Profile = () => {
  // const listOrders = useSelector((state: any) => state.orders.listOrders)
  
  // console.log(dataY(listOrders, ['10/4', '12/4', '11/4', '13/4']))
  const arr = [
    { name: 'A', sum: 10, uri: 'url1' },
    { name: 'B', sum: 20, uri: 'url2' },
    { name: 'A', sum: 30, uri: 'url3' },
    { name: 'B', sum: 40, uri: 'url4' },
    { name: 'C', sum: 50, uri: 'url5' },
    { name: 'A', sum: 60, uri: 'url6' },
  ];

  const result = Object.values(
    arr.reduce((acc, cur) => {
      if (acc[cur.name]) {
        acc[cur.name].sum += cur.sum;
        acc[cur.name].count += 1;
      } else {
        acc[cur.name] = {
          name: cur.name,
          sum: cur.sum,
          uri: cur.uri,
          count: 1,
        };
      }
      return acc;
    }, {})
  );

  console.log(result, "a");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white1 }}>
      <HeaderBase
        iconBack={false}
        title="Thông tin cá nhân"
        isIconLeft={false}
        bgColor={''}
        color={''}
      />
      <View style={{ paddingHorizontal: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.white1,
            alignSelf: 'center',
            marginVertical: 20
        }}>
        <View>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
            }} style={{
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
          <InputWithTitle title='Tên cửa hàng' onPress={() => { }} placeholder={'Ví dụ: khánh'} value={'Tạp hoá & Bánh mỳ Khánh Vũ'} />
          <InputWithTitle title='Số điện thoại' onPress={() => { }} placeholder={'Ví dụ: 012345678'} value={'012345678'} />
          <InputWithTitle title='Địa chỉ' onPress={() => { }} placeholder={'Thêm địa chỉ'} value={'Trục Ninh, Nam Định'} />
          <InputWithTitle title='Mô tả cửa hàng' onPress={() => { }} placeholder={'Ví dụ: Chuyên bánh mỳ kẹp các loại'} value={'vd'} />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
