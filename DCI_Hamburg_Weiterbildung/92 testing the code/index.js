export function factorial(x) {
    if (typeof x !== 'number') return 'The input you entered is not a number! You get no factorial!';
    else if(x < 0) return 'Impossible to present factorial of a negative number';
    else if (x == 0) return 1;
    else return x*factorial(x-1);
}

console.log(factorial(5));



