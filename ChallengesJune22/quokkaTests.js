
// numToString
const numberToString = (num) => {
  return JSON.stringify(num)
}

console.log(numberToString(77))
console.log(typeof(numberToString(77)))


const numberToString2 = (num) => {
  return String(num)
}

console.log(typeof(numberToString2(88)))

// L1SetAlarm
const setAlarm = (employed, vacation) => {
  return employed && !vacation ? true : false
}

console.log(setAlarm(true, true))

// SumWithoutExtremes
const middleSums = (array) => {
  if (array === null || array.length < 2) {
    return 0
  } else {
    const newArray = array.sort((a,b) => a - b)
    newArray.shift()
    newArray.pop()
    return newArray.reduce((accumulator, current) => accumulator + current)
  }
}

const test1 = [ 6, 2, 1, 8, 10]
const test0 = [null]
const test2 = [ ]
console.log(test2.length)

console.log(middleSums(test0))