import { debounce } from 'lodash';


function searchOrders(keyword: any, orders: any) {
  return orders.filter((order: any) => {
    return order.name.toLowerCase().includes(keyword.toLowerCase()) || order.code.toLowerCase().includes(keyword.toLowerCase());
  });
}
export const debouncedSearchOrders = debounce(searchOrders, 500);