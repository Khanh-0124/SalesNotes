import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from 'assets/global/colors';
import {
  LineChart,
} from "react-native-chart-kit";

let data1 = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100
];

let data2 = [
  Math.random() * 130,
  Math.random() * 200,
  Math.random() * 100,
  Math.random() * 200,
  Math.random() * 200,
  Math.random() * 70
]

const LineChartComponent = () => {
  return (
    <View style={{}}>
      <View>
        <LineChart
          data={{
            labels: ["01/03", "08/03", "15/03", "22/03", "29/03"],
            datasets: [
              {
                data: data1,
                color: (opacity = 1) => `rgba(174,33,18 ,${opacity})`,
                // strokeWidth: 3,
                strokeDashArray: [10, 4],
              },
              {
                data: data2,
                // color: (opacity = 1) => `rgba(3,4,94, ${opacity})`,
              },
            ]
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
              r: "3",
              strokeWidth: "2",
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