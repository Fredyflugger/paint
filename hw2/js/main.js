task1 = function () {
    var a = parseInt(document.getElementById('task1a').value);
    var b = parseInt(document.getElementById('task1b').value);
    if (isNaN(a) && isNaN(b)) {
        document.getElementById('task1c').value = 'ERR'
    } else {
        if ((a >= 0) && (b >= 0)) {
            document.getElementById('task1c').value = Math.abs(a - b);
        } else if ((a < 0) && (b < 0)) {
            document.getElementById('task1c').value = a * b;
        } else if (((a < 0) && (b >= 0)) || ((a >= 0) && (b < 0))) {
            document.getElementById('task1c').value = a + b;
        }
    }
}

task2 = function() {
    var num = parseInt(document.getElementById('range').value);
    document.getElementById('rangeValue').value = num;
    var arr = [];
    var i = 0;
    switch(num) {
        case 0 : i = 0; do {arr.push(i); ++i;} while (i < 16); break;
        case 1 : i = 1; do {arr.push(i); ++i;} while (i < 16); break;
        case 2 : i = 2; do {arr.push(i); ++i;} while (i < 16); break;
        case 3 : i = 3; do {arr.push(i); ++i;} while (i < 16); break;
        case 4 : i = 4; do {arr.push(i); ++i;} while (i < 16); break;
        case 5 : i = 5; do {arr.push(i); ++i;} while (i < 16); break;
        case 6 : i = 6; do {arr.push(i); ++i;} while (i < 16); break;
        case 7 : i = 7; do {arr.push(i); ++i;} while (i < 16); break;
        case 8 : i = 8; do {arr.push(i); ++i;} while (i < 16); break;
        case 9 : i = 9; do {arr.push(i); ++i;} while (i < 16); break;
        case 10 : i = 10; do {arr.push(i); ++i;} while (i < 16); break;
        case 11 : i = 11; do {arr.push(i); ++i;} while (i < 16); break;
        case 12 : i = 12; do {arr.push(i); ++i;} while (i < 16); break;
        case 13 : i = 13; do {arr.push(i); ++i;} while (i < 16); break;
        case 14 : i = 14; do {arr.push(i); ++i;} while (i < 16); break;
        case 15 : arr = [15]
    }
    document.getElementById('area').value = arr.join(' ');
}

recursion = function(val, pow) {
    if (pow != 1) {
        return val *= recursion(val, pow - 1);
    } else {
        return val;
    }
}

recursionInput = function() {
    var arr = [];
    arr.push(document.getElementById('number').value);
    arr.push(document.getElementById('power').value);
    return arr;
}

recursionHTML = function() {
    var arr = recursionInput();
    var val = parseInt(arr[0]);
    var pow = parseInt(arr[1]);
    document.getElementById('recursionResult').value = recursion(val, pow);
}
