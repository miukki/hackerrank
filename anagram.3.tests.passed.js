//anagram task
//https://www.hackerrank.com/challenges/anagram/problem

function anagram(s) {

    const getMinimumDifference = (a, b) => {
        if (a ===-1 ) return a;
        const acc = [...`${a}`.split('').sort(), ...`${b}`.split('').sort()];
        return [...`${a}`.split('').sort()].map((l, $index)=> (l===acc[$index+(acc.length/2)]) ? 0 : l).filter(i=>i!==0).length
        
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

    