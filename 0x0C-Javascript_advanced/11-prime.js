function countPrimeNumbers (){
    var countPrime = 0;

    for (var count = 2; count <= 100; count++) {

        var notPrime = false;
        for (var i = 2; i <= count; i++) {
            if (count % i == 0 && i != count) {
                notPrime = true;
            }
        }
        if (notPrime == false) {
            countPrime += 1;
        }
    }

    return(countPrime);
}

var t0 = performance.now();

setTimeout(() => {
    for (var i = 0; i < 100; i++){
        countPrimeNumbers();
    }    
}, 0);

var t1 = performance.now();
console.log('Execution time of calculating prime numbers 100 times was ' + (t1 - t0) + ' milliseconds.');
