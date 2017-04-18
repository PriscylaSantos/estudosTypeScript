function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}
console.log(f(false, 0));
console.log(f(true, 0));
