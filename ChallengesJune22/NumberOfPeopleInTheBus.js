// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair 
// represent number of people get into bus (The first item) and number of people get off 
// the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus 
// station (after the last array). Even though it is the last bus stop, the bus is not 
// empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus 
// is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// Examples of I/O

// [[10, 0], [7, 3], [2, 6]] => 10
// [[5, 0], [1, 3], [9, 2]] => 10

// Describe what I'm going to do 
  // for each [x, y]
  // accumulator + x
  // accumulator - y
  // return accumulator 

const busFolk = (stops) => {
  const results = stops.map(([on, off]) => {
      return on - off
  })
  return results.reduce((acc, cur) => acc + cur)
}

// This idea comes from another user
const busFolk2 = (busStops) => busStops.reduce((acc, [on, off]) => acc + on - off, 0)
// My original idea could be handled with a single reduce fxn, if the second argument (what I usually think of as current) 
// represented the interaction that I describe in my map.