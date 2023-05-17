import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { COLORS } from 'assets/global/colors';
import ModalConfig from 'components/common/ModalConfig';
import LineChartComponent from './components/LineChartComponent';
import { useSelector } from 'react-redux';
import { formatVND } from 'assets/global/formatMoney';
interface ParamCustomInterface {
  show: boolean;
  select: number;
}

const WarehouseOverview = () => {
  const products: Array<any> = useSelector(
    (state: any) => state.products.listProducts,
  );
  const [touch, setTouch] = useState<number>();
  const [paramsCustom, setParamsCustom] = useState<ParamCustomInterface>({
    show: false,
    select: 0,
  });
  const setParams = useCallback((keyName: string, value: any) => {
    setParamsCustom((state: any) => ({ ...state, [keyName]: value }));
  }, []);
  console.log(products[0]);
  let tongkho = 0, conhang = 0, hethang = 0;
  products.forEach((i: any) => {
    tongkho += parseInt(i.price);
    if(i.remaining == 0) {
      hethang ++;
    }
    else {
      conhang ++;
    }
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setParams('show', true);
        }}></TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={[
              styles.Box,
              touch == 1 ? { borderColor: COLORS.primary } : null,
            ]}
            onPress={() => setTouch(1)}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 15,
                alignItems: 'center',
              }}>
              <Image
                style={{ height: 20, width: 20, marginRight: 10 }}
                source={require('assets/icons/png/ic_warehouse_color.png')}
              />
              <Text style={styles.titleText}>Giá trị kho</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>
              {formatVND(tongkho)} đ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Box,
              touch == 2 ? { borderColor: COLORS.primary } : null,
            ]}
            onPress={() => setTouch(2)}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 15,
                alignItems: 'center',
              }}>
              <Image
                style={{ height: 20, width: 20, marginRight: 10 }}
                source={require('assets/icons/png/ic_boxes_color.png')}
              />
              <Text style={styles.titleText}>Số lượng</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>{products.length}</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <TouchableOpacity
            style={[
              styles.Box,
              touch == 3 ? { borderColor: COLORS.primary } : null,
            ]}
            onPress={() => setTouch(3)}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 15,
                alignItems: 'center',
              }}>
              <Image
                style={{ height: 24, width: 24, marginRight: 10 }}
                source={require('assets/icons/png/ic_shopping_cart.png')}
              />
              <Text style={styles.titleText}>SP còn bán</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>{conhang}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Box,
              touch == 4 ? { borderColor: COLORS.primary } : null,
            ]}
            onPress={() => setTouch(4)}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 15,
                alignItems: 'center',
              }}>
              <Image
                style={{ height: 24, width: 24, marginRight: 10 }}
                source={require('assets/icons/png/ic_remove_from_cart.png')}
              />
              <Text style={styles.titleText}>SP hết hàng</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>{hethang}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontWeight: '600', fontSize: 17, marginTop: 20 }}>
            Tổng quan giá trị kho
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text>Sản phẩm</Text>
            <Text>Giá trị</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>{`1`}</Text>
              <Image
                style={{
                  height: 38,
                  width: 38,
                  marginRight: 10,
                  marginHorizontal: 10,
                }}
                source={require('assets/icons/png/ic_remove_from_cart.png')}
              />
              <View style={{}}>
                <Text style={{ fontWeight: '600' }}>{`Nước tăng lực`}</Text>
                <Text style={{ marginTop: 10 }}>{`JSBBDFK`}</Text>
              </View>
            </View>
            <Text>{`36.000`}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WarehouseOverview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
    height: '93%',
    borderRadius: 30,
    padding: 15,
    marginTop: 10,
  },
  header: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.gray6,
  },
  titleText: {
    color: COLORS.gray3,
  },
  Box: {
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
    width: '47%',
    borderColor: COLORS.white1,
    backgroundColor: '#F6F6F6',
  },
  text: {
    color: COLORS.gray3,
  },
  textItem: {
    fontSize: 18,
    fontWeight: '600',
  },
  SRadius: {
    borderWidth: 1,
    borderRadius: 50,
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 2.5,
  },
  Radius: { width: 8, height: 8, borderRadius: 50 },
  SModal: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray1,
    paddingBottom: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
