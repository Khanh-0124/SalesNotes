import { StatusBar, StatusBarStyle } from 'react-native';
import React, { useCallback } from 'react';
import { COLORS } from 'assets/global/colors';

interface StatusbarType {
  bgColor: string;
  colorContent: StatusBarStyle | null | undefined;
}
const StatusBarComponent = ({ bgColor, colorContent }: StatusbarType) => {
  return <StatusBar backgroundColor={bgColor} barStyle={colorContent} />;
};

export default StatusBarComponent;
