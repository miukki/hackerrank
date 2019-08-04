// consider S string has a series characters, each followed by it is frequency as an integer.
// the  string not compressed correctly, so there may be many occurences of the same character.
// A properly compressed string will consist of one inctance of each character in alphabetical order 
// followed by the total count of that character within the string.

// e.g the string noCompressedString = a3c9b2c1 has two intances where 'c' is folloed with a count once with 9 occurences and 1 occurences.
// it should be compressed to  compressedString =a3b2c10

const noCompressedString = `a3c9b2c1`

const betterC = input => {
    const inputSplit = input.split(``);
    return inputSplit.reduce((acc, char, index)=> {
        if (char.match(/[a-z]/g)) {
          acc[char] = {
            index, 
            integer: !acc[char] ? `${+inputSplit[index+1]}` : `${parseInt(+acc[char]['count'] + (+inputSplit[index+1]))}`  
          }
        };
        return acc
    } , {})
} 
console.log(betterC(noCompressedString))// complete this example

//better performance  solution
const betterCompression = s => {
  // how many alfabets ? === 26
  const a = new Array(26).fill(0)
  let i = s.length
  while ((i -= 2) >= 0) {
    a[s[i].charCodeAt(0) - 97] += Number(s[i + 1])
  }
  return a.reduce(
    (acc, o, index) =>
      (acc += o ? `${String.fromCharCode(index + 97)}${a[index]}` : ``),
    ``,
  )
}
console.log(betterCompression(noCompressedString)) // with  CharCodeAt example


const compress = s =>
  s
    .split(``)
    .reduce(
      (acc, v, i, a) =>
        i % 2 ? ((acc[a[i - 1].charCodeAt(0) - 97] += +a[i]), acc) : acc,
      new Array(26).fill(0)
    )
    .reduce(
      (acc, v, i, a) =>
        (acc += v ? `${String.fromCharCode(i + 97)}${a[i]}` : ``),
      ``
    );
console.log('beauty compress', compress.bind(null,noCompressedString)())
