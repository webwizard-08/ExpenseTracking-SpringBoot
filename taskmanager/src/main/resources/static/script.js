const API_URL =
    "http://localhost:8080/api/expenses";

async function getExpenses(){

    const response =
        await fetch(API_URL);

    const expenses =
        await response.json();

    const table =
        document.getElementById("expenseTable");

    table.innerHTML = "";

    expenses.forEach(expense => {

        table.innerHTML += `

            <tr>

                <td>${expense.id}</td>
                <td>${expense.name}</td>
                <td>${expense.title}</td>
                <td>${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>

                <td>

                    <button onclick="editExpense(
                        ${expense.id},
                        '${expense.name}',
                        '${expense.title}',
                        ${expense.amount},
                        '${expense.category}',
                        '${expense.date}'
                    )">

                        Edit
                    </button>

                    <button onclick="deleteExpense(
                        ${expense.id}
                    )">

                        Delete
                    </button>

                </td>

            </tr>
        `;
    });
}

async function addExpense(){

    const expense = {

        name:
            document.getElementById("name").value,

        title:
            document.getElementById("title").value,

        amount:
            document.getElementById("amount").value,

        category:
            document.getElementById("category").value,

        date:
            document.getElementById("date").value
    };

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(expense)
    });

    clearFields();

    getExpenses();
}

async function deleteExpense(id){

    await fetch(API_URL + "/" + id, {

        method: "DELETE"
    });

    getExpenses();
}

function editExpense(
    id,
    name,
    title,
    amount,
    category,
    date){

    document.getElementById("name").value =
        name;

    document.getElementById("title").value =
        title;

    document.getElementById("amount").value =
        amount;

    document.getElementById("category").value =
        category;

    document.getElementById("date").value =
        date;

    const button =
        document.getElementById("mainButton");

    button.innerText =
        "Update Expense";

    button.onclick = async function(){

        const updatedExpense = {

            name:
                document.getElementById("name").value,

            title:
                document.getElementById("title").value,

            amount:
                document.getElementById("amount").value,

            category:
                document.getElementById("category").value,

            date:
                document.getElementById("date").value
        };

        await fetch(API_URL + "/" + id, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(updatedExpense)
        });

        clearFields();

        button.innerText =
            "Add Expense";

        button.onclick =
            addExpense;

        getExpenses();
    };
}

function clearFields(){

    document.getElementById("name").value = "";
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
}

getExpenses();