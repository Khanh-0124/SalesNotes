import { useRef } from 'react';
import { Camera, Point, useCameraDevices } from 'react-native-vision-camera';
// import ImagePicker from 'react-native-image-crop-picker';

export const TakePhotoFromCamera = async (camera: React.RefObject<Camera>) => {
  try {
    if (camera && camera.current) {
      const photo = await camera.current.takePhoto({
        qualityPrioritization: 'quality',
        flash: 'off',
        enableAutoRedEyeReduction: true,
      });
      return photo.uri;
    }
  } catch (e) {
    console.log('Error taking photo:', e);
    return null;
  }
};
