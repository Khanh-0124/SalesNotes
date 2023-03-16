import React, {useState} from 'react';

import {
  Modal,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const ModalConfig = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>
        <Button
          title="Click To Open Modal"
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});

export default ModalConfig;