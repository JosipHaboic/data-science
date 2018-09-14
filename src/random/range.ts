export function range(start: number = 0, end: number = 1, n: number = 10) {
  const data = [];
  let item = 0;
  while (data.length < n) {
    // tslint:disable-next-line
    item = Math.random() * end;
    if (item >= start) {
      data.push(item);
    }
  }

  return data;
}
