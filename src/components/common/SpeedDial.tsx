import React from 'react';
import {SpeedDial} from '@rneui/themed';
import {COLORS} from '../../assets/global/colors';

const SpeedDialButton = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <SpeedDial
      isOpen={open}
      icon={{name: 'edit', color: '#fff'}}
      openIcon={{name: 'close', color: '#fff'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      color={COLORS.primary}
      backdropPressableProps={{}}>
      <SpeedDial.Action
        icon={{name: 'add', color: '#fff'}}
        title="Tạo đơn hàng"
        color={COLORS.primary}
        onPress={() => console.log('Add Something')}
      />
      <SpeedDial.Action
        icon={{name: 'delete', color: '#fff'}}
        title="Tạo giao dịch thu chi"
        color={COLORS.primary}
        onPress={() => console.log('Delete Something')}
      />
      <SpeedDial.Action
        icon={{name: 'store', color: '#fff'}}
        title="Tạo sản phẩm"
        color={COLORS.primary}
        onPress={() => console.log('Delete Something')}
      />
    </SpeedDial>
  );
};
export default SpeedDialButton;
