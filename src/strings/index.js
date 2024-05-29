const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  // let strLen = str.length
  // let result = []
  // console.log(str.match(/(..?)/g))
  // for (let i = 0; i < strLen; i++) {
  //   result.push(initial.Substring(0, 2))
  //   str = str.Substring(2)
  //   console.log(result)
  // }
  return str.match(/(..?)/g)
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}