import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { COLORS } from 'assets/global/colors';
import HeaderTransparent from 'components/common/HeaderTransparentWithIcon';
import { WINDOW_HEIGHT } from 'utilities/index';
import { goBack } from 'utilities/navigation';

const CameraFiles = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') await Linking.openSettings();
  }, []);

  const camera = useRef<Camera>(null);
  if (device == null)
    return (
      <>
        <Text>Không tìm thấy camera</Text>
        <TouchableOpacity>
          <Text>{`< Quay lại`}</Text>
        </TouchableOpacity>
      </>
    );
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.HeaderTransparent}>
          <HeaderTransparent
            tintColor={COLORS.white1}
            onPress={() => goBack()}
          />
        </View>
        <Camera
          style={{ flex: 1 }}
          device={device}
          isActive={true}
          enableZoomGesture
          ref={camera}
          photo={true}
        />
      </View>
      <View style={styles.wrapperFooter}>
        <TouchableOpacity>
          <Image
            source={require('assets/icons/png/ic_image.png')}
            style={styles.imageSelector}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('assets/icons/png/ic_touch_camre.png')}
            style={styles.touchCamera}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('assets/icons/png/ic_change_cam.png')}
            style={styles.imageSelector}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(CameraFiles);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeaderTransparent: {
    position: 'absolute',
    zIndex: 1,
    top: WINDOW_HEIGHT * 0.06,
  },
  wrapperFooter: {
    width: '100%',
    backgroundColor: COLORS.white1,
    paddingHorizontal: 50,
    paddingVertical: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperHeader: {
    flex: 0,
  },
  touchCamera: {
    height: 90,
    width: 90,
  },
  imageSelector: {
    height: 28,
    width: 28,
    tintColor: COLORS.black2,
  },
});
