import {
  StyleSheet,
  Text,
  Image,
  StatusBar,
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import SpeedDialButton from 'components/common/SpeedDial';
import HeaderHome from 'components/base/header/HeaderHome';
import { COLORS } from 'assets/global/colors';
import {
  ListStatis,
  ListFeatureBox,
  OrderComponent,
  Contact,
} from './components/index';
import SlideBoxImage from 'components/common/SlideBoxImage';
import StatusBarComponent from 'components/base/StatusBar';
import { useSelector } from 'react-redux';
import ModalConfig from 'components/common/ModalConfig';

const HomeScreen = () => {
  const OutofStockWarning = useSelector((state: any) => state.notifys.OutofStockWarning)
  const [showWarning, setShowWarning] = useState(true)
  console.log(OutofStockWarning.length)
  return (
    <View style={styles.container}>
      <StatusBarComponent
        bgColor={COLORS.primary}
        colorContent={'light-content'}
      />
      {
        OutofStockWarning.length > 0 ? <ModalConfig onOffShow={() => setShowWarning(false)} visible={showWarning} layout={{ height: 150, width: 320 }}>
          <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
            <View style={styles.boxWarning}>
              <Image source={require('assets/icons/png/ic_warning.png')} style={styles.SImage} />
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{`Cảnh báo sản phẩm`}</Text>
            </View>
            <View style={styles.warningContent}>
              <Text>{`Bổ sung các sản phẩm sắp hết: `}</Text>
              {
                OutofStockWarning.map((product: any) => <Text style={{ color: COLORS.primary }}>
                  {product.name}
                </Text>)
              }
            </View>
            <TouchableOpacity onPress={() => setShowWarning(false)} style={styles.submit}>
              <Text style={{ color: '#fff' }}>OK</Text>
            </TouchableOpacity>
          </View>
        </ModalConfig> : null
      }

      {/* <View style={{ height: 35, width: '100%', backgroundColor: COLORS.primary }} /> */}
      <HeaderHome />
      <ScrollView>
        <ListStatis />
        <ListFeatureBox />
        <SlideBoxImage />
        <OrderComponent />
        <Contact />
      </ScrollView>
      {/* <View style={{ height: 200, backgroundColor: 'pink' }} /> */}
      <SpeedDialButton />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray2,
  },
  boxWarning: { flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 0 },
  SImage: { height: 30, width: 30, marginRight: 10 },
  warningContent: { marginTop: 45, flexDirection: 'row', flexWrap: 'wrap' },
  submit: { padding: 7, paddingHorizontal: 30, borderRadius: 10, right: 5, position: 'absolute', bottom: 3, backgroundColor: COLORS.primary }
});
