import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBase from 'components/base/header/HeaderBase'

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
          <Text style={styles.textHeader}>{`1.200 đ`}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.textHeader}>{`Bạn cho nợ`}</Text>
            <Text style={styles.textHeader}>{`20.000 đ`}</Text>
          </View>
          <View>
            <Text style={styles.textHeader}>{`Bạn cho nợ`}</Text>
            <Text style={styles.textHeader}>{`30.000 đ`}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DebtBookHistory

const styles = StyleSheet.create({
  textHeader: { fontSize: 17, fontWeight: '600' }
})