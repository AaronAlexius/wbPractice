// Write a function named setAlarm which receives two parameters.
// Parameter 1 = employed
// Parameter 2 = vacation

// it should return true if employed and not on vacation, otherwise, false

// Examples:
// setAlarm(true, true) -> false
// setAlarm(true, false) -> true

const setAlarm = (employed, vacation) => {
  return employed && !vacation ? true : false
}

// Expecting true, true => false
// Expecting true, false => true