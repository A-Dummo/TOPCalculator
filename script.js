function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return add(a, b);

        case "-":
            return subtract(a, b);
        
        case "*":
            return multiply(a, b);
        
        case "/":
            return divide(a, b);
    }
}

function doNumstuff(display, dataKeyValue) {
    switch(dataKeyValue) {
        case "C":
            display.textContent = 0;
            break;

        case "=":
            let arrayNums = splitArray(display.textContent);
            let sum = addArrayNums(arrayNums);
            if (isNaN(sum)) sum = "U stupid";
            display.textContent = sum;
            break;

        default:
            display.textContent += dataKeyValue;
            break;
    }
}

function splitArray(x) {
    let y = [""]
    let c = 0;
    for (let i = 0; i < x.length; i++) {
    
        if (x[i] === "/" || x[i] === "*" || x[i] === "-" || x[i] === "+") {
            
            c += 1;
            y[c]="";
    
        } else if (y[c] === "/" || y[c] === "*" || y[c] === "-" || y[c] === "+") {
            c += 1;
            y[c]="";
        }
    
        y[c]+=x[i];
    }
    return y;
}

function addArrayNums(arrayNums) {
    for (let i = 0; i < arrayNums.length - 2; i += 2) {
        // 1, +, 3, -, 2
        arrayNums[i + 2] = operate(arrayNums[i + 1], arrayNums[i], arrayNums[i + 2]);
    }
    const sum = arrayNums[arrayNums.length - 1];
    return sum;
}
// init

let buttons = document.querySelectorAll("#buttons > *");

buttons.forEach(element => {
    
    element.addEventListener('click', () => {
        //document.querySelector("#display").textContent += x.getAttribute("data-key")
        const dataKeyValue = element.getAttribute("data-key");
        const display = document.querySelector("#display");
        /*
        switch(dataKeyValue) {
            case "C":
                display.textContent = 0;
                break;

            case "=":
                console.log(1)
                break;

            default:
                display.textContent += dataKeyValue;
                break;
        }
        */
       doNumstuff(display, dataKeyValue);
    })
})