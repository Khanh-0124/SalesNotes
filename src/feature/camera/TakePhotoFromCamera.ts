import { useRef } from 'react';
import { Camera, Point, useCameraDevices } from 'react-native-vision-camera';
// import ImagePicker from 'react-native-image-crop-picker';

export const TakePhotoFromCamera = (camera: any) => {
  const photo = camera.current!.takePhoto({
    qualityPrioritization: 'quality',
    flash: 'off',
    enableAutoRedEyeReduction: true,
  });
  return photo;
};
