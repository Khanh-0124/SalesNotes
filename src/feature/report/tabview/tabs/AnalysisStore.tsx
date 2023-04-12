import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { COLORS } from 'assets/global/colors'
import ModalConfig from 'components/common/ModalConfig'
import LineChartComponent from './components/LineChartComponent'
import { BottomSheet } from '@rneui/themed'
import CalendarComponents from 'components/CalendarComponents'
import CalendarGlobal from 'components/common/CalendarGlobal'
import { filterDateLineChart_X } from 'assets/global/filterDateForLineChart'
import { useDispatch, useSelector } from 'react-redux'
import { addListDate } from '../../../../redux/userSlice'
interface ParamCustomInterface {
  show: boolean,
  fillterArray: any,
  select: number,
  showBottomSheet: boolean,
  labels: any,
  multiData: boolean
}

const filter = [
  {
    id: 2,
    name: 'Tháng này',
  },
  {
    id: 3,
    name: 'Thời gian khác',
  },
]

const AnalysisStore = () => {
  const [touch, setTouch] = useState<number>()
  const dispatch = useDispatch()
  const [paramsCustom, setParamsCustom] = useState<ParamCustomInterface>({
    show: false,
    fillterArray: filter,
    select: 2,
    showBottomSheet: false,
    labels: [],
    multiData: true
  });
  const [show, setShow] = useState(false)
  const setParams = useCallback((keyName: string, value: any) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);
  const callbackDate = (startDate: any, endDate: any) => {
    dispatch(addListDate({
      data: filterDateLineChart_X(startDate, endDate)
    }))
  }
  // console.log(lables)
  useEffect(() => {
    paramsCustom.select == 2 ? setParams("multiData", true) : setParams("multiData", false)
  }, [paramsCustom.select]) 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setShow(true) }}>
        <Text style={styles.header}>{paramsCustom.select == 0 ? 'Hôm nay' : paramsCustom.select == 1 ? "Tuần này" : paramsCustom.select == 2 ? "Tháng này" : "Thời gian khác"}</Text>
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
              <Image style={{ height: 24, width: 24, marginRight: 10 }} source={require('assets/icons/png/ic_box.png')} />
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
              <Image style={{ height: 24, width: 24, marginRight: 10 }} source={require('assets/icons/png/ic_checklist.png')} />
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
              {paramsCustom.select == 3 ? `Thời gian khác` : `Tháng này`}
            </Text>
          </View>
          {
            paramsCustom.select == 3 ? null : <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 15, height: 15, backgroundColor: "#EDCDCA", marginRight: 5 }} />
              <Text>
                Tháng trước
              </Text>
            </View>
          }
        </View>

        <LineChartComponent labels={0} data11={0} data22={0} multiData={paramsCustom.multiData} />
        <View>
          <Text style={{ fontSize: 18, fontWeight: '600', color: COLORS.gray3 }}>{`Sản phẩm bán chạy`}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
            <Text style={styles.text}>{`Theo doanh thu`}</Text>
            <Text style={styles.text}>{`Doanh thu (đ)`}</Text>
          </View>
          {/* map */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.7, borderColor: COLORS.gray4, paddingBottom: 15, marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={[styles.textItem, { fontWeight: '400', fontSize: 15 }]}>{`1`}</Text>
              <Image style={{ height: 38, width: 38, marginHorizontal: 10, }} source={require('assets/icons/png/ic_image.png')} />
              <Text style={styles.textItem}>{`Mỳ gạo`}</Text>
            </View>
            <View>
              <Text style={styles.textItem}>{`250.000`}</Text>
              <Text style={[styles.textItem, { fontSize: 13, color: COLORS.gray6, marginTop: 5 }]}>{`Số lượng: 5`}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomSheet backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onBackdropPress={() => { setShow(false) }} modalProps={{ animationType: 'fade' }} isVisible={show}>
        <View style={{ backgroundColor: '#fff', padding: 15, paddingBottom: paramsCustom.select == 3 ? 120 : 60 }}>
          {
            paramsCustom.fillterArray.map((item: any) => {

              return (<TouchableOpacity key={item.id} style={styles.SModal} onPress={() => {
                setParams("select", item.id)
                // setShow(false)
              }}>
                <Text>{item.name}</Text>
                <View style={[styles.SRadius, item.id == paramsCustom.select ? { borderColor: COLORS.primary } : null]}>
                  <View style={[styles.Radius, item.id == paramsCustom.select ? { backgroundColor: COLORS.primary } : null]} />
                </View>
              </TouchableOpacity>)
            })
          }
          {
            paramsCustom.select == 3 ? <View>
              <CalendarGlobal callbackDate={callbackDate} onPrerss={() => {
                // setParamsCustom("")
                setShow(false)
              }} />
            </View> : null
          }
        </View>
      </BottomSheet>
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