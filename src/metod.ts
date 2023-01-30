import { fn3 } from "types/typesMetod";

Array.prototype.yoMap = function (callback: fn3): (string | number)[] {
  const newArray: any[] = [];
  for (let index = 0; index < this.length; index++) {
    newArray.push(callback(this[index], index, this));
  }
  return newArray;
};
