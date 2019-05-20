calcVar = function() {
    var a = parseInt(document.getElementById('calcA').value);
    var b = parseInt(document.getElementById('calcB').value);
    c = [a, b];
    return c;
}
adding = function() {
    var arr = calcVar();
    var a = arr[0];
    var b = arr[1];
    document.getElementById('result').value = a + b;
}

subtracting = function (a, b) {
    var arr = calcVar();
    var a = arr[0];
    var b = arr[1];
    document.getElementById('result').value = a - b;
}

multiplication = function (a, b) {
    var arr = calcVar();
    var a = arr[0];
    var b = arr[1];
    document.getElementById('result').value = a * b;
}

division = function (a, b) {
    var arr = calcVar();
    var a = arr[0];
    var b = arr[1];
    if (b === 0) {
        document.getElementById('result').value = 'ERR';
    } else {
        document.getElementById('result').value = a / b;
    }
}

var x = 12;
var y = -20;
console.log(`x = ${x} and y = ${y}`)

//x = parseInt(prompt('Enter x'));
//y = parseInt(prompt('Enter y'));

add = function(a, b) {
    var c = a + b;
    return c;
}

sub = function (a, b) {
    var c = a - b;
    return c;
}

multi = function (a, b) {
    var c = a * b;
    return c;
}

div = function (a, b) {
    if (b === 0) {
        var c = 'ERR';
    } else {
        var c = a / b;
    }
    return c;
}

console.log (`x + y = ${add(x, y)}; x - y = ${sub(x, y)}; x * y = ${multi(x, y)}; x / y = ${div(x, y)};`);

