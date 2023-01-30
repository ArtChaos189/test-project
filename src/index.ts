function sum(a: number, b: number) {
  return a + b;
}
export { sum };

const arSum = (array: number[]) => {
  let sum: number = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }

  return sum;
};

export { arSum };

// interface User {
// name: string
// age: number

// }

//  const  Users:User = <User> {}   // или as User

const fс = <T>(arg: T) => arg;
