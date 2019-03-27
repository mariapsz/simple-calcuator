let operator = null;
let dot = false;
let result = 0;
let temp = null;


function addNumber(number) {
    if (operator == null) {
        if (result === 0) {
            result = number;
            document.getElementById('number').innerText = number;
        } else {
            result += number.toString();
            document.getElementById('number').innerText += number;
        }
    } else {
        if (temp == null || temp === 0) {
            temp = number;
            document.getElementById('number').innerText = number;
        } else {
            temp += number.toString();
            document.getElementById('number').innerText += number;
        }
    }
}

function addOperator(opr) {
    if (result.toString()[result.toString().length - 1] != '.') {
        operator = opr;
        document.getElementById('operator').innerText = opr;
        if (temp == null)
            document.getElementById('number').innerText = '';
        dot = false;        
    }
}

function addDot() {
    if (!dot) {
        if (operator == null) {
            result += '.';
            document.getElementById('number').innerText += '.';
        } else {
            temp += '.';
            document.getElementById('number').innerText += '.';
        }
        dot = true;
    }
}

function equal() {
    if (temp != null && result.toString()[result.toString().length - 1] != '.') {
        switch (operator) {
            case '+':
            result = parseFloat(result) + parseFloat(temp);
            break;
            
            case '-':
            result = parseFloat(result) - parseFloat(temp);
            break;

            case '*':
            result = parseFloat(result) * parseFloat(temp);
            break;

            case '/':
            if (result != 0)
                result = parseFloat(result) / parseFloat(temp);
            break;
        }
        document.getElementById('number').innerText = result;
        document.getElementById('operator').innerText = '';
        temp = null;
        operator = null;
        if (result.toString().includes('.')) {
            dot = true;
        } else dot = false;
    }
}

function power(number) {
    if (temp === null) {
        result = Math.pow(result, number);
        document.getElementById('number').innerText = result;
        document.getElementById('operator').innerText = '';
        if (result.toString().includes('.')) {
            dot = true;
        } else dot = false;
    }
}

function clearAll() {
    result = 0;
    temp = null;
    operator = null;
    document.getElementById('number').innerText = result;
    document.getElementById('operator').innerText = '';
    dot = false;
}
