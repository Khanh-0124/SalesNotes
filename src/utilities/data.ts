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

export const listRevenue = [
  {
    id: 1,
    name: 'Tổng giá bán',
    sum: '40.000',
  },
  {
    id: 2,
    name: 'Thu phí vận chuyển',
    sum: '0',
  },
  {
    id: 3,
    name: 'Khuyến mãi',
    sum: '0',
  },
  {
    id: 4,
    name: 'Triết khấu',
    sum: '0',
  },
  {
    id: 1,
    name: 'Trả hàng',
    sum: '0',
  },
  {
    id: 1,
    name: 'Bán tài sản',
    sum: '0',
  },
];

export const listCost = [
  {
    id: 1,
    name: 'Mặt bằng, thuê nhà',
    sum: '0',
    image: require('../assets/photos/img_slide1.png'),
  },
];

export const listCategoryCreateOrder = [
  {
    id: 1,
    name: 'Phân loại 1',
    code: 'Sp0006-1',
  },
];
export const listProducts = [
  {
    id: 0,
    name: 'Nước tăng lực',
    price: '10.000',
    remaining: `còn: ${7}`,
    image: {
      uri: 'https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg',
    },
  },
  {
    id: 1,
    name: 'Nước tăng lực',
    price: '10.000',
    remaining: `còn: ${7}`,
    image: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZComr8W3d5CsxRMv7qg_PEZ9j_LMwlkG3w&usqp=CAU',
    },
  },
  {
    id: 2,
    name: 'Nước tăng lực',
    price: '10.000',
    remaining: `còn: ${7}`,
    image: {
      uri: 'https://ohay.vn/blog/wp-content/uploads/2020/11/1-goi-mi-tom-hao-hao-bao-nhieu-calo-1.png',
    },
  },
  {
    id: 3,
    name: 'Nước tăng lực',
    price: '10.000',
    remaining: `còn: ${7}`,
    image: {
      uri: 'https://cdn.tgdd.vn/Files/2020/04/23/1251212/top-xx-thuong-hieu-pho-an-lien-duoc-ua-chuon-nhat--12-760x367.jpg',
    },
  },
  {
    id: 4,
    name: 'Nước tăng lực',
    price: '10.000',
    remaining: `còn: ${7}`,
    image: {
      uri: 'https://cdn.tgdd.vn/Files/2021/07/21/1369788/luong-calo-trong-1-goi-bim-bim-goi-snack-la-bao-nhieu-an-nhieu-co-tot-khong-202201180856596052.jpg',
    },
  },
  {
    id: 5,
    name: '+ Thêm sản phẩm',
    // price: '10.000',
    // remaining: 7,
    // image: require('../assets/photos/img_slide1.png'),
  },
];

export const dataOrder = [
  {
    id: 1,
    name: 'Khách lẻ',
    hours: '02:09 19/12',
    code: 'BSXQJA',
    delivered: true,
    sum: 0,
    paid: true,
  },
  {
    id: 2,
    name: 'Khách lẻ',
    hours: '02:09 19/12',
    delivered: true,
    code: 'BSXQJA',
    sum: 0,
    paid: true,
  },
  {
    id: 3,
    name: 'Khách lẻ',
    hours: '02:09 19/12',
    code: 'BSXQJA',
    delivered: true,
    sum: 0,
    paid: true,
  },
];