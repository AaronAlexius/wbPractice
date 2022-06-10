// Sum all of the numbers in an array except for the highest and lowest values
//if the array is (null, none, nothing, empty list, or only 1 element) return 0

// Example I/O
// [ 6, 2, 1, 8, 10] => 16
// [ 1, 2, 1, 3, 6] => 6

const middleSums = (array) => {
  if (array == null || array.length < 2) {
    return 0
  } else {
    const newArray = array.sort((a,b) => a - b)
    newArray.shift()
    newArray.pop()
    return newArray.reduce((accumulator, current) => accumulator + current)
  }
}

// Passing tests:
// const test0 = [null]
// const test1 = [ 6, 2, 1, 8, 10]