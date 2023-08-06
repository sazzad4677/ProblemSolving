function sumOfFactorial(N){
    let total = 1
    for (let i = 1; i<= N; i++){
        total *= i
    }
    return total
}
console.log(sumOfFactorial(4))


