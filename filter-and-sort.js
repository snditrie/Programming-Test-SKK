let n = [12, 9, 13, 6, 10, 4, 7, 2]

let filteredArray = []
for (let i = 0; i < n.length; i++) {
  if (n[i] % 3 !== 0) {
    filteredArray.push(n[i])
  }
}

for (let i = 0; i < filteredArray.length; i++) {
  for (let j = 0; j < filteredArray.length - 1; j++) {
    if (filteredArray[j] > filteredArray[j + 1]) {
      let temp = filteredArray[j]
      filteredArray[j] = filteredArray[j + 1]
      filteredArray[j + 1] = temp
    }
  }
}

console.log(filteredArray)