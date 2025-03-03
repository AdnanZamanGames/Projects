let display = document.querySelector('.display')

function showInDisplay(value){
    console.log(value)
    display.value += value
}
function clearDisplay(){
    display.value = ''
}
function calculate(){
    if(display.value === ''){
        alert('Empty')
    }
    else{
        display.value = eval(display.value)
    }
}