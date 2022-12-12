import { Text, View } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import StatusBarComponent from 'components/base/StatusBar';

const NotifiScreen = React.memo(function NotifiScreen() {
  return (
    <View>
      <StatusBarComponent
        bgColor={COLORS.primary}
        colorContent={'light-content'}
      />
      <HeaderBase
        title={'Thông báo'}
        bgColor={COLORS.primary}
        color={COLORS.white1}
        isIconLeft={false}
      />
      <Text>NotifiScreen</Text>
    </View>
  );
});

export default NotifiScreen;

const styles = ScaledSheet.create({});
