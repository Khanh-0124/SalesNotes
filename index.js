/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);

AppRegistry.registerComponent(appName, () => App);
