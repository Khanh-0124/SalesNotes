import { Text, View, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import React from 'react';
import { COLORS } from 'assets/global/colors';

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('assets/icons/png/ic_support.png')}
          style={styles.iconsp}
        />
        <View style={styles.viewText}>
          <Text style={styles.title}>Bạn cần hỗ trợ?</Text>
          <Text style={styles.text}>
            {`Hướng dẫn giải đáp thắc mắc \nhặc báo cáo sự cố`}
          </Text>
        </View>
      </View>
      <View style={styles.viewChat}>
        <Image
          source={require('assets/icons/png/ic_chat.png')}
          style={{
            height: 16,
            width: 16,
            tintColor: COLORS.white1,
          }}
        />
        <Text style={styles.textChat}>Liên hệ</Text>
      </View>
    </View>
  );
};

export default Contact;

const styles = ScaledSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.white1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
  },
  title: {
    fontSize: '13@s',
    fontWeight: '500',
  },
  iconsp: {
    height: 50,
    width: 50,
  },
  viewText: { marginLeft: 15 },
  text: {
    fontSize: '13@s',
    flexWrap: 'wrap',
    marginTop: 6,
    fontWeight: '300',
  },
  viewChat: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textChat: {
    color: COLORS.white1,
    marginLeft: '6@s',
  },
});
