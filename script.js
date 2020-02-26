function balance() {
    // resource block

    var salary = document.getElementById("salary").value;
    var otherResource = document.getElementById("otherResource").value;


    var resourse = {
        salary: salary,
        otherResource: otherResource
    }
    var sum = parseInt(resourse.salary) + parseInt(resourse.otherResource)
    console.log(sum)
    document.getElementById("totalmoneyearned").innerHTML = sum
    // expense block
    var rent = document.getElementById("rent").value;
    var medicine = document.getElementById("medicine").value;
    var shopping = document.getElementById("shopping").value;
    var food = document.getElementById("food").value;
    var otherExpense = document.getElementById("others").value;
    var expense = {
        rent: rent,
        medicine: medicine,
        shopping: shopping,
        food: food,
        otherExpense: otherExpense
    }
    var expenseamt = parseInt(expense.rent) + parseInt(expense.medicine) + parseInt(expense.shopping) + parseInt(expense.food) + parseInt(expense.otherExpense)
    console.log(expenseamt)
    document.getElementById("totalmoneyexpense").innerHTML = expenseamt;
    // balance
    var balance = parseInt(sum) - parseInt(expenseamt)
        document.getElementById("balanceamt").innerHTML = balance
     if (balance <= 100) {
        document.getElementById("alert").innerHTML = "your balance is running low"
    }
}


