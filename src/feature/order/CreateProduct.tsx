import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';

const CreateProduct = memo(function CreateProduct() {
  return (
    <View>
      <HeaderBase title={'Tạo sản phẩm'} />
    </View>
  );
});

export default CreateProduct;

const styles = StyleSheet.create({});
