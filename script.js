<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scientific Calculator</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="calculator">
    <input type="text" id="display" disabled>

    <div class="buttons">
        <button onclick="clearDisplay()">C</button>
        <button onclick="append('(')">(</button>
        <button onclick="append(')')">)</button>
        <button onclick="append('/')">/</button>

        <button onclick="append('7')">7</button>
        <button onclick="append('8')">8</button>
        <button onclick="append('9')">9</button>
        <button onclick="append('*')">*</button>

        <button onclick="append('4')">4</button>
        <button onclick="append('5')">5</button>
        <button onclick="append('6')">6</button>
        <button onclick="append('-')">-</button>

        <button onclick="append('1')">1</button>
        <button onclick="append('2')">2</button>
        <button onclick="append('3')">3</button>
        <button onclick="append('+')">+</button>

        <button onclick="append('0')">0</button>
        <button onclick="append('.')">.</button>
        <button onclick="calculate()">=</button>

        <!-- Scientific buttons -->
        <button onclick="sin()">sin</button>
        <button onclick="cos()">cos</button>
        <button onclick="tan()">tan</button>
        <button onclick="log()">log</button>
        <button onclick="sqrt()">√</button>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>


/* style.css */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #141e30, #243b55);
    font-family: Arial;
}

.calculator {
    background: rgba(255,255,255,0.1);
    padding: 20px;
    border-radius: 15px;
}

#display {
    width: 100%;
    height: 60px;
    font-size: 24px;
    margin-bottom: 10px;
    text-align: right;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 60px);
    gap: 10px;
}

button {
    height: 50px;
    font-size: 16px;
}


// script.js
let display = document.getElementById("display");

function append(val){ display.value += val; }
function clearDisplay(){ display.value = ""; }
function calculate(){
    try{ display.value = eval(display.value); }
    catch{ display.value = "Error"; }
}

// Scientific functions
function sin(){ display.value = Math.sin(eval(display.value)); }
function cos(){ display.value = Math.cos(eval(display.value)); }
function tan(){ display.value = Math.tan(eval(display.value)); }
function log(){ display.value = Math.log10(eval(display.value)); }
function sqrt(){ display.value = Math.sqrt(eval(display.value)); }
