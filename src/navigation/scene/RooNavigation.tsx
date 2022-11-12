import React, { createContext, useState, useContext, useEffect } from 'react';
import AuthNavigator from './auth/AuthNavigation';
import ClientStack from './client/ClientStack';
import {
  ThemeContextProvider,
  useTheme,
} from '../../utilities/context/ThemeContext';
// import ClientStack from '';
// import {auth} from '../firebase/firebase';
// import {useDispatch, useSelector} from 'react-redux';
// import {loading} from '../redux/taskSlice';

const RootNavigator = () => {
  // const dispatch = useDispatch();
  // const Load = useSelector((state: any) => state.task.tai);
  const Load = true;
  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       dispatch
  //         loading({
  //           load: true,
  //         }),
  //       );
  //     }
  //   });
  // });
  // if (load) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size={'large'} />
  //     </View>
  //   );
  // }
  // AsyncStorage.getItem('load').then((result: any) => {
  //   setLoad(result);
  // });
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

// import React from 'react';
// import {View} from 'react-native';
// import {Button, Headline} from 'react-native-paper';
// import {createStackNavigator} from '@react-navigation/stack';

// import {
//   ThemeContextProvider,
//   useTheme,
// } from './src/utilities/context/ThemeContext';

// const Test2 = () => {
//   const {toggleThemeType, themeType, isDarkTheme, theme} = useTheme();

//   return (
//     <View style={{marginTop: 200}}>
//       <Button mode="contained" onPress={toggleThemeType}>
//         Toggle Theme
//       </Button>
//       <Headline>{themeType}</Headline>
//       <Headline>isDarkTheme: {`${isDarkTheme}`}</Headline>
//       <Headline>Primary: {theme.colors.primary}</Headline>
//     </View>
//   );
// };
