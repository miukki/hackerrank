//simple acc
const minChairs = (ltrs) => {
  return ltrs.split(``).reduce((acc, l, index) => {
    let {avl, total} = acc;
    const cu = () => {
      if (avl === 0) return {
        ...acc, 
        total: total + 1
      }
      return {
        ...acc, 
        avl: avl -1
      }
    };
    const rl = () =>  Object.assign(acc, {avl: avl + 1});
    if (l === `C` || l === `U`) return cu()
    if (l === `R` || l === `L`) return rl()  
  }, {avl: 0, total: 0}).total
}

 console.log(minChairs('CRUC'), minChairs('CCRUCL'))

// //object acc
// const minChairs = s => s.split(``).reduce(
//   (acc, op, index) => {
//     const {t, a} = acc
//     if (op === `C` || op === `U`) {
//       return a > 0
//         ? {
//             t,
//             a: a - 1,
//           }
//         : {t: t + 1, a: 0}
//     }
//     return {t, a: a + 1}
//   },
//   {t: 0, a: 0},
// ).t;

