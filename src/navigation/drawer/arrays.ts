import { Icons } from './Icons';
import DrawerScreen from './DrawerScreen';
import BottomTabScenes from 'navigation/scene/client/BottomTabScenes';
import { colors } from './constant';

export const ScreensArray = [
  {
    route: 'BottomTabScenes',
    label: 'Trang chủ',
    type: Icons.Feather,
    icon: 'home',
    component: BottomTabScenes,
    notification: 12,
  },
  {
    route: 'Inbox',
    label: 'Tích điểm đổi quà',
    type: Icons.Feather,
    icon: 'inbox',
    component: DrawerScreen,
    notification: 9,
  },
  {
    route: 'Calendar',
    label: 'Cài đặt cửa hàng',
    type: Icons.Feather,
    icon: 'calendar',
    component: DrawerScreen,
    notification: 4,
  },
  {
    route: 'Documents',
    label: 'Liên kết ngân hàng',
    type: Icons.Feather,
    icon: 'layers',
    component: DrawerScreen,
    notification: 0,
  },
];

export const ProjectsArray = [
  {
    title: 'Đánh giá ứng dụng',
    icon: 'profile',
    color: colors.icon1,
    iconType: Icons.AntDesign,
  },
  {
    title: 'Hướng dẫn dùng app',
    icon: 'profile',
    color: colors.icon2,
    iconType: Icons.AntDesign,
  },
  {
    title: 'Mẹo bán chuyên nghiệp',
    icon: 'profile',
    color: colors.icon3,
    iconType: Icons.AntDesign,
  },
  {
    title: 'Hỗ trợ',
    icon: 'plus',
    color: colors.icon4,
    iconType: Icons.AntDesign,
  },
];

export const ProfileMenu = [
  // { label: 'History', icon: 'history', iconType: Icons.MaterialIcons },
  // { label: 'Rate', icon: 'star', iconType: Icons.MaterialIcons },
  {
    label: 'Cài đặt tài khoản',
    icon: 'settings',
    iconType: Icons.MaterialIcons,
  },
  { label: 'Đăng xuất', icon: 'logout', iconType: Icons.MaterialIcons },
];
