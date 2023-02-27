import React, {useState} from 'react';
import {View, StyleProp, Text, StyleSheet} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';
import {normalize, WIDTH} from '../../assets/global/layout';

type CheckboxComponentProps = {
  title: string;
  onPress: () => void;
  check: boolean;
};

const CheckboxComponent: React.FunctionComponent<CheckboxComponentProps> = ({
  title,
  onPress,
  check = false,
}) => {
  // const [check1, setCheck1] = useState(false);
  // const [check2+, setCheck2] = useState(false);
  // const [check3, setCheck3] = useState(false);
  // const [check4, setCheck4] = useState(false);
  return (
    <>
      <View style={styles.check}>
        <CheckBox checked={check} size={WIDTH * 0.05} onPress={onPress} />
        <Text style={styles.rememberText}>{title}</Text>
      </View>
      {/* <CheckBox
        center
        title="Click Here"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />

      <CheckBox
        center
        title={`Click Here to ${check3 ? 'Remove' : 'Add'} This Item`}
        iconRight
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />

      <CheckBox
        center
        checkedIcon={
          <Icon
            name="radio-button-checked"
            type="material"
            color="green"
            size={25}
            iconStyle={{marginRight: 10}}
          />
        }
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color="grey"
            size={25}
            iconStyle={{marginRight: 10}}
          />
        }
        checked={check4}
        onPress={() => setCheck4(!check4)}
      /> */}
    </>
  );
};

export default CheckboxComponent;

const styles = StyleSheet.create({
  check: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: normalize(16),
    color: 'black',
    position: 'absolute',
    right: WIDTH > 390 ? WIDTH * -0.27 : WIDTH * -0.25,
  },
});
