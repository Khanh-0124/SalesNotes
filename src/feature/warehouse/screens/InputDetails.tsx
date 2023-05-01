import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from 'assets/global/colors';
import InputWithTitle from 'components/base/header/input/InputWithTitle';
import { useDispatch, useSelector } from 'react-redux';
import {
  addbc,
  deleteDebt,
  inputDebt,
  updateDebt,
  updatebc,
} from '../../../redux/clientSlice';
import ButtonBase from 'components/base/buttons/ButtonBase';
import { Calendar } from 'react-native-calendars';
import { BottomSheet } from '@rneui/themed';

const InputDetails = () => {
  const route = useRoute<any>().params;
  const bc = useSelector((state: any) => state.clients.bc);
  const sum =
    useSelector((state: any) => state.clients.listClients[route.id].sum) || 0;
  const [showKey, setShowKey] = useState(false);
  Keyboard.addListener('keyboardDidShow', () => {
    setShowKey(true);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    setShowKey(false);
  });
  // console.log(parseInt(take) + parseInt(give))
  const navigation = useNavigation<any>();
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = `${now.getHours()}: ${now.getMinutes()}`;
  let nowday = `${day}/${month}/${year}`;
  const [choose, setChoose] = useState(!route.giveOrTake || false);
  const [description, setDescription] = useState(route.des);
  const [number, setNumber] = useState<any>(route.pay || 0);
  const [date, setDate] = useState<any>(route.date || nowday);
  const dispatch = useDispatch();
  // const
  const textInputRef = useRef<any>(null);

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);
  const [showCal, setShowCal] = useState(false);

  function handleDayPress(day: any) {
    setDate(`${day.day}/${day.month}/${day.year}`);
    setShowCal(false);
  }
  // console.log(route.idbc, "bomay"
  const submit = () => {
    // Cập nhật
    if (route.update) {
      dispatch(
        updateDebt({
          id: route.id,
          idDebt: route.idDebt,
          give: choose ?  parseInt(number) : 0,
          take: choose ? 0 :  parseInt(number),
          des: description,
          date: date,
          sum: choose
            ? parseInt(sum) - parseInt(route.pay) + parseInt(number)
            : parseInt(sum) + parseInt(route.pay) - parseInt(number),
          category: 'cho',
        }),
      );
      dispatch(
        updatebc({
          id: route.idbc,
          give: choose ? parseInt(number) : 0,
          take: choose ? 0 : parseInt(number),
          date: date,
          category: 'cho',
          hours: hours,
        }),
      );
    }
    // xong
    else {
      dispatch(
        inputDebt({
          id: route.id,
          idbc: bc.length,
          give: choose ? parseInt(number) : 0,
          take: choose ? 0 : parseInt(number),
          date: date,
          description: description,
          sum: !choose
            ? parseInt(sum) - parseInt(number)
            : parseInt(sum) + parseInt(number),
          category: 'cho',
          hours: hours,
        }),
      );
      dispatch(
        addbc({
          idbc: bc.lenght - 1,
          give: choose ? parseInt(number) : 0,
          take: choose ? 0 : parseInt(number),
          date: date,
          category: 'cho',
          hours: hours,
        }),
      );
    }
    setNumber(0);
    return navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderWithMultiIcon title={`${route.name} - ${route.phone}`} />
      <BottomSheet
        backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        onBackdropPress={() => setShowCal(false)}
        modalProps={{ animationType: 'fade' }}
        isVisible={showCal}>
        {showCal ? (
          <Calendar style={{ paddingBottom: 50 }} onDayPress={handleDayPress} />
        ) : null}
      </BottomSheet>
      <View style={{ padding: 15 }}>
        <View style={styles.SBox}>
          <TouchableOpacity
            onPress={() => setChoose(true)}
            style={[styles.box, choose ? { borderColor: COLORS.red2 } : null]}>
            <Text style={choose ? { color: COLORS.red1 } : null}>
              - Tôi đã đưa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChoose(false)}
            style={[
              styles.box,
              choose ? null : { borderColor: COLORS.green2 },
            ]}>
            <Text style={choose ? null : { color: COLORS.green2 }}>
              + Tôi đã nhận
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{}}>
          <Text style={{ marginTop: 10, fontWeight: '500' }}>Nhập số tiền</Text>
          <TextInput
            ref={route.tt ? null : textInputRef}
            style={{
              paddingVertical: 10,
              borderBottomColor: COLORS.gray1,
              borderBottomWidth: 1,
            }}
            placeholderTextColor={route.tt ? COLORS.black1 : undefined}
            placeholder={route.tt ? `${route.pay} VND` : '0'}
            keyboardType="number-pad"
            value={number}
            onChangeText={(t: any) => setNumber(t)}
          />
          {number > 0 ? (
            <View>
              <Text style={{ marginTop: 20, fontWeight: '500' }}>
                Chọn ngày giao dịch
              </Text>
              <TextInput
                editable={false}
                onPressIn={() => setShowCal(true)}
                style={{
                  paddingVertical: 10,
                  borderBottomColor: COLORS.gray1,
                  borderBottomWidth: 1,
                }}
                placeholder="0"
                keyboardType="number-pad"
                value={date}
                onChangeText={(t: any) => setDate(t)}
              />
              <Text style={{ marginTop: 20, fontWeight: '500' }}>Ghi chú</Text>
              <TextInput
                style={{
                  paddingVertical: 10,
                  borderBottomColor: COLORS.gray1,
                  borderBottomWidth: 1,
                }}
                placeholder="Mô tả"
                value={description}
                onChangeText={(t: any) => setDescription(t)}
              />
            </View>
          ) : null}
        </ScrollView>
      </View>
      <View
        style={{
          bottom: !showKey ? 10 : '33%',
          zIndex: 1,
          position: 'absolute',
          alignSelf: 'center',
          width: '90%',
        }}>
        <ButtonBase
          disable={number > 0 ? false : true}
          title={route.update ? 'Cập  nhật' : 'Xong'}
          background
          onPress={submit}
        />
      </View>
    </View>
  );
};

export default InputDetails;

const styles = StyleSheet.create({
  box: { padding: 10, borderWidth: 1, paddingHorizontal: 30, borderRadius: 10 },
  SBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 15,
  },
});
