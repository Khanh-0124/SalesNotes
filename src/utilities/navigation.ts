import { NavigateInterface } from './type/type';
import React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { Routes } from 'utilities/Routes';
import { TransitionPresets } from '@react-navigation/stack';

export const defaultScreenOptions = TransitionPresets.SlideFromRightIOS;
export const navigationRef = React.createRef<NavigationContainerRef<any>>();
export const navigation = () => navigationRef.current!;

export const createNavigate =
  <T extends object>(screenName: string) =>
  (params?: T) => {
    return navigation().navigate(screenName, params);
  };

export const goBack = () => navigation().goBack();
export const navigateToCameraFile = createNavigate(Routes.CameraFiles);
