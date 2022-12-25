import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  StatusBar,
  NativeTouchEvent,
} from 'react-native';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Camera, Point, useCameraDevices } from 'react-native-vision-camera';
import { COLORS } from 'assets/global/colors';
import HeaderTransparent from 'components/common/HeaderTransparentWithIcon';
import { WINDOW_HEIGHT } from 'utilities/index';
import { goBack } from 'utilities/navigation';
import { TakePhotoFromCamera } from './TakePhotoFromCamera';
import ImagePicker from 'react-native-image-crop-picker';

const CameraFiles = () => {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const [uriFile, setUriFile] = useState('');
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') await Linking.openSettings();
  }, []);

  const camera = useRef<Camera>(null);

  const [camLocation, setCamLocation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const touchII = async (event: NativeTouchEvent) => {
    let point: Point = {
      x: Math.round(event.pageX - camLocation.x),
      y: Math.round(event.pageY - camLocation.y),
    };
    await camera?.current
      ?.focus(point)
      .then(() => {
        console.log('Focus succeeded');
      })
      .catch(reason => {
        console.log('Focus failed!', reason);
      });
  };

  const handelTakeImageFromCamera = useCallback(async () => {
    await TakePhotoFromCamera(camera).then((res: any) =>
      setUriFile(`file://${res.path}`),
    );
  }, []);

  console.log(uriFile);
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
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            setCamLocation({ x: layout.x, y: layout.y });
          }}
          onTouchEnd={x => device.supportsFocus && touchII(x.nativeEvent)}
        />
      </View>
      <View style={styles.wrapperFooter}>
        <TouchableOpacity>
          <Image
            source={require('assets/icons/png/ic_image.png')}
            style={styles.imageSelector}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handelTakeImageFromCamera}>
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
