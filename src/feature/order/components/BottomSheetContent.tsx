import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SearchBarWithLeftIcon from 'components/common/searchs/SearchBarWithLeftIcon';
import { COLORS } from 'assets/global/colors';
import { useSelector, useDispatch } from 'react-redux';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { HEIGHT } from 'assets/global/layout';
import BottomSheet from 'components/common/BottomSheet';
import { plusCate, updateList } from '../../../redux/categorySlice';

const BottomSheetContent = () => {
  const categorys = useSelector((state: any) => state.categorys.listCategory);
  // console.log(categorys[1].name);
  // const tick = useSelector((state: any) => state.categorys.listCategory);
  const dispath = useDispatch();
  const showAddInputCategory = useSelector(
    (state: any) => state.categorys.addCategory,
  );
  return (
    <>
      <View>
        <SearchBarWithLeftIcon
          placeholder="Tìm tên danh mục"
          backgroundColor=""
          width="85%"
          source={require('assets/icons/png/ic_plus.png')}
          customStyleIconLeft={{
            backgroundColor: COLORS.primary,
            padding: 12,
            borderRadius: 5,
            marginLeft: 10,
          }}
          styleIconLeft={{ width: 14, height: 14 }}
          touchPlus={() => {
            dispath(
              plusCate({
                addCate: true,
              }),
            );
            console.log(showAddInputCategory);
          }}
        />
        <View style={styles.wrapperCategory}>
          {categorys.map((item: any, index: any) => (
            <TouchableOpacity
              key={index}
              style={styles.wrapperItemCategory}
              onPress={() => {
                dispath(
                  updateList({
                    id: categorys.indexOf(item),
                    tick: item.tick ? false : true,
                  }),
                );
              }}>
              {item.tick ? (
                <Image
                  source={require('assets/icons/png/ic_tick.png')}
                  style={styles.STick}
                />
              ) : null}

              <Image
                source={
                  item.image === null
                    ? require('assets/icons/png/ic_picnic.png')
                    : item.image
                }
                style={styles.SImage}
              />
              <Text style={{ marginTop: 20 }}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: HEIGHT * 0.22 }} />
        <View style={styles.SButton}>
          <ButtonBase title="Quay lại" onPress={() => {}} />
          <ButtonBase title="Cập nhật" background={true} onPress={() => {}} />
        </View>
      </View>
    </>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  SImage: {
    height: 34,
    width: 34,
  },
  wrapperCategory: {
    paddingHorizontal: 40,
    flexDirection: 'row',
    marginTop: 15,
  },
  wrapperItemCategory: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  STick: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  SButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: COLORS.white1,
    padding: 15,
  },
});
