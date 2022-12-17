import { COLORS } from 'assets/global/colors';
import React, { Children, useState } from 'react';
import AddInfor from './AddInfor';
// import all the components we are going to use
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Icon } from '@rneui/themed';
import { ScaledSheet } from 'react-native-size-matters';

interface CollapsibleTypeProp {
  title: string;
}

const CollapsibleComponents = ({ title }: CollapsibleTypeProp) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          {/*Code for Single Collapsible Start*/}
          <TouchableOpacity onPress={toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{title}</Text>
              <Image
                source={require('assets/icons/png/ic_down_arrow.png')}
                style={styles.iconDrop}
              />
              {/*Heading of Single Collapsible*/}
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>{<AddInfor />}</View>
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
    backgroundColor: COLORS.white1,
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
  content: {
    borderTopColor: '#F6F6F6',
    borderTopWidth: '15@s',
  },
  iconDrop: {
    height: '20@s',
    width: '20@s',
    tintColor: COLORS.primary,
    marginLeft: '5@s',
  },
});
