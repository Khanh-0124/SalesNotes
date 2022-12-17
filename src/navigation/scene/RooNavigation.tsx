import React, { createContext, useState, useContext, useEffect } from 'react';
import AuthNavigator from './auth/AuthNavigation';
import ClientStack from './client/ClientStack';
import {
  ThemeContextProvider,
  useTheme,
} from '../../utilities/context/ThemeContext';
import { useSelector } from 'react-redux';

const RootNavigator = () => {
  let Load = useSelector((state: any) => state.user.authStateChanged);
  return <>{Load ? <ClientStack /> : <AuthNavigator />}</>;
};

const RootApp = () => {
  return (
    <ThemeContextProvider>
      <RootNavigator />
    </ThemeContextProvider>
  );
};
export default RootApp;
