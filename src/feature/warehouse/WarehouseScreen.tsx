import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonBase from 'components/base/buttons/ButtonBase'
import { COLORS } from 'assets/global/colors'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const WarehouseScreen = () => {
  const customers = useSelector((state: any) => state.clients.listClients)
  const navigation = useNavigation<any>()
  return (
    <View style={{ paddingHorizontal: 15, flex: 1, backgroundColor: '#fff', paddingTop: 65 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Tôi phải trả</Text>
          <Text style={[styles.textHeader, { color: COLORS.green2 }]}>{1.200} đ</Text>
        </View>
        <View style={{ height: 50, width: 1, backgroundColor: COLORS.gray1 }} />
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>Tôi phải thu</Text>
          <Text style={[styles.textHeader, { color: COLORS.red2 }]}>{0} đ</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("DebtBookHistory")} style={{ alignSelf: 'center', marginVertical: 20, borderRadius: 15, borderColor: COLORS.gray4, borderWidth: 1, padding: 10, width: '90%', alignItems: 'center' }}>
        <Text style={styles.textHeader}>Lịch sử chi tiết</Text>
      </TouchableOpacity>
      <View>
        <View style={{ width: '100%', backgroundColor: COLORS.gray2, padding: 10 }}>
          <Text style={styles.textHeader}>Danh sách khách hàng</Text>
        </View>
        {
          customers.map((i: any) => (<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CustomerDetail")}>
            <Text style={styles.textHeader}>{i.name}</Text>
            <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
              <Text style={styles.textHeader}>{1000} đ</Text>
              <Text style={{ marginTop: 10 }}>{`Toi phai tra`}</Text>
            </View>
          </TouchableOpacity>))
        }

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: '100%', alignSelf: 'center' }}>
        <ButtonBase title='Tôi đã đưa' onPress={() => { }} />
        <ButtonBase title='Tôi đã nhận' onPress={() => { }} background />
      </View>
    </View >
  )
}

export default WarehouseScreen

const styles = StyleSheet.create({
  boxHeader: { alignItems: 'center', flex: 1, marginVertical: 10 },
  textHeader: { fontSize: 17, fontWeight: '600' },
  button: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: COLORS.gray1, paddingBottom: 13 }
})