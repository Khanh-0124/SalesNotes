import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { COLORS } from 'assets/global/colors';
import { plusCate, addList } from '../../../redux/categorySlice';
import { useDispatch } from 'react-redux';

const InputPlus = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState('');
  return (
    <View style={{ paddingHorizontal: 30 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Nhập tên danh mục"
          placeholderTextColor={COLORS.gray3}
          onChangeText={text => setInputData(text)}
          value={inputData}
          style={{
            fontSize: 15,
            width: 200,
            borderColor: COLORS.primary,
            borderBottomWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(
              addList({
                addItem: inputData,
                image: null,
                tick: false,
              }),
            );
            dispatch(
              plusCate({
                addCate: false,
              }),
            );
          }}
          style={{
            marginRight: 20,
            backgroundColor: COLORS.primary,
            padding: 10,
            borderRadius: 8,
          }}>
          <Text style={{ color: 'white' }}>Tạo</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: '20%', marginTop: 40 }}>
        <ButtonBase
          title="Huỷ"
          background
          onPress={() => {
            dispatch(
              plusCate({
                addCate: false,
              }),
            );
          }}
        />
      </View>
    </View>
  );
};

export default InputPlus;

const styles = StyleSheet.create({});
