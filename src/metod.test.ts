beforeEach(() => {
  if (!Array.prototype.yoMap) {
    Array.prototype.yoMap = function (callback) {
      const newArray: any[] = [];
      for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this));
      }
      return newArray;
    };
  }
});

afterEach(() => {
  delete Array.prototype.yoMap;
});

test(" array2 -  value * value ", () => {
  const array = [1, 2, 3, 4];
  expect(array.yoMap((value) => value * value)).toEqual([1, 4, 9, 16]);
});

test(" array -  value * index ", () => {
  const array = [1, 2, 3, 4];
  expect(array.yoMap((value, index) => value * index)).toEqual([0, 2, 6, 12]);
});

test(" array -  value * index ", () => {
  const array = ["Artem", "Kiril", "Sacha"];
  expect(array.yoMap((value, index) => value * index)).toEqual([NaN, NaN, NaN]);
});

test(" array -  value * index ", () => {
  const array = [undefined, false, 0, null];
  expect(array.yoMap((value) => value + value)).toEqual([NaN, 0, 0, 0]);
});

test(" array string sum", () => {
  const array = ["Artem", "Kiril", "Sacha"];
  expect(array.yoMap((value) => value + value)).toEqual(["ArtemArtem", "KirilKiril", "SachaSacha"]);
});
