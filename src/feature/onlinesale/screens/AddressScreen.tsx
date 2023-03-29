import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderWithMultiIcon from 'components/common/HeaderWithMultiIcon'
import AddComponent from '../components/AddComponent'
import ModalConfig from 'components/common/ModalConfig'
import { COLORS } from 'assets/global/colors'
import ButtonBase from 'components/base/buttons/ButtonBase'
import { province, district, ward } from '../components/Address'
import axios from 'axios'

const AddressScreen = () => {
  const [datatinh, setdataTinh] = useState([]);
  const [datahuyen, setdataHuyen] = useState([]);
  const [dataxa, setdataXax] = useState([]);
  const [tinh, setTinh] = useState("");
  const [huyen, setHuyen] = useState("");
  const [xa, setXa] = useState("");
  const [detail, setDetail] = useState('');
  const [show, setShow] = useState(false)
  const [select, setSelect] = useState(0)
  const [codetinh, setcodetinh] = useState(0)
  const [codehuyen, setcodehuyen] = useState(0)
  useEffect(() => {
    province().then((res) => setdataTinh(res?.data))
    const fetchDataTinh = async () => {
      const response = await axios.get(`https://provinces.open-api.vn/api/p/${codetinh}?depth=2`);
      setdataHuyen(response?.data.districts)
    }
    fetchDataTinh();

    const fetchDataHuyen = async () => {
      const response = await axios.get(`https://provinces.open-api.vn/api/d/${codehuyen}?depth=2`);
      setdataXax(response?.data.wards)
    }
    fetchDataHuyen();
  }, [codetinh, codehuyen]);
  console.log("huyen", dataxa)
  return (
    <View style={{ flex: 1, }}>
      <HeaderWithMultiIcon title='Thêm địa chỉ' />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 200, flexWrap: 'wrap' }}>
        <TouchableOpacity style={styles.add} onPress={() => {
          setShow(true)
          setSelect(1)
        }}>
          <Text style={{ fontSize: 18 }}>{tinh || 'Tỉnh'} / </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.add} onPress={() => {
          setShow(true)
          setSelect(2)
        }}>
          <Text style={{ fontSize: 18 }}>{huyen || 'Huyện'} / </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.add} onPress={() => {
          setShow(true)
          setSelect(3)
        }}>
          <Text style={{ fontSize: 18 }}>{xa || 'Xã'} </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: 'center', marginTop: 20 }}>
        <TextInput placeholder='Thêm địa chỉ cụ thể' style={{ fontSize: 18, borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 15, width: 300 }} value={detail} onChangeText={(text) => setDetail(text)} />
      </View>
      <View style={{ alignSelf: 'center', marginTop: 20 }}>
        <ButtonBase title='Done' background onPress={() => { }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
      </View>

      <ModalConfig visible={show} layout={{}} onOffShow={() => setShow(false)}>
        {
          select == 1 ? (<View style={{}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {
                datatinh.map((item: any) => <TouchableOpacity style={{ paddingVertical: 5 }} onPress={() => {
                  if (select == 1) {
                    setTinh(item.name)
                    setcodetinh(item.code)
                    setShow(false)
                  }
                }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>)
              }
            </ScrollView>

          </View>) : select == 2 ? (<View style={{}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {
                datahuyen.length > 0 ? datahuyen.map((item: any) => <TouchableOpacity style={{ paddingVertical: 5 }} onPress={() => {
                  if (select == 2) {
                    setHuyen(item.name)
                    setcodehuyen(item.code)
                    setShow(false)
                  }
                }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>) : null
              }
            </ScrollView>

          </View>) : (<View style={{}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {
                dataxa.length > 0 ? dataxa.map((item: any) => <TouchableOpacity style={{ paddingVertical: 5 }} onPress={() => {
                  if (select == 3) {
                    setShow(false)
                    setXa(item.name)
                  }
                }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>) : null
              }
            </ScrollView>

          </View>)
        }
      </ModalConfig>
    </View>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
  add: {

  }
})