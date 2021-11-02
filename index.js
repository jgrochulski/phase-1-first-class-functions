function receivesAFunction(fn) {
    fn();
}

function returnsANamedFunction() {
    function namedFunction() {};
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function (){};
}
