// Question: We need a function that can transform a number to a string.

// Examples of I/O: 
  // 123 -> "123"
  // 624 -> "624"

// Basically, this is a conversion of type

const numberToString = (num) => {
  return JSON.stringify(num)
}
// numberToString(77) 

// also

const numberToString2 = (num) => {
  return String(num)
}