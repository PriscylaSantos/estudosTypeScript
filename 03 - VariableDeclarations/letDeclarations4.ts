for (let index = 0; index < 10; index++) {
    setTimeout(function() {
        console.log(index);
    }, 100 * index);
}