import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useRef, useState } from 'react';
import HeaderBase from 'components/base/header/HeaderBase';
import { COLORS } from 'assets/global/colors';
import { useSelector } from 'react-redux';

const DebtBookHistory = () => {
  const arrs = useSelector((state: any) => state.clients.bc);
  let sumgive = 0,
    sumtake = 0;
  const result = arrs.reduce((acc: any, cur: any) => {
    const { date, hours, category, give, take } = cur;
    const key = date.split('T')[0];
    const existingItem = acc.find((item: any) => item.date === key);
    if (existingItem) {
      existingItem.give += parseInt(give);
      existingItem.take += parseInt(take);
      const existingHour = existingItem.hourlyData.find(
        (hourly: any) => hourly.hours === hours,
      );
      if (existingHour) {
        existingHour.give += parseInt(give);
        existingHour.take += parseInt(take);
      } else {
        existingItem.hourlyData.push({
          hours,
          category,
          give,
          take,
        });
      }
    } else {
      acc.push({
        date: key,
        give,
        take,
        hourlyData: [
          {
            hours,
            category,
            give,
            take,
          },
        ],
      });
    }

    return acc;
  }, []);
  result.forEach((item: any) => {
    item.balance = item.give - item.take;
    sumgive += item.give;
    sumtake += item.take;
  });
  const [showDetail, setShowDetail] = useState(false);
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <StatusBar backgroundColor="#007AFF" barStyle="dark-content" />
      <HeaderBase title="Báo cáo chi tiết" isIconLeft={false} />
      <View style={{ paddingHorizontal: 15 }}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 12, marginBottom: 10 }}>
            01/04/2023 - 05/04/2023
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              borderRadius: 10,
              borderColor: COLORS.gray1,
              borderWidth: 1,
              padding: 10,
            }}>
            <View>
              <Text style={styles.textcontent}>Tổng thu</Text>
              <Text
                style={[
                  styles.textcontent,
                  { marginTop: 5, fontWeight: '600', color: COLORS.green2 },
                ]}>
                {sumtake} đ
              </Text>
            </View>
            <View>
              <Text>-</Text>
            </View>
            <View>
              <Text style={styles.textcontent}>Tổng chi</Text>
              <Text
                style={[
                  styles.textcontent,
                  { marginTop: 5, fontWeight: '600', color: COLORS.red2 },
                ]}>
                {sumgive} đ
              </Text>
            </View>
            <View>
              <Text>=</Text>
            </View>
            <View>
              <Text style={styles.textcontent}>Tổng số dư</Text>
              <Text
                style={[
                  styles.textcontent,
                  {
                    marginTop: 5,
                    color: sumtake - sumgive < 0 ? COLORS.red2 : COLORS.green2,
                    fontWeight: '600',
                  },
                ]}>
                {sumtake - sumgive < 0
                  ? -1 * (sumtake - sumgive)
                  : sumtake - sumgive}{' '}
                đ
              </Text>
            </View>
          </View>
          {/* select show */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // alignSelf: 'center',
              marginVertical: 15,
            }}>
            <View style={{ padding: 5, flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setShowDetail(!showDetail)}
                style={{
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingVertical: 7,
                  justifyContent: 'center',
                  width: 30,
                  backgroundColor: showDetail ? COLORS.primary : '#fff'
                }}>
                <View
                  style={[
                    {
                      height: 10,
                      width: 10,
                      backgroundColor: !showDetail ? COLORS.primary : '#fff',
                      borderRadius: 10,
                      position: 'absolute',
                    },
                    !showDetail ? { left: 2 } : { right: 2 },
                  ]}
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 13, marginLeft: 8 }}>
                Xem chi tiết
              </Text>
            </View>
          </View>
          {/* header table */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.boxHeader, { backgroundColor: COLORS.gray9 }]}>
              <Text style={styles.textcontent}>Thời gian</Text>
            </View>
            <View style={[styles.boxHeader, { backgroundColor: COLORS.gray9 }]}>
              <Text style={styles.textcontent}>Phân loại</Text>
            </View>
            <View style={[styles.boxHeader, { backgroundColor: COLORS.gray9 }]}>
              <Text style={styles.textcontent}>Tổng thu</Text>
            </View>
            <View style={[styles.boxHeader, { backgroundColor: COLORS.gray9 }]}>
              <Text style={styles.textcontent}>Tổng chi</Text>
            </View>
            <View style={[styles.boxHeader, { backgroundColor: COLORS.gray9 }]}>
              <Text style={styles.textcontent}>Số dư cuối ngày</Text>
            </View>
          </View>
          {/* body  table */}
          <ScrollView style={{ height: '100%' }}>
            {result.map((i: any, index: any) => {
              // (sumgive += i.give), (sumtake += i.take);
              return (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: '#efefef',
                    }}>
                    <View
                      style={[
                        styles.boxHeader2,
                        {
                          justifyContent: 'flex-start',
                          flexDirection: 'column',
                          paddingVertical: 7,
                        },
                      ]}>
                      <Text style={styles.textcontent}>{i.date}</Text>
                      <Text
                        style={{
                          fontSize: 8,
                          marginTop: 3,
                        }}>{`(${i.hourlyData.length} giao dịch)`}</Text>
                    </View>
                    <View style={styles.boxHeader2}>
                      <Text style={styles.textcontent}>{i.category}</Text>
                    </View>
                    <View
                      style={[
                        styles.boxHeader2,
                        {
                          backgroundColor: '#DCE7E3',
                        },
                      ]}>
                      <Text style={[styles.textcontent]}>{i.take} đ</Text>
                    </View>
                    <View
                      style={[
                        styles.boxHeader2,
                        {
                          backgroundColor: '#E8E0DE',
                        },
                      ]}>
                      <Text style={styles.textcontent}>{i.give} đ</Text>
                    </View>
                    <View style={styles.boxHeader2}>
                      <Text
                        style={[
                          styles.textcontent,
                          {
                            color: i.balance > 0 ? COLORS.red2 : COLORS.green2,
                          },
                        ]}>
                        {i.balance < 0 ? i.balance * -1 : i.balance} đ
                      </Text>
                    </View>
                  </View>
                  {showDetail
                    ? i.hourlyData.map((i: any, index: any) => {
                        return (
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              backgroundColor: i.timeDate
                                ? '#efefef'
                                : undefined,
                            }}>
                            <View
                              style={[
                                styles.boxHeader2,
                                { justifyContent: 'flex-start' },
                              ]}>
                              <Text style={styles.textcontent}>{i.hours}</Text>
                            </View>
                            <View style={styles.boxHeader2}>
                              <Text style={styles.textcontent}>
                                {i.category}
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.boxHeader2,
                                {
                                  backgroundColor: i.timeDate
                                    ? '#DFF2EE'
                                    : COLORS.green4,
                                },
                              ]}>
                              <Text style={[styles.textcontent]}>
                                {i.take} đ
                              </Text>
                            </View>
                            <View
                              style={[
                                styles.boxHeader2,
                                {
                                  backgroundColor: i.timeDate
                                    ? '#F2E7E3'
                                    : COLORS.red3,
                                },
                              ]}>
                              <Text style={styles.textcontent}>{i.give} đ</Text>
                            </View>
                            <View style={styles.boxHeader2}>
                              <Text
                                style={[
                                  styles.textcontent,
                                  {
                                    color:
                                      i.balance > 0
                                        ? COLORS.red2
                                        : COLORS.green2,
                                  },
                                ]}>
                                {i.balance < 0 ? i.balance * -1 : i.balance} đ
                              </Text>
                            </View>
                          </View>
                        );
                      })
                    : null}
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DebtBookHistory;

const styles = StyleSheet.create({
  textHeader: { fontSize: 17, fontWeight: '600' },
  boxHeader: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 3,
    flex: 1,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  boxHeader2: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    flex: 1,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  textcontent: {
    textAlign: 'center',
    fontSize: 11,
  },
});
