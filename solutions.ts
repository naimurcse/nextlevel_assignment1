// Solution of Problem 1
const filterEvenNumbers = (arrayOfNumbers: number[]): number[] => {
  const evenNumbers = arrayOfNumbers.filter((num) => num % 2 == 0);
  return evenNumbers;
};
