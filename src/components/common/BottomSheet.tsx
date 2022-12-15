import React, { useState, useCallback } from 'react';
import { BottomSheet, Button, Icon, ListItem } from '@rneui/themed';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from 'assets/global/colors';
import InputWithTitle from 'components/base/header/input/InputWithTitle';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <InputWithTitle
        title="Danh mục"
        placeholder="Chọn 1 hoặc nhiều danh mục"
        editable={false}
        leftIcon={require('assets/icons/png/ic_down_arrow.png')}
        onPress={useCallback(() => {
          setIsVisible(true);
        }, [])}
      />
      <BottomSheet
        modalProps={{ animationType: 'slide' }}
        isVisible={isVisible}
        containerStyle={{}}
        backdropStyle={{ backgroundColor: '#333' + 9 }}
        onBackdropPress={() => setIsVisible(false)}>
        {/* {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content></ListItem.Content>
          </ListItem>
        ))} */}
        <KeyboardAvoidingView>
          <Pressable onPress={() => setIsVisible(false)} style={{}}>
            <View style={styles.buttonSheet}>
              <View style={styles.pullButtonSheet} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View />
                <Text style={styles.title}>Danh mục</Text>
                <Icon
                  name="close"
                  size={24}
                  color={'black'}
                  style={{ marginRight: 15 }}
                />
              </View>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = ScaledSheet.create({
  button: {
    margin: 15,
  },
  buttonSheet: {
    height: '300@s',
    backgroundColor: COLORS.white1,
  },
  title: {
    textAlign: 'center',
    fontSize: '15@s',
    fontWeight: '600',
    marginLeft: 39,
  },
  pullButtonSheet: {
    width: '60@s',
    backgroundColor: COLORS.gray1,
    height: '5@s',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: '10@s',
    marginBottom: '5@s',
  },
});

export default BottomSheetComponent;
