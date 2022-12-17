import React, { useCallback } from 'react';
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
  onTextChange: (keyName: string, value: string) => void;
  value: string;
  keyName: string;
}
// interface CustomStyle extends  {

// }
export default ({
  title,
  CustomStyleInput,
  secureTextEntry,
  onTextChange,
  value,
  keyName,
}: InputType) => {
  const onChange = useCallback(
    (_value: string) => {
      onTextChange(keyName, _value);
    },
    [onTextChange, keyName],
  );
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        placeholder=""
        value={value}
        onChangeText={onChange}
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
