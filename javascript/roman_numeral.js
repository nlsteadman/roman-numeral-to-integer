function romanNumeral(string) {

  const numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let result = 0;

  for (i = 0; i < string.length; i++) {
    const current = numerals[string[i]];
    const next = numerals[string[i + 1]];

    if (current < next) {
      result += (next - current);
      i++
    } else {
      result += current
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
