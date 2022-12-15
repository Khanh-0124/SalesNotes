import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import RootApp from './src/navigation/scene/RooNavigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootApp />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
