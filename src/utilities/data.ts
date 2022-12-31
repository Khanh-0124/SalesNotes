import {
  FirstTab,
  SecondTab,
  ThirdTab,
} from 'feature/report/tabview/profitandloss/index';

export const dataTabProfitAndLoss = [
  {
    id: 1,
    name: 'Hôm nay',
    isChoose: false,
    tabContent: FirstTab,
  },
  {
    id: 2,
    name: 'Tháng này',
    isChoose: true,
    tabContent: SecondTab,
  },
  {
    id: 3,
    name: 'Tháng trước',
    isChoose: false,
    tabContent: ThirdTab,
  },
];
