import { sum, arSum } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 3)).toBe(4);
});

test(" sum is array = 5 ", () => {
  const array1 = [5, 5];
  expect(arSum(array1)).toBe(10);
});
