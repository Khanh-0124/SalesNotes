import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SpeedDialButton from 'components/common/SpeedDial';
import HeaderHome from 'components/base/header/HeaderHome';
import { COLORS } from 'assets/global/colors';
import {
  ListStatis,
  ListFeatureBox,
  OrderComponent,
  Contact,
} from './components/index';
import SlideBoxImage from 'components/common/SlideBoxImage';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeaderHome />
      <ScrollView>
        <ListStatis />
        <ListFeatureBox />
        <SlideBoxImage />
        <OrderComponent />
        <Contact />
      </ScrollView>
      {/* <View style={{ height: 200, backgroundColor: 'pink' }} /> */}
      <SpeedDialButton />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray2,
  },
});
