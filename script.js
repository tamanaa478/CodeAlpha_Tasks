const display = document.getElementById('display');

function appendValue(val) { 
    if (display.value === '0') display.value = ''; 
    display.value += val; 
}

function clearDisplay() { 
    display.value = ''; 
}

function backspace() { 
    display.value = display.value.slice(0, -1); 
}

function calculate() { 
    try { 
        if(display.value) display.value = eval(display.value); 
    } catch(err) { 
        display.value = 'Error'; 
    } 
}
