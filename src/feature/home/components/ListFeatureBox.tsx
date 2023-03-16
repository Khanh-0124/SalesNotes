import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useCallback } from 'react';
import { dataBox } from 'assets/global/data';
import { HEIGHT, WIDTH } from 'assets/global/layout';
import { COLORS } from 'assets/global/colors';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { navigateToOrderTrackingScreen } from 'utilities/navigation';

type NavigationType = {
  navigate(value: string) : void
}

const ListFeatureBox = () => {
  const navigation = useNavigation<NavigationType>();
  const handleSubmit = useCallback((id: number) => {
    if (id === 1) {
      navigation.navigate('CreateOrderScreen');
    } else if (id === 2) {
      navigateToOrderTrackingScreen();
    } else if (id === 3) {
      navigation.navigate('ManagerProducts');
    }
  }, []);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginTop: 15,
      }}>
      {dataBox.map(item => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={item.id}
          onPress={() => handleSubmit(item.id)}
          style={[styles.viewBox]}>
          {item.amount !== 0 ? (
            <View style={styles.iconNotify}>
              <Text style={styles.amountText}>{item.amount}</Text>
            </View>
          ) : null}
          <Image
            source={item.icon}
            style={{
              width: 32,
              height: 32,
              alignSelf: 'center',
            }}
          />

          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListFeatureBox;

const styles = ScaledSheet.create({
  viewBox: {
    width: '23%',
    height: 90,
    backgroundColor: COLORS.white1,
    padding: 10,
    marginHorizontal: '1%',
    marginBottom: '2%',
    borderRadius: '8@s',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    fontSize: '12@s',
    textAlign: 'center',
  },
  iconNotify: {
    backgroundColor: COLORS.red1,
    borderRadius: 100,
    width: 24,
    height: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    left: '75%',
    top: '8%',
    zIndex: 1,
    position: 'absolute',
  },
  amountText: {
    color: COLORS.white1,
    fontSize: '12@s',
    fontWeight: 'bold',
  },
});
