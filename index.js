const income = 50000;
let totalExpenses = 0;

let expenseListTable = document.getElementsByClassName('expense-list-table')[0];
let totalExpenseDisplay = document.getElementsByClassName('total-expense-display')[0];
let expenseItem=document.getElementById('main')[0];


fetch ("http://localhost:3000/expense")
.then(response => response.json())
.then(expenseItem=> {
  expense.forEach(expense=>{
  const title= document.createElement("h1")
  title.innerHTML = expenseItem.title
  main.appendChild(title);
});
})

console.log('before calculating...')
expenseItems.forEach(item=>{
    console.log('calculating...')
    return totalExpenses += item.amount;
});
console.log('after calculating...')
totalExpenseDisplay.innerHTML = totalExpenses;
console.log('after display calculating...', expenseListTable)

//.join for 
const tableRows = expenseItems.map(item => {
    return `
        <tr>
            <td>${item.name}</td>
            <td>${item.amount}</td>
        </tr>
    `;
});
expenseListTable.innerHTML = tableRows.join('');

// When user submits an item, get the inputs (desc, amount, month) 
// Add event handler for form submission

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

// Update kwa DB, ama kwa expenseItems array
 