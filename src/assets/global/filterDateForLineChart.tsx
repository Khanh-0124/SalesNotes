import _ from 'lodash';
export const filterDateLineChart_X = (start: any, end: any) => {

  function calculateMarkers(startDate: Date, endDate: Date): Date[] {
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const timeDiffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const numMarkers = 4;
    const markerInterval = Math.ceil(timeDiffDays / numMarkers);

    const markers: Date[] = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      let daysToAdd = markerInterval;
      if (daysToAdd > daysInMonth) {
        daysToAdd = daysInMonth;
      }

      markers.push(currentDate);
      currentDate = new Date(currentDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
    }

    return markers;
  }

  const markers = calculateMarkers(start, end);
  let newarr = markers.map((i: any) => `${i.getDate()}/${i.getMonth()}`)
  return newarr

}
export const filterDateLineChart_Y = (prices: any) => {

  // const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 300]; // mảng giá tiền

  const maxPrice = Math.max(...prices); // tìm giá trị lớn nhất trong mảng giá tiền
  const distance = Math.ceil(maxPrice / 5); // tính khoảng cách giữa các mốc trên trục oy
  const markerss = []; // mảng chứa các mốc trên trục oy

  for (let i = 1; i <= 6; i++) {
    const markerValue = i * distance; // tính giá trị của mốc
    markerss.push(markerValue); // thêm giá trị của mốc vào mảng
  }
  return markerss
  // console.log(markerss); // [20, 40, 60, 8
}

export const dataY = (list_orders: any, arrDate: any) => {
  const groupedB = _.groupBy(list_orders, 'fulldate');
  const result = _.reduce(
    groupedB,
    (acc: { sum: number; fulldate: string }[], value, key) => {
      const sum = _.sumBy(value, 'sum');
      acc.push({ sum, fulldate: key });
      return acc;
    },
    []
  );

  // console.log(result);
  const b: any = result.map(({ sum, fulldate }) => ({ sum, fulldate }));
  const c: any = arrDate;
  // console.log(b[0].date);
  const new_array: Array<number> = [];

  for (const date of c) {
    let found = false;
    for (const obj of b) {
      if (obj.fulldate === date) {
        new_array.push(obj.sum);
        found = true;
        break;
      }
    }
    if (!found) {
      new_array.push(0);
    }
  }
  return new_array
}
