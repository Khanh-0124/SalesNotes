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
  //
  const arr = [
    { date: '2022-04-30', hour: '10', category: 'income', totalIncome: 100, totalExpense: 0 },
    { date: '2022-04-30', hour: '11', category: 'expense', totalIncome: 0, totalExpense: 50 },
    { date: '2022-04-30', hour: '12', category: 'income', totalIncome: 75, totalExpense: 0 },
    { date: '2022-05-01', hour: '9', category: 'income', totalIncome: 150, totalExpense: 0 },
    { date: '2022-05-01', hour: '10', category: 'expense', totalIncome: 0, totalExpense: 75 },
    { date: '2022-05-01', hour: '11', category: 'income', totalIncome: 100, totalExpense: 0 },
  ];
  
  const result = arr.reduce((acc: any, cur: any) => {
    const { date, hour, category, totalIncome, totalExpense } = cur;
    const key = date.split('T')[0];
    const existingItem = acc.find((item: any) => item.date === key);
  
    if (existingItem) {
      existingItem.totalIncome += totalIncome;
      existingItem.totalExpense += totalExpense;
      const existingHour = existingItem.hourlyData.find((hourly: any) => hourly.hour === hour);
      if (existingHour) {
        existingHour.totalIncome += totalIncome;
        existingHour.totalExpense += totalExpense;
      } else {
        existingItem.hourlyData.push({
          hour,
          category,
          totalIncome,
          totalExpense,
        });
      }
    } else {
      acc.push({
        date: key,
        totalIncome,
        totalExpense,
        hourlyData: [
          {
            hour,
            category,
            totalIncome,
            totalExpense,
          },
        ],
      });
    }
  
    return acc;
  }, []);
  
  result.forEach((item: any) => {
    item.balance = item.totalIncome - item.totalExpense;
  });
  // console.log(result[0].hourlyData);
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
