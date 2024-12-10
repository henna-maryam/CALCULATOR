
const display = document.getElementById("display");

function appendDisplay(value){
    display.value += value;
}


function allClear(){
    display.value = "";
}


function lastClear(){
    // let onScreen = document.getElementById("display").value; 
    display.value = display.value.slice(0,-1);
}


function calculate(){
    // display.value = result;
    try{
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
        display.value = eval(expression);
    }
    catch(error){
        display.value = 'Error';
    }
}






const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const table = document.querySelector('table');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#CDC9C6';
        body.style.color = 'black';
        table.style.background = '#CDC9C6'
        table.style.boxShadow = '0 0 20px black'
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        // table.style.background = '#CDC9C6'
        table.style.background = 'black';
        table.style.boxShadow = '0 0 15px white'
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});








// const buttons = document.querySelectorAll('button');

// let string = '';
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             display.value = string;
//         }else if(e.target.innerHTML == 'AC'){
//             string = '';
//             display.value = string;
//         }else if(e.target.innerHTML == 'C'){
//             string = string.slice(0,-1);
//             display.value = string;
//         }else{
//             string += e.target.innerHTML;
//             display.value = string
//         }
//     })
// })