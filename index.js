let addBudgetButton = document.getElementById('addBudget');
let BudgetContainer = document.getElementById('BudgetContainer');
let inputField = document.getElementById('inputField');

fetch("http://localhost:3000/0")
    .then

addBudgetButton.addEventListener('click',function(){
    var paragraph=document.createElement('p');

    paragraph.innerText=inputField.value;
    BudgetContainer.appendChild(paragraph);
    inputField.value='';

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";

        paragraph.addEventListener('dblclick',function(){
            BudgetContainer.removeChild(paragraph); 
        })
    })
});