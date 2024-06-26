function soalA(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            result += i
        }
        result += '\n'
    }
    console.log(result)
}

function soalB(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        for (let j = i; j > 0; j--) {
            result += j
        }
        result += '\n'
    }
    console.log(result)
}

function soalC(n) {
    let container = ''
    let check = 1
    let flag = true

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            container += check

            if (check == n) {
                check--
                flag = false
            } else if (check == 1 && !flag) {
                check++
                flag = true
            } else if (!flag) {
                check--
            } else if (flag) {
                check++
            }

            if (j == i) {
                container += "\n";
                break
            }
        }
    }
    console.log(container)
}

function soalD(n) {
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0
        }
    }

    let value = 1

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) { 
            for (let j = 0; j < n; j++) {
                matrix[j][i] = value++
            }
        } else { 
            for (let j = n - 1; j >= 0; j--) {
                matrix[j][i] = value++
            }
        }
    }

    for (let i = 0; i < n; i++) {
        let row = ''
        for (let j = 0; j < n; j++) {
            row += matrix[i][j]
            if (j < n - 1) {
                row += ' '
            }
        }
        console.log(row)
    }
}

console.log("Output A: ")
soalA(5)
console.log("Output B: ")
soalB(5)
console.log("Output C: ")
soalC(5)
console.log("Output D: ")
soalD(5)