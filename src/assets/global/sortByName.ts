export function sortByProductNameAZ(products: any) {
  // Sử dụng thuật toán sắp xếp nhanh để sắp xếp mảng sản phẩm theo tên sản phẩm
  const quickSort = (arr: any, left: number, right: number) => {
    if (left < right) {
      const pivotIndex = Math.floor((left + right) / 2);
      const pivotValue = arr[pivotIndex].name;
      let i = left;
      let j = right;
      while (i <= j) {
        while (arr[i].name < pivotValue) {
          i++;
        }
        while (arr[j].name > pivotValue) {
          j--;
        }
        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
        }
      }
      quickSort(arr, left, j);
      quickSort(arr, i, right);
    }
    return arr;
  };

  return quickSort([...products], 0, products.length - 1);
}


export function sortByProductNameZA(products: any) {
  const quickSort = (arr: any, left: number, right: number) => {
    if (left < right) {
      const pivotIndex = Math.floor((left + right) / 2);
      const pivotValue = arr[pivotIndex].name;
      let i = left;
      let j = right;
      while (i <= j) {
        while (arr[i].name > pivotValue) { // Đổi dấu lớn hơn thành dấu nhỏ hơn
          i++;
        }
        while (arr[j].name < pivotValue) { // Đổi dấu nhỏ hơn thành dấu lớn hơn
          j--;
        }
        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
        }
      }
      quickSort(arr, left, j);
      quickSort(arr, i, right);
    }
    return arr;
  };

  return quickSort([...products], 0, products.length - 1);
}

export function sortByProductLowPrice(products: any) {
  const quickSort = (arr: any, left: number, right: number) => {
    if (left < right) {
      const pivotIndex = Math.floor((left + right) / 2);
      const pivotValue = arr[pivotIndex].price;
      let i = left;
      let j = right;
      while (i <= j) {
        while (arr[i].price < pivotValue) { // Sửa dấu so sánh ở đây
          i++;
        }
        while (arr[j].price > pivotValue) { // Sửa dấu so sánh ở đây
          j--;
        }
        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
        }
      }
      quickSort(arr, left, j);
      quickSort(arr, i, right);
    }
    return arr;
  };

  return quickSort([...products], 0, products.length - 1);
}

export function sortByProductHightPrice(products: any) {
  const quickSort = (arr: any, left: number, right: number) => {
    if (left < right) {
      const pivotIndex = Math.floor((left + right) / 2);
      const pivotValue = arr[pivotIndex].price;
      let i = left;
      let j = right;
      while (i <= j) {
        while (arr[i].price > pivotValue) { // Sửa dấu so sánh ở đây
          i++;
        }
        while (arr[j].price < pivotValue) { // Sửa dấu so sánh ở đây
          j--;
        }
        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
        }
      }
      quickSort(arr, left, j);
      quickSort(arr, i, right);
    }
    return arr;
  };

  return quickSort([...products], 0, products.length - 1);
}

export function sortByProductOutOfStock(products: any) {
  return products.filter((item: any) => item.remaining == 0)
}
