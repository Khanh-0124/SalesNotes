import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import { Calendar, DateObject } from 'react-native-calendars';
import { cancelFilter, changeDateFilter } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { setSateFilter } from '../redux/orderSlice';

type MarkedDatesProps = {
  [date: string]: { startingDay?: boolean; endingDay?: boolean; color?: string; textColor?: string };
};

const CalendarComponents = () => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({});

  const onDayPress = (day: DateObject) => {
    if (startDate === '') {
      setStartDate(day.dateString);
      setMarkedDates({
        ...markedDates,
        [day.dateString]: { startingDay: true, color: '#00B0FF' },
      });
    } else if (endDate === '') {
      const range = getRangeOfDates(startDate, day.dateString);
      let newMarkedDates = { ...markedDates };
      range.forEach((date) => {
        newMarkedDates[date] = { color: '#00B0FF' };
      });
      setEndDate(day.dateString);
      setMarkedDates(newMarkedDates);
    } else {
      setStartDate(day.dateString);
      setEndDate('');
      setMarkedDates({
        [day.dateString]: { startingDay: true, color: '#00B0FF' },
      });
    }
  };

  const getRangeOfDates = (startDate: string, endDate: string) => {
    let dates = [];
    let currDate = startDate;
    while (currDate <= endDate) {
      dates = [...dates, currDate];
      currDate = new Date(currDate);
      currDate.setDate(currDate.getDate() + 1);
      currDate = currDate.toISOString().slice(0, 10);
    }
    return dates;
  };

  const renderCalendarDay = (day: DateObject) => {
    let style = {};
    if (markedDates[day.dateString]) {
      style = {
        backgroundColor: '#00B0FF',
        borderRadius: 5,
        opacity: 0.6,
      };
      if (markedDates[day.dateString].startingDay) {
        style.borderTopLeftRadius = 5;
        style.borderBottomLeftRadius = 5;
      }
      if (markedDates[day.dateString].endingDay) {
        style.borderTopRightRadius = 5; // Add this line
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

  // console.log(dateStart)

  return (
    <View>
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        renderDay={renderCalendarDay}
      />
      <TouchableOpacity onPress={() => {
        dispatch(cancelFilter({
          start: "",
          end: ""
        }))
        dispatch(setSateFilter({ state: false }))
      }} style={{ paddingHorizontal: 20, padding: 10, borderRadius: 30, backgroundColor: COLORS.primary, position: 'absolute', bottom: -60, right: 120 }}>
        <Text style={{ color: '#fff' }}>Huỷ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        dispatch(changeDateFilter(
          {
            start: {
              dayStart: dateStart.getDate(),
              monthStart: dateStart.getMonth() + 1,
              yearStart: dateStart.getFullYear()
            },
            end: {
              dayEnd: dateEnd.getDate(),
              monthEnd: dateEnd.getMonth() + 1,
              yearEnd: dateEnd.getFullYear()
            }
          }
        ))
        dispatch(setSateFilter({ state: false }))

      }} style={{ paddingHorizontal: 20, padding: 10, borderRadius: 30, backgroundColor: COLORS.primary, position: 'absolute', bottom: -60, right: 20 }}>
        <Text style={{ color: '#fff' }}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarComponents;

const styles = StyleSheet.create({
  dateText: {

  }
});



