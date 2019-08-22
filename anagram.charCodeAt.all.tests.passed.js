//anagram task
//https://www.hackerrank.com/challenges/anagram/problem

function anagram(s) {

    const getMinimumDifference = (left, right) => {
        if (left ===-1 ) return left;

        // > 'a'.charCodeAt(0) - 97
        // 0
        // > 'b'.charCodeAt(0) - 97
        // 1

        // ➜  hackerrank git:(master) ✗ node anagram.js
        // [ [ 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        //   [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        //   -1,
        //   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        //   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        //   [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]        

        return [...`${left}`.split('')]
          .reduce((acc, l, $index)=> {
            const k = l.charCodeAt(0) - 97
            if (k) acc[k]--
            if (acc[k]<0) acc[k] = 0
            return acc
          },
          
          //acc
          [...`${right}`.split('')]
          .reduce((acc, l, $index) => {
            acc[l.charCodeAt(0) - 97]++
            return acc
          }, new Array(26).fill(0))
  
          ).reduce((a,b) => a + b) 

          
        
    }

    const stringSplitter = (str) => str.length %2 ? [-1] : [str.slice(0, parseInt(str.length / 2)), str.slice(parseInt(str.length / 2))]

    return getMinimumDifference.apply(null, stringSplitter(s))
}

console.log([
    'aaabbb',
    'ab',
    'abc',
    'mnop',
    'xyyx',
    'xaxbbbxx'
].map(i=>anagram(i)) )
