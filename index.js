function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
      // code for the named function
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}