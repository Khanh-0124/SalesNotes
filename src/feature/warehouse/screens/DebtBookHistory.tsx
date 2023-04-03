import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import { COLORS } from 'assets/global/colors'

const DebtBookHistory = () => {
  return (
    <View>
      <StatusBar
        backgroundColor="#007AFF"
        barStyle="dark-content"
      />
      <HeaderBase title='Lịch sử chi tiết sổ nợ' isIconLeft={false} />
      <View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.textHeader}>Dư nợ phải trả</Text>
          <Text style={[styles.textHeader, { alignSelf: 'center', color: COLORS.green3, marginVertical: 10 }]}>{`1.200 đ`}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.textHeader}>{`Bạn cho nợ`}</Text>
            <Text style={[styles.textHeader, { color: COLORS.red2, marginVertical: 10 }]}>{`20.000 đ`}</Text>
          </View>
          <View style={{ height: 50, width: 1, backgroundColor: COLORS.gray4 }} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.textHeader}>{`Bạn cho nợ`}</Text>
            <Text style={[styles.textHeader, { color: COLORS.green3, marginVertical: 10 }]}>{`30.000 đ`}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, width: '100%', marginVertical: 15 }}>
          <View style={{ width: '40%' }}>
            <Text>Tất cả</Text>
          </View>
          <Text>Cho nợ</Text>
          <Text>Mượn nợ</Text>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, alignItems: 'center', padding: 15, backgroundColor: COLORS.gray5, borderRadius: 15 }}>
          <View style={{ width: '40%' }}>
            <Text style={{ fontSize: 12 }}>{`01/04/2023`}</Text>
            <Text style={{ fontSize: 17, fontWeight: '600', marginTop: 5 }}>{`Khanh le`}</Text>
          </View>
          <Text style={{ marginRight: 15 }}>{`1.000`}</Text>
          <Text style={{ marginRight: 15 }}>{`1.000`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DebtBookHistory

const styles = StyleSheet.create({
  textHeader: { fontSize: 17, fontWeight: '600' }
})