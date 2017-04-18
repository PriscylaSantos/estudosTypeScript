for (var index = 0; index < 10; index++) {
    setTimeout(
        function(){
            console.log(index);
        },
        100 * index
    );   
}

for (var i = 0; i < 10; i++){
    (function(i){
        setTimeout(function(){
            console.log(i); }, 100 * i);
    })(i);
}