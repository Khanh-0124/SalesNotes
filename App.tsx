import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import React from 'react';
import RootApp from './src/navigation/scene/RootNavigation';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NativeModules } from 'react-native';

NativeModules.DevSettings.setIsDebuggingRemotely(false);

LogBox.ignoreAllLogs();


const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootApp />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 17,
    backgroundColor: '#fff'
  },
});

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

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <ThemeContextProvider>
//       <Stack.Navigator>
//         <Stack.Screen name="Test2" component={Test2} />
//       </Stack.Navigator>
//     </ThemeContextProvider>
//   );
// };

// export default App;
