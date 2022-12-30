import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SearchBarWithLeftIcon from 'components/common/searchs/SearchBarWithLeftIcon';
import { COLORS } from 'assets/global/colors';
import { useSelector, useDispatch } from 'react-redux';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { HEIGHT } from 'assets/global/layout';

const BottomSheetContent = () => {
  const categorys = useSelector((state: any) => state.categorys.listCategory);
  // console.log(categorys[0].name);
  const [tick, setTick] = useState(false);
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
        />
        <TouchableOpacity
          style={styles.wrapperCategory}
          onPress={() => setTick(!tick)}>
          {categorys.map((item: any, index: any) => (
            <View key={index} style={styles.wrapperItemCategory}>
              {tick ? (
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
            </View>
          ))}
        </TouchableOpacity>
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
