const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submit = document.addEventListener('click', submitBtn)
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')
let action = '+'

plus.onclick = function () {
    action = '+'
}

minus.onclick = function () {
    action = "-"
}

multiplication.onclick = function () {
    action = '*'
}

division.onclick = function () {
    action = "/"
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else if (result == 0) {
        resultElement.style.color = 'black'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNum(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '-') {
        return num1 - num2
    } else if (actionSymbol == "+") {
        return num1 + num2
    } else if (actionSymbol == "*") {
        return num1 * num2
    } else if (actionSymbol == "/") {
        return num1 / num2
    } else {
        console.log('valid symbol')
    }
}

function submitBtn() {
    const result = computeNum(input1, input2, action)
    printResult(result)
    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }


}

//return actionSymbol == "+" ? num1 + num2 : num1 - num2