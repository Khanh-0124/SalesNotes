import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from 'assets/global/colors';
import {
  LineChart,
} from "react-native-chart-kit";
import { useDispatch, useSelector } from 'react-redux';
import { dataY, filterDateLineChart_X, filterDateLineChart_Y } from 'assets/global/filterDateForLineChart';
import { listOrdersByDate } from '../../../../../redux/userSlice';


const LineChartComponent = ({ labels, data11, data22, multiData }: any) => {
  const dispatch = useDispatch()
  const start = useSelector((state: any) => state.user.start)
  const end = useSelector((state: any) => state.user.end)
  function getDates(startDate: any, endDate: any) {
    const dates = [];
    let currentDate = new Date(startDate);
    endDate = new Date(endDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }
  // data month here
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Tháng bắt đầu từ 0, cộng thêm 1 để đổi sang tháng dương lịch
  const daysInMonth = new Date(year, month, 0).getDate(); // Lấy số ngày trong tháng hiện tại

  const hereMonth = [];

  for (let day = 1; day <= daysInMonth; day++) {
    hereMonth.push(`${day}/${month}`);
  }

  // console.log(hereMonth);

  // lastmonth
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  const daysInMonth2 = lastDayOfMonth.getDate();

  const lastMonth = [];

  for (let day = 1; day <= daysInMonth2; day++) {
    lastMonth.push(`${day}/${firstDayOfMonth.getMonth() + 1}`);
  }

  // console.log(lastMonth, 'a');



  // dates.map((i: any) => console.log(i.getDate()))
  let dates = getDates(start, end)
  // console.log(dates, "rs")
  let a: any = [];
  dates.map((element: any) =>
    a.push(`${element.getDate()}/${element.getMonth()}`)
  )
  // console.log(a, "s");
  const lables = useSelector((state: any) => state.user.listDate)
  const listOrders = useSelector((state: any) => state.orders.listOrders)
  const prices = dataY(listOrders, a);
  dispatch(listOrdersByDate({
    data: listOrders
  }))
  // month here
  const prices1_1 = dataY(listOrders, lastMonth);
  const prices1_2 = dataY(listOrders, hereMonth);
  // console.log(prices2)
  // console.log(dataaa)
  let data2 = prices;
  let data1_1 = prices1_1
  let data1_2 = prices1_2
  let datasets1 = [
    {
      data: data1_1 || [1, 2, 3, 10, 100],
      color: (opacity = 1) => `rgba(174,33,18 ,${opacity})`,
      // strokeWidth: 3,
      strokeDashArray: [10, 4],
    },
    {
      data: data1_2 || [1, 2, 3, 10, 100],
      // color: (opacity = 1) => `rgba(3,4,94, ${opacity})`,
    },
  ]
  let datasets2 = [
    {
      data: data2 || [1, 2, 3, 10, 300],
      // color: (opacity = 1) => `rgba(3,4,94, ${opacity})`,
    },
  ]
  const todayy = new Date();
  const firstDayOfMonthh = new Date(todayy.getFullYear(), todayy.getMonth() + 1, 1);
  const today2 = new Date();
  const lastDayOfMonth2 = new Date(today2.getFullYear(), today2.getMonth() + 2, 0);

  return (
    <View style={{}}>
      <View>
        <LineChart
          data={{
            labels: multiData ? filterDateLineChart_X(firstDayOfMonthh, lastDayOfMonth2) : lables.length > 0 ? lables : ['10/4', '12/4', '11/4', '13/4'],
            datasets: multiData ? datasets1 : datasets2
          }}
          width={400} // from react-native
          height={300}
          yAxisLabel=""
          yAxisSuffix=" đ"
          verticalLabelRotation={30}
          fromZero={true}
          yAxisInterval={1} // optional, defaults to 1

          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: COLORS.white1,
            backgroundGradientTo: COLORS.white1,
            useShadowColorFromDataset: true,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(2,62,138,${opacity})`,
            labelColor: (opacity = 1) => `rgba(10,9,8, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "2",
              strokeWidth: "1",
              stroke: "#ffa726"
            }
          }}
          bezier={true}
          style={{
            marginVertical: 10,
            borderRadius: 5
          }}
        />
      </View>
    </View>
  )
}

export default LineChartComponent

const styles = StyleSheet.create({})