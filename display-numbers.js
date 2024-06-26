function displayNumbers(n) {
    let results = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 4 == 0) {
            results.push('OKYES ');
        } else if (i % 3 === 0) {
            results.push('OK ');
        } else if (i % 4 === 0) {
            results.push('YES ');
        } else {
            results.push(i);
        }
    }
    return results
}

let output = displayNumbers(15)
console.log(output.join(' '))
