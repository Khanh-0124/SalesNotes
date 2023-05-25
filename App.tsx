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
