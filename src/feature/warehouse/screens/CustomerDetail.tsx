import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderBase from 'components/base/header/HeaderBase'
import { COLORS } from 'assets/global/colors'
import ButtonBase from 'components/base/buttons/ButtonBase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BottomSheet } from '@rneui/themed'

const CustomerDetail = () => {
  const [showBottom, setShowBottom] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderBase title='name' isIconLeft={false} />
      <View style={{ padding: 15 }}>
        <Text style={{ fontWeight: '600', fontSize: 15 }}>Thanh toán hết</Text>
        <Text style={{ color: COLORS.red2, fontWeight: '600', marginVertical: 10 }}>{`0 đ`}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>{`10 giao dịch`}</Text>
          <View style={{ width: '80%', justifyContent: 'flex-end', flexDirection: 'row' }}>
            <Text style={{ marginRight: 30 }}>{`Tôi đã đưa`}</Text>
            <Text>{`Tôi đã nhận`}</Text>
          </View>
        </View>
        {/*  map */}
        <TouchableOpacity onPress={() => setShowBottom(true)} style={styles.BoxItem}>
          <View style={{ width: '30%' }}>
            <Text style={{ fontSize: 11 }}>{`15/4/2023`}</Text>
            <Text style={{ marginTop: 5, fontSize: 15 }}>{'Thanh toán'}</Text>
          </View>
          <View style={{ width: '72%', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 30 }}>{`Tôi đã đưa`}</Text>
            <Text>{`Tôi đã nhận`}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 0, width: '100%', alignSelf: 'center', padding: 15 }}>
        <ButtonBase title='Tôi đã đưa' onPress={() => { }} />
        <ButtonBase title='Tôi đã nhận' onPress={() => { }} background />
      </View>
      <BottomSheet backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onBackdropPress={() => { setShowBottom(false) }} modalProps={{ animationType: 'fade' }} isVisible={showBottom}>
        <View style={{ backgroundColor: '#fff', height: 200, padding: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity>
              <Text style={{ fontWeight: '600', color: COLORS.red2 }}>Xoá</Text>
            </TouchableOpacity>
            <Text>Chi tiết giao dịch</Text>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  )
}

export default CustomerDetail

const styles = StyleSheet.create({
  BoxItem: {
    flexDirection: 'row', backgroundColor: '#fff', padding: 10, borderRadius: 10, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,

    elevation: 4,
    marginVertical: 10
  }
})