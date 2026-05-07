// Solution of Problem 1
const filterEvenNumbers = (arrayOfNumbers: number[]): number[] => {
  const evenNumbers = arrayOfNumbers.filter((num) => num % 2 == 0);
  return evenNumbers;
};

// Solution of Problem 2
const reverseString = (inputString: string): string => {
  const reversedString = inputString.split("").reverse().join("");
  return reversedString;
};

// Solution of Problem 3
type StringOrNumber = string | number;
const checkType = (x: StringOrNumber): string => {
  if (typeof x === "string") {
    return "String";
  } else if (typeof x === "number") {
    return "Number";
  } else {
    return "Wrong Input!";
  }
};

// Solution of Problem 4
const getProperty = <T, K extends keyof T>(userInfo: T, specificInfo: K) => {
  return userInfo[specificInfo];
};
