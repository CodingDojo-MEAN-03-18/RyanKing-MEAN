function fib() {
    var total = 1;
    var prev = 0;

    function nacci() {
        console.log(total);
        let temp = prev;
        prev = total;
        total += temp;
    }
    return nacci;
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
