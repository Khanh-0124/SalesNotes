import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit';
import { COLORS } from 'assets/global/colors';

const data = [
  {
    name: "Chưa phân loại",
    population: 15,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
  },
  {
    name: "Toronto",
    population: 2,
    color: "#F00",
    legendFontColor: "#7F7F7F",
  },

];

const configChart = {
  backgroundColor: '#e26a00',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 0.7) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 0.7) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForLabels: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  legend: {
    enabled: true,
    textSize: 14,
    textColor: '#fff',
    fontFamily: 'Helvetica Neue',
    position: 'bottom',
    form: 'circle',
    formSize: 14,
    xEntrySpace: 10,
    yEntrySpace: 5,
    wordWrapEnabled: true,
    maxWidth: 200
  }
}
const PieChartCOmponent = () => {
  return (
    <View>
      <PieChart
        data={data}
        width={360}
        height={180}
        chartConfig={configChart}
        accessor={"population"}
        avoidFalseZero={true}
        backgroundColor={"transparent"}
        paddingLeft={"90"}
        center={[5, 15]}
        hasLegend={false}
        // absolute
      />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, marginTop: 20 }}>
      {
        data.map((item) => {
          return <View key={item.name} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginLeft: 30 }}>
            <View style={{ backgroundColor: item.color, height: 10, width: 10, marginRight: 10 }} />
            <View style={{}}>
              <Text style={{ color: COLORS.gray6 }}>{item.name}</Text>
              <Text style={{ marginTop: 2 }}>{item.population} đ</Text>
            </View>
          </View>
        })
      }
      </View>
    </View>
  )
}

export default PieChartCOmponent

const styles = StyleSheet.create({})