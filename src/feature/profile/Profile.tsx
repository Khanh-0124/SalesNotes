import { Image, StyleSheet, Text, Touchable, View } from 'react-native';
import React from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <View>
      <HeaderBase
        title="Thông tin cá nhân"
        isIconLeft={false}
        bgColor={''}
        color={''}
      />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.white1,
          padding: 10,
        }}>
        <View>
          <Image
            source={require('../../assets/icons/png/ic_camera.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: COLORS.gray3,
              position: 'absolute',
              bottom: 0,
              right: 0,
              zIndex: 1,
            }}
          />
          <Image
            source={require('../../assets/photos/img_food1.png')}
            style={{ height: 70, width: 70, borderRadius: 50 }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: '500' }}>Khánh</Text>
          <Text style={{ marginVertical: 5 }}>0912352670</Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: COLORS.primary,
              }}>
              Chỉnh sửa thông tin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
