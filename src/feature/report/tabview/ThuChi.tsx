import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { COLORS } from 'assets/global/colors'
import ModalConfig from 'components/common/ModalConfig'
import LineChartComponent from 'feature/report/tabview/tabs/components/LineChartComponent'
import PieChartCOmponent from '../../../feature/report/tabview/tabs/components/PieChartCOmponent'


interface ParamCustomInterface {
  show: boolean,
  fillterArray: any,
  select: number,
  tab: number
}

const filter = [
  {
    id: 0,
    name: 'Hôm nay',
  },
  {
    id: 1,
    name: 'Tuần này',
  },
  {
    id: 2,
    name: 'Tháng này',
  },
  {
    id: 3,
    name: 'Thời gian khác',
  },
]

const boxPlus1 = {
  borderBottomWidth: 1, borderBottomColor: COLORS.red2, paddingBottom: 13
}
const boxPlus2 = {
  borderBottomWidth: 1, borderBottomColor: COLORS.white1, paddingBottom: 13
}

const ThuChi = () => {
  const tongvay = 0, tongcho = 0;
  const [touch, setTouch] = useState<number>()
  const [paramsCustom, setParamsCustom] = useState<ParamCustomInterface>({
    show: false,
    fillterArray: filter,
    select: 0,
    tab: 0,
  });
  const setParams = useCallback((keyName: string, value: any) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setParams("show", true) }}>
        <Text style={styles.header}>Hôm nay</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ height: 0.7, backgroundColor: COLORS.gray4, marginTop: 15 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => { setParams("tab", 0) }} style={[styles.boxHeader, paramsCustom.tab == 0 ? boxPlus1 : boxPlus2]}>
            <Text>{`Tổng cho vay`}</Text>
            <Text>{`0 đ`}</Text>
          </TouchableOpacity>
          <View style={{ height: 50, width: 0.7, backgroundColor: COLORS.gray4 }} />
          <TouchableOpacity onPress={() => { setParams("tab", 2) }} style={[styles.boxHeader, paramsCustom.tab == 2 ? boxPlus1 : boxPlus2]}>
            <Text>{`Tổng vay`}</Text>
            <Text>{`0 đ`}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginVertical: 20, fontSize: 15, fontWeight: '500' }}>Tổng thu theo tháng</Text>
        <LineChartComponent />
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>Tổng quan phân loại</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, width: '60%', alignSelf: 'center', marginTop: 30 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 15, height: 15, backgroundColor: "#C6D4E4", marginRight: 5 }} />
            <Text>
              Tháng này
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 15, height: 15, backgroundColor: "#EDCDCA", marginRight: 5 }} />
            <Text>
              Tháng trước
            </Text>
          </View>
        </View>
        <PieChartCOmponent />
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Trung bình thu theo ngày</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Số dư tháng này</Text>
        </View>
      </ScrollView>
      <ModalConfig visible={paramsCustom.show} layout={{ height: '25%', width: '80%' }} onOffShow={() => setParams("show", false)}>
        <View style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
          <Text style={{ alignSelf: 'center', fontWeight: '600', marginTop: 20 }}>Lọc theo thời gian</Text>
          {
            paramsCustom.fillterArray.map((item: any) => {

              return (<TouchableOpacity key={item.id} style={styles.SModal} onPress={() => {
                setParams("select", item.id)
                setParams("show", false)
              }}>
                <Text>{item.name}</Text>
                <View style={[styles.SRadius, item.id == paramsCustom.select ? { borderColor: COLORS.primary } : null]}>
                  <View style={[styles.Radius, item.id == paramsCustom.select ? { backgroundColor: COLORS.primary } : null]} />
                </View>
              </TouchableOpacity>)
            })
          }
        </View>
      </ModalConfig>

    </View>
  )
}

export default ThuChi

const styles = StyleSheet.create({
  container: { backgroundColor: '#FEFEFE', height: '97%', borderRadius: 30, padding: 15, marginTop: 10, },
  header: { alignSelf: 'center', fontSize: 18, fontWeight: '600', color: COLORS.gray6 },
  titleText: {
    color: COLORS.gray3,
  },
  boxHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    padding: 10,
  },
  text: {
    color: COLORS.gray3
  },
  textItem: {
    fontSize: 18,
    fontWeight: '600',

  },
  SRadius: { borderWidth: 1, borderRadius: 50, height: 15, width: 15, justifyContent: 'center', alignContent: 'center', padding: 2.5 },
  Radius: { width: 8, height: 8, borderRadius: 50 },
  SModal: { borderBottomWidth: 1, borderBottomColor: COLORS.gray1, paddingBottom: 10, marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }
})