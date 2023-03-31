import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { COLORS } from 'assets/global/colors'
import ModalConfig from 'components/common/ModalConfig'
import LineChartComponent from './components/LineChartComponent'
interface ParamCustomInterface {
  show: boolean
}

const AnalysisStore = () => {
  const [touch, setTouch] = useState<number>()
  const [paramsCustom, setParamsCustom] = useState<ParamCustomInterface>({
    show: false
  });
  const setParams = useCallback((keyName: string, value: any) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setParams("show", true) }}>
        <Text style={styles.header}>Hôm nay</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, }}>
          <TouchableOpacity style={[styles.Box, touch == 1 ? { borderColor: COLORS.primary } : null]} onPress={() => setTouch(1)}>
            <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
              <Image style={{ height: 20, width: 20, marginRight: 10 }} source={require('../../../../assets/icons/png/pic_ie_chart.png')} />
              <Text style={styles.titleText}>Doanh thu</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>47.733đ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Box, touch == 2 ? { borderColor: COLORS.primary } : null]} onPress={() => setTouch(2)}>
            <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
              <Image style={{ height: 24, width: 24, marginRight: 10 }} source={require('../../../../assets/icons/png/ic_box.png')} />
              <Text style={styles.titleText}>Đơn hàng</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>25</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
          <TouchableOpacity style={[styles.Box, touch == 3 ? { borderColor: COLORS.primary } : null]} onPress={() => setTouch(3)}>
            <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
              <Image style={{ height: 24, width: 24, marginRight: 10 }} source={require('../../../../assets/icons/png/ic_support.png')} />
              <Text style={styles.titleText}>Khách hàng</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Box, touch == 4 ? { borderColor: COLORS.primary } : null]} onPress={() => setTouch(4)}>
            <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
              <Image style={{ height: 24, width: 24, marginRight: 10 }} source={require('../../../../assets/icons/png/ic_checklist.png')} />
              <Text style={styles.titleText}>Đơn huỷ</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>26</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.gray3, marginVertical: 15 }}>Tổng thu theo tháng</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, width: '60%', alignSelf: 'center' }}>
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

        <LineChartComponent />
      </ScrollView>
      <ModalConfig visible={paramsCustom.show} layout={{ height: '80%', width: '80%' }} onOffShow={() => setParams("show", false)}>
        <View>
          <Text>a</Text>
        </View>
      </ModalConfig>
    </View>
  )
}

export default AnalysisStore

const styles = StyleSheet.create({
  container: { backgroundColor: '#FEFEFE', height: '93%', borderRadius: 30, padding: 15, marginTop: 10, },
  header: { alignSelf: 'center', fontSize: 18, fontWeight: '600', color: COLORS.gray6 },
  titleText: {
    color: COLORS.gray3,
  },
  Box: { padding: 30, borderRadius: 20, borderWidth: 1, width: '47%', borderColor: COLORS.white1, backgroundColor: '#F6F6F6' },

})