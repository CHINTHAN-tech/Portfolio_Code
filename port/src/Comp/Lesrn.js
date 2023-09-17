function fib(length){
    const Fib=[0,1]

    for(let i=2; i<length; i++){
        Fib.push(Fib[i-1] + Fib[i-2])
    }
    return Fib
}

const series=fib(8)
console.log(series)