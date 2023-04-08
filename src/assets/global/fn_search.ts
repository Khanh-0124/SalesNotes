import { debounce } from 'lodash';


function searchOrders(keyword: any, orders: any) {
  return orders.filter((order: any) => {
    return order.name.toLowerCase().includes(keyword.toLowerCase()) || order.code.toLowerCase().includes(keyword.toLowerCase());
  });
}
export const debouncedSearchOrders = debounce(searchOrders, 500);


function searchCustomers(keyword: any, Customers: any) {
  return Customers.filter((Customer: any) => {
    return Customer.name.toLowerCase().includes(keyword.toLowerCase()) || Customer.phone.toLowerCase().includes(keyword.toLowerCase());
  });
}
export const debouncedSearchCustomers = debounce(searchCustomers, 500);