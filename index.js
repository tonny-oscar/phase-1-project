const income = 50000;
let totalExpenses = 0;

let expenseListTable = document.getElementsByClassName('expense-list-table')[0];
let totalExpenseDisplay = document.getElementsByClassName('total-expense-display')[0];

const expenseItems = [
    { id: 1, name: 'Rent', amount: 13000, month: 'July' },
    { id: 2, name: 'Groceries', amount: 5000, month: 'July' },
    { id: 3, name: 'Shopping', amount: 3500, month: 'July' }
];

console.log('before calculating...')
expenseItems.forEach(item=>{
    console.log('calculating...')
    return totalExpenses += item.amount;
});
console.log('after calculating...')
totalExpenseDisplay.innerHTML = totalExpenses;
console.log('after display calculating...', expenseListTable)

const tableRows = expenseItems.map(item => {
    return `
        <tr>
            <td>${item.name}</td>
            <td>${item.amount}</td>
        </tr>
    `;
});
expenseListTable.innerHTML = tableRows.join('');


// Add event handler for form submission
// When user submits an item, get the inputs (desc, amount, month )
// Update kwa DB, ama kwa expenseItems array
 