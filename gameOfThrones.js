// polindrom
function gameOfThrones(s) {
  return s.split(``)
    .sort()
    .filter((v, i, a) => v != a[i - 1])
    .reduce(
    (acc, v) => acc + s.replace(new RegExp(`[^${v}]`, `g`), ``).length % 2, 0
  ) <= 1 ? `YES` : `NO`
}
console.log(gameOfThrones('aaabbbb'));