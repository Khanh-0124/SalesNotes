import { COLORS } from 'assets/global/colors';
import React, { Children, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  ViewStyle,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { ScaledSheet } from 'react-native-size-matters';

interface CollapsibleTypeProp {
  title: string;
  Contents: any;
  HeaderContent?: any;
  leftComponents?: boolean;
  number?: string;
  customStyles?: ViewStyle;
  layout?: any
}

const CollapsibleComponents = ({
  title,
  Contents,
  HeaderContent,
  leftComponents = false,
  number = '0',
  customStyles,
  layout
}: CollapsibleTypeProp) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };
  return (
    <SafeAreaView style={layout ? { height: layout } : { flex: 1 }}>
      <View style={customStyles ? customStyles : styles.container}>
        <ScrollView>
          {/*Code for Single Collapsible Start*/}
          <TouchableOpacity onPress={toggleExpanded}>
            {!leftComponents ? (
              <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
                <Image
                  source={require('assets/icons/png/ic_down_arrow.png')}
                  style={[styles.iconDrop]}
                />
                {/*Heading of Single Collapsible*/}
              </View>
            ) : HeaderContent ? (<HeaderContent />) : (
              <View style={styles.wrapperHeader}>
                <Text style={{ fontSize: 15 }}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: COLORS.primary }}>{number}</Text>
                  <Image
                    source={require('assets/icons/png/ic_down_arrow.png')}
                    style={[
                      styles.iconDrop,
                      { tintColor: COLORS.black1, width: 16, height: 16 },
                    ]}
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={collapsed} align="center">
            <View
              style={[
                styles.content,
                customStyles
                  ? { borderTopWidth: 1, borderTopColor: COLORS.gray1 }
                  : { borderTopWidth: 15 },
              ]}>
              <Contents />
            </View>
          </Collapsible>
          {/*Code for Single Collapsible Ends*/}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CollapsibleComponents;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white1,
    marginTop: '15@s',
  },
  header: {
    backgroundColor: COLORS.white1,
    padding: '10@s',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: '16@s',
    fontWeight: '500',
    color: COLORS.primary,
  },
  wrapperHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    borderTopColor: '#F6F6F6',
  },
  iconDrop: {
    height: '20@s',
    width: '20@s',
    tintColor: COLORS.primary,
    marginLeft: '5@s',
  },
});
