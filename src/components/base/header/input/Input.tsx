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
  CustomStyleInput?: StyleProp<TextStyle>;
  onTextChange: (keyName: string, value: string) => void;
  value: string;
  keyName: string;
  placeholder?: string
  onPress?: any,
  disable?: boolean
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
  placeholder,
  onPress,
  disable
  // { ...rest }
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
        placeholder={placeholder}
        placeholderTextColor={'#ccc'}
        value={value}
        onChangeText={onChange}
        style={CustomStyleInput}
        secureTextEntry={secureTextEntry}
        editable={disable ? false : true}
        onPressIn={onPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    color: 'black',
    fontSize: normalize(16),
    marginLeft: 10
  },
});
