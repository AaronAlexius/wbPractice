// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Examples
// const string1 = "similar" // 3
// const string2 = "expeditions" // 5
// const string3 = "yeild" // 2

const vowelCounter = (string) => {
  const stringArray = string.split('')
  const vowelCount = stringArray.reduce((acc, cur) => {
    if (cur === 'a' || cur === 'e' || cur === 'i' || cur === 'o' || cur === 'u') acc++
    return acc
  }, [])
  return vowelCount
}