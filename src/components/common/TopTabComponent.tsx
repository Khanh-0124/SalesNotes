import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { ReactElement } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';

interface TopTabType {
  firstScreen: any;
  secondScreen: any;
}

const TopTabComponent = ({ firstScreen, secondScreen }: TopTabType) => {
  const renderScene = SceneMap({
    first: firstScreen,
    second: secondScreen,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default TopTabComponent;

const styles = StyleSheet.create({});
