//Append the characters  from the string  a and the string b  / if one string is exhausted before the other, append
//the remainig letter from the other string all at once

const merge = (wordA,wordB) => {
    i=0;
    return wordA.split('').reduce((acc, a, index) => {
      return acc += (`${a}${wordB[index] || ''}`)      
    } , '')+`${(wordB.length > wordA.length ? wordB.slice(wordA.length) : '')}`
}

console.log(merge('Monday', 'HackerRank'));