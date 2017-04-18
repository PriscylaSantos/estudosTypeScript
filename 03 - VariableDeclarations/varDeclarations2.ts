function f() {
    var a = 10;
    return function g(){
        var b = a + 1;
        console.log(b);
        return b;
    }
}

 var g = f();
 console.log(g());
