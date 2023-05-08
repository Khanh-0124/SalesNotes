import React, { useCallback } from 'react';
import { SpeedDial } from '@rneui/themed';
import { COLORS } from 'assets/global/colors';
import { useNavigation } from '@react-navigation/native';

const SpeedDialButton = () => {
  const navigation = useNavigation();
  const [open, setOpen] = React.useState(false);

  const handleCreateOrder = useCallback(() => {
    navigation.navigate('CreateOrderScreen');
    setOpen(false);
  }, []);

  const navigateCreateProduct = useCallback(() => {
    navigation.navigate('CreateProduct');
  }, []);

  return (
    <SpeedDial
      isOpen={open}
      icon={{ name: 'edit', color: '#fff' }}
      openIcon={{ name: 'close', color: '#fff' }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      color={COLORS.primary}
      backdropPressableProps={{}}>
      <SpeedDial.Action
        icon={{ name: 'add', color: '#fff' }}
        title="Tạo đơn hàng"
        color={COLORS.primary}
        onPress={handleCreateOrder}
      />
      <SpeedDial.Action
        icon={{ name: 'edit', color: '#fff' }}
        title="Tạo giao dịch sổ nợ"
        color={COLORS.primary}
        onPress={() => {
          console.log('Delete Something');
          setOpen(false);
        }}
      />
      <SpeedDial.Action
        icon={{ name: 'store', color: '#fff' }}
        title="Tạo sản phẩm"
        color={COLORS.primary}
        onPress={() => {
          navigateCreateProduct();
          setOpen(false);
        }}
      />
    </SpeedDial>
  );
};
export default SpeedDialButton;
