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

// Solution of Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

// Solution of Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
const result = student.getDetails();
