weirdCalc = function(a, b, action) {
    var c;
    if (action === '+') {
        c = add(a, b);
    } else if (action === '-') {
        c = sub(a, b);
    } else if (action === '*') {
        c = multi(a, b);
    }  else if (action === '/') {
        c = div(a, b);
    } else {
        c = 'Not an action';
    }
    return c;
}
c = weirdCalc(12, -20, '+');
console.log (`Result: ${c}`);

weirdCalcVar = function() {
    var a = document.getElementById('weirdVarA').value;
    var b = document.getElementById('weirdVarB').value;
    var action = document.getElementById('weirdAction').value;
    c = [a, b, action];
    return c;
}

weirdCalcHTML = function() {
    var c;
    var arr = weirdCalcVar();
    var a = parseInt(arr[0]);
    var b = parseInt(arr[1]);
    var action = '';
    action = arr[2];
    if (action === '+') {
        document.getElementById('weirdResult').value = add(a, b);
    } else if (action === '-') {
        document.getElementById('weirdResult').value = sub(a, b);
    } else if (action === '*') {
        document.getElementById('weirdResult').value = multi(a, b);
    }  else if (action === '/') {
        document.getElementById('weirdResult').value = div(a, b);
    } else {
        document.getElementById('weirdResult').value = 'Not an action';
    }
}

