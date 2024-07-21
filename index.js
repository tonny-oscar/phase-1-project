let income = 50000;

const expenseListTable = document.querySelector('.expense-list-table');
const totalExpenseDisplay = document.querySelector('.total-expense-display');
const expenseForm = document.getElementById('expenseForm');
const expenseItemInput = document.getElementById('expenseItemInput');
const expenseAmountInput = document.getElementById('expenseAmountInput');
const incomeInput = document.getElementById('income-input');

let expenseItems = [
    { id: 1, name: 'Rent', amount: 0, month: 'July' },
    { id: 2, name: 'Groceries', amount: 0, month: 'July' },
    { id: 3, name: 'Shopping', amount: 0, month: 'July' }
];

//  it calculate and display total expenses
function calculateTotalExpenses() {
    const totalExpenses = expenseItems.reduce((total, item) => total + item.amount, 0);
    totalExpenseDisplay.textContent = totalExpenses.toLocaleString('en-US', { style: 'currency', currency: 'KES' });
}

// Function to render the expense list table
function renderExpenseTable() {
    const tableRows = expenseItems.map(item => {
        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.amount.toLocaleString('en-US', { style: 'currency', currency: 'KES' })}</td>
            </tr>
        `;
    });
    expenseListTable.innerHTML = `
        <tr>
            <th class="py-3 px-6 text-left">Description</th>
            <th class="py-3 px-6 text-left">Amount</th>
        </tr>
        ${tableRows.join('')}
    `;
}

function updateIncome(newIncome) {
    income = newIncome;
    calculateTotalExpenses();
}

//form submission (adding new expense)
document.getElementById('Submitbtn').addEventListener('click', function(event) {
    event.preventDefault();

    // Fetch form values
    const itemName = expenseItemInput.value.trim();
    const itemAmount = parseFloat(expenseAmountInput.value);
    
    if (!itemName || isNaN(itemAmount) || itemAmount <= 0) {
        alert('Please enter a valid item name and amount.');
        return;
    }

    //new expense object
    const newExpense = {
        id: expenseItems.length + 1,
        name: itemName,
        amount: itemAmount,
        month: document.getElementById('month-select').value // Assuming you have a month select input
    };
    expenseItems.push(newExpense);
    renderExpenseTable();
    calculateTotalExpenses();

    // Clear form
    expenseItemInput.value = '';
    expenseAmountInput.value = '';
});

//changing income
incomeInput.addEventListener('change', function() {
    const newIncome = parseFloat(incomeInput.value);
    if (!isNaN(newIncome) && newIncome >= 0) {
        updateIncome(newIncome);
    } else {
        alert('Please enter a valid income amount.');
    }
});
// rendering
renderExpenseTable();
calculateTotalExpenses();
