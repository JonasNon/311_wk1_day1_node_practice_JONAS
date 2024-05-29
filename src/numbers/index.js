const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 == 0
}

const sum = (arr) => {
  // write code for numbers.sum
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i + 1] = arr[i] + arr[i + 1]
  }
  return arr[arr.length - 1]
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        return true
      }
    }
  }
  return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}