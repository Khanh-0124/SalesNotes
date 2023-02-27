import { useNavigation as _useNavigation } from '@react-navigation/native';
import i18next from 'i18next';

export const useNavigation = _useNavigation;

export { default as styled, useTheme } from 'styled-components/native';

export const Core = {
  baseUrl: 'http://motorshop.ifiplay.com/',
  oneSignalAppId: 'fa6faa58-1654-4a05-b7b4-fa39440034f6',
};

export const GET_PAGE_SIZE_DEFAULT = 10;

export * from '@react-navigation/native';

export const translate = i18next.t.bind(i18next);
