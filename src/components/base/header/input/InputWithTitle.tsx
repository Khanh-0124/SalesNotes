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
  type?: any;
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
  type,
}: InputTypeProp) {
  // const [nameproduct, setNameproduct] = useState('');
  const onChange = useCallback(
    (_value: string) => {
      onTextChange(keyName, _value);
    },
    [onTextChange, keyName],
  );
  let check: boolean = value === '' || (value === 0 && request) ? false : true;
  return (
    <View style={[styles.container, { flex: flex }]}>
      <View style={styles.title}>
        <Text style={[styles.STitle, !check ? { color: COLORS.red1 } : null]}>
          {title}
        </Text>
        {request ? (
          <Text style={{ color: COLORS.red1, marginLeft: 5 }}>*</Text>
        ) : null}
      </View>
      <TextInput
        keyboardType={type}
        style={[
          styles.textInput,
          !check ? { borderBottomColor: COLORS.red1 } : null,
        ]}
        placeholder={placeholder}
        // selectTextOnFocus={false}
        editable={editable}
        onPressIn={onPress}
        value={value}
        onChangeText={onChange}
      />
      {!check ? (
        <Text style={{ color: COLORS.red1, marginTop: 8, fontSize: 13 }}>
          Thông tin bắt buộc
        </Text>
      ) : null}
      {leftIcon ? (
        <Pressable onPress={onPress} style={{ backgroundColor: 'red' }}>
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
    fontWeight: '600',
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
