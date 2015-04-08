function generatepg() {
    var min = 1000;
    var max = 10000;
    var t = 10;
    var r = random_prime(min,max,t);
    var g = random_integer(min,r);
    document.dhdating.p.value = r;
    document.dhdating.g.value = g;
}

//Warning:This function could potentially lead to infinite loop if the range is not properly set.
//Look for prime distribution for reference.
function random_prime(min,max,t) {
    var r;
    do{
        r = new BigInteger();
        r.fromInt(random_integer(min,max));
    }
    while (!r.isProbablePrime(t));
    return r;
}

function random_integer(min,max) {
    return Math.floor(min + (max - min)*Math.random());
}

function generatetrue() {
    var sk = random_integer(10,1000);
    document.dhdating2.sk.value = sk;
    var g = new BigInteger();
    g.fromInt(document.dhdating.g.value);
    var p = new BigInteger();
    p.fromInt(document.dhdating.p.value);
    document.dhdating2.pk.value = g.modPowInt(sk,p);
}

function generatefalse() {
    var p = document.dhdating.p.value;
    var sk = random_integer(10,1000) // Only for position taker, not used.
    var r = random_integer(1,p);
    document.dhdating2.sk.value = sk;
    document.dhdating2.pk.value = r;
}

function computeresult() {
    var sk = document.dhdating2.sk.value;
    var pk = new BigInteger();
    pk.fromInt(document.dhdating2.pk.value);
    var p = new BigInteger();
    p.fromInt(document.dhdating.p.value);
    document.dhdating2.result.value = pk.modPowInt(sk,p);
}
