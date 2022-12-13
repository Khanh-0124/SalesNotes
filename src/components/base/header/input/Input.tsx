import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import { normalize } from 'assets/global/layout';
interface InputType {
  title: string;
  secureTextEntry?: boolean;
  CustomStyleInput: StyleProp<TextStyle>;
}
// interface CustomStyle extends  {

// }
export default ({ title, CustomStyleInput, secureTextEntry }: InputType) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        placeholder=""
        style={CustomStyleInput}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    color: 'black',
    fontSize: normalize(16),
  },
});
