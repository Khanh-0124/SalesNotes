import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from 'assets/global/colors'

const TodayStore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hôm nay</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        <View style={styles.Box}>
          <Text style={styles.titleText}>Doanh thu</Text>
          <Text>472734843 d</Text>
        </View>
        <View style={styles.Box}>
          <Text style={styles.titleText}>Đơn hàng</Text>
          <Text>472734843 d</Text>
        </View>
      </View>
      {/*  */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        <View style={styles.Box}>
          <Text style={styles.titleText}>Doanh thu</Text>
          <Text>472734843 d</Text>
        </View>
        <View style={styles.Box}>
          <Text style={styles.titleText}>Đơn hàng</Text>
          <Text>472734843 d</Text>
        </View>
      </View>
    </View>
  )
}

export default TodayStore

const styles = StyleSheet.create({
  container: { backgroundColor: '#FEFEFE', height: '100%', borderRadius: 30, padding: 15, marginTop: 10, },
  header: { alignSelf: 'center', fontSize: 18, fontWeight: '600', color: COLORS.gray6 },
  titleText: {
    color: COLORS.gray3,
    marginBottom: 20
  },
  Box: { padding: 30, borderRadius: 20, borderWidth: 1, borderColor: COLORS.gray1, width: '47%' }
})