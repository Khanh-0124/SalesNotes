import { useRoute } from '../utilities/global';

export const useNavigationParams = <T>() => {
  return useRoute()?.params as unknown as T;
};

export const useNavigationParam = <T>(name: string, defaultValue: T) => {
  return (useNavigationParams<any>()?.[name] as unknown as T) ?? defaultValue;
};
