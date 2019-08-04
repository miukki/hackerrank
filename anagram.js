//anagram task
//https://www.hackerrank.com/challenges/anagram/problem

  const getMinimumDifference = (a, b) => {
    let count = 0;
    if (a.length !== b.length) return --count;
    
    const newCount = b.split('').reduce((acc, letter, index)=> {
        if (!a.includes(letter)) {//bbb
            a = a.substr(0,index)+'0'+a.substr(index+1)
            console.log('a',a, a+b+'');
            return ++count;
        } else {
            a = a.substr(0,index)+'0'+a.substr(index+1)
            console.log('a!',a, a+b+'');
            return count;
        }   
    
    }, count); //=== b.length ? 0 : count

    return newCount;

}

// const stringSplitter = (string) => {
//     const m = string.match(new RegExp('.{1,'+parseInt(string.length/2)+'}','g'));
//     return (m.length > 2 ? [].concat(m[0], m[1]+m[m.length-1]): m);
// };

const stringSplitter = (s) => [s.slice(0, parseInt(s.length / 2)), s.slice(parseInt(s.length / 2))]

console.log([
    'aaabbb',
    'ab',
    'abc',
    'mnop',
    'xyyx',
    'xaxbbbxx',

].map(i=>getMinimumDifference.apply(null, stringSplitter(i))
))

console.log(stringSplitter('abc'))