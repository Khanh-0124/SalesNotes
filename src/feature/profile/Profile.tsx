import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import firestore from '@react-native-firebase/firestore';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const Profile = () => {
  const ref = firestore().collection('products').doc("khanh1");
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
            <TouchableOpacity activeOpacity={0.5} style={{
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
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              },
              {
                data: [
                  Math.random() * 130,
                  Math.random() * 200,
                  Math.random() * 100,
                  Math.random() * 200,
                  Math.random() * 200,
                  Math.random() * 70
                ]
              },
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={320}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#ccc",
            backgroundGradientTo: COLORS.primary + 10,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
