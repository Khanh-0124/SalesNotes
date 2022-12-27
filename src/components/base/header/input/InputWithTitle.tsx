import { Text, View, TextInput, Image, Pressable } from 'react-native';
import React, { memo, useState, useCallback } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
interface InputTypeProp {
  title: string;
  request?: boolean;
  placeholder: string;
  flex?: number;
  editable?: boolean;
  leftIcon?: any;
  value?: string | number;
  onTextChange?: (keyName: string, value: string) => void;
  onPress?: () => void;
  keyName?: string;
}
const InputWithTitle = memo(function InputWithTitle({
  title,
  request,
  placeholder,
  flex,
  editable = true,
  leftIcon,
  value,
  onPress,
  onTextChange,
  keyName,
}: InputTypeProp) {
  // const [nameproduct, setNameproduct] = useState('');
  const onChange = useCallback(
    (_value: string) => {
      onTextChange(keyName, _value);
    },
    [onTextChange, keyName],
  );
  return (
    <View style={[styles.container, { flex: flex }]}>
      <View style={styles.title}>
        <Text style={styles.STitle}>{title}</Text>
        {request ? (
          <Text style={{ color: 'red', marginLeft: 5 }}>*</Text>
        ) : null}
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        // selectTextOnFocus={false}
        editable={editable}
        onPressIn={onPress}
        value={value}
        onChangeText={onChange}
      />
      {leftIcon ? (
        <Pressable onPress={onPress}>
          <Image source={leftIcon} style={styles.iconDrop} />
        </Pressable>
      ) : null}
    </View>
  );
});

export default InputWithTitle;

const styles = ScaledSheet.create({
  container: {
    marginTop: '10@s',
  },
  title: {
    flexDirection: 'row',
  },
  STitle: {
    fontSize: '13@s',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray1,
    paddingBottom: '10@s',
    fontSize: '13@s',
    marginTop: '10@s',
  },
  iconDrop: {
    position: 'absolute',
    right: 0,
    top: '-30@s',
    height: '20@s',
    width: '20@s',
    marginRight: '15@s',
  },
});
