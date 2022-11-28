import { COLORS } from 'assets/global/colors';
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const App = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={1.5}
        dotStyle={{ backgroundColor: COLORS.white1 }}
        activeDotColor={COLORS.primary}
        style={styles.wrapper}
        nextButton={
          // <Text style={{ color: COLORS.primary, fontSize: 54 }}>›</Text>
          <></>
        }
        prevButton={
          // <Text style={{ color: COLORS.primary, fontSize: 54 }}>‹</Text>
          <></>
        }
        showsButtons={true}>
        <Image
          resizeMode="cover"
          style={{ height: '100%', width: '100%' }}
          source={require('assets/photos/img_slide1.png')}
        />
        <Image
          resizeMode="cover"
          style={{ height: '100%', width: '100%' }}
          source={require('assets/photos/img_slide2.png')}
        />
        <Image
          resizeMode="cover"
          style={{ height: '100%', width: '100%' }}
          source={require('assets/photos/img_slide3.png')}
        />
      </Swiper>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  wrapper: {
    height: 150,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  container: {},
});
