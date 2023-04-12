import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from 'assets/global/colors';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { changeDateFilter } from '../../redux/userSlice';
import moment from 'moment';

type MarkedDatesProps = {
  [date: string]: { startingDay?: boolean; endingDay?: boolean; color?: string; textColor?: string };
};

const CalendarGlobal = ({ callbackDate, onPrerss }: any) => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({});

  const onDayPress = (day: any) => {
    if (startDate === '') {
      setStartDate(day.dateString);
      setMarkedDates({
        ...markedDates,
        [day.dateString]: { startingDay: true, color: COLORS.primary },
      });
    } else if (endDate === '') {
      const range = getRangeOfDates(startDate, day.dateString);
      let newMarkedDates = { ...markedDates };
      range.forEach((date) => {
        newMarkedDates[date] = { color: COLORS.primary };
      });
      setEndDate(day.dateString);
      setMarkedDates(newMarkedDates);
    } else {
      setStartDate(day.dateString);
      setEndDate('');
      setMarkedDates({
        [day.dateString]: { startingDay: true, color: COLORS.primary },
      });
    }
  };

  const getRangeOfDates = (startDate: string, endDate: string) => {
    let dates: any[] = [];
    let currDate: any = startDate;
    while (currDate <= endDate) {
      dates = [...dates, currDate];
      currDate = new Date(currDate);
      currDate.setDate(currDate.getDate() + 1);
      currDate = currDate.toISOString().slice(0, 10);
    }
    return dates;
  };

  const renderCalendarDay = (day: any) => {
    const style: { [key: string]: any } = {
      backgroundColor: COLORS.primary,
      borderRadius: 5,
      opacity: 0.7,
      borderColor: COLORS.primary,
      borderWidth: 1,
    };
    if (markedDates[day.dateString]) {
      style.opacity = 1;
      if (markedDates[day.dateString].startingDay) {
        style.borderTopLeftRadius = 5;
        style.borderBottomLeftRadius = 5;
      }
      if (markedDates[day.dateString].endingDay) {
        style.borderTopRightRadius = 5;
        style.borderBottomRightRadius = 5;
      }
    }
    return (
      <TouchableOpacity onPress={() => onDayPress(day)}>
        {/* <View style={{ flex: 1 }}> */}
        <Text style={[styles.dateText, style]}>{day.day}</Text>
        {/* </View> */}
      </TouchableOpacity>
    );
  };


  // console.log(startDate, endDate);
  const dateStart = new Date(startDate);
  const dateEnd = new Date(endDate);
  callbackDate(dateStart, dateEnd)
  dispatch(changeDateFilter({
    start: startDate,
    end: endDate
  }))
  const today = moment().format('YYYY-MM-DD');

  const markedDatess = {
    [today]: {
      selected: true,
      marked: true,
      selectedColor: COLORS.primary
    }
  };
  return (
    <View>
      <Calendar
        current={moment().add(1, 'month').startOf('month').format('YYYY-MM-DD')}
        onDayPress={onDayPress}
        markedDates={markedDatess}
        renderDay={renderCalendarDay}
      />
      <TouchableOpacity onPress={() => {
        onPrerss()
      }} style={{ paddingHorizontal: 20, padding: 10, borderRadius: 30, backgroundColor: COLORS.primary, position: 'absolute', bottom: -60, right: 120 }}>
        <Text style={{ color: '#fff' }}>Huỷ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {

      }} style={{ paddingHorizontal: 20, padding: 10, borderRadius: 30, backgroundColor: COLORS.primary, position: 'absolute', bottom: -60, right: 20 }}>
        <Text style={{ color: '#fff' }}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarGlobal;

const styles = StyleSheet.create({
  dateText: {

  }
});



