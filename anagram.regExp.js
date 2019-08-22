//anagram task
//https://www.hackerrank.com/challenges/anagram/problem

function anagram(s) {

    const getMinimumDifference = (left, right) => {
        if (left ===-1 ) return left;

        return `${left}${right}`.length % 2
          ? -1
          : s
        .split(``)
        .sort()
        .filter((v, i, a) => v != a[i - 1])
        .reduce(
          (acc, v) =>
            acc +
            Math.max(
              left.replace(new RegExp(`[^${v}]`, `g`), ``).length -
                right.replace(new RegExp(`[^${v}]`, `g`), ``).length,
              0,
            ),
          0,
        )
          
        
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
