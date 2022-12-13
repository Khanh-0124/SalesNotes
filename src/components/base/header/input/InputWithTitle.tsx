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
  drop_down?: boolean;
  onPress?: () => void;
}
const InputWithTitle = memo(function InputWithTitle({
  title,
  request,
  placeholder,
  flex,
  editable = true,
  drop_down = false,
  onPress,
}: InputTypeProp) {
  // const [nameproduct, setNameproduct] = useState('');
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
      />
      {drop_down ? (
        <Pressable onPress={onPress}>
          <Image
            source={require('assets/icons/png/ic_down_arrow.png')}
            style={styles.iconDrop}
          />
        </Pressable>
      ) : null}
    </View>
  );
});

export default InputWithTitle;

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '15@s',
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
