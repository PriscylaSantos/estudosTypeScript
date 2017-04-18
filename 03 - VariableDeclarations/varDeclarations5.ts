function sumMatrix(matrix: number[][]) {
    var sum = 0;

    for (var index = 0; index < matrix.length; index++) {
        var element = matrix[index];
        for (var index = 0; index < element.length; index++) {
             sum += element[index];            
        }        
    }
    return sum;
}
