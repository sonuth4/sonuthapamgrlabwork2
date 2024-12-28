const personAccount = {
    firstName: "Sonu",
    lastName: "Thapa",
    incomes: [
      { description: "Salary", amount: 300000 },
      { description: "Freelance", amount: 1500 }
    ],
    expenses: [
      { description: "Rent", amount: 12000 },
      { description: "Groceries", amount: 30000}
    ],
  
    
    totalIncome() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
  
    
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
  
    
    accountInfo() {
      return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpense()}\nBalance: $${this.accountBalance()}`;
    },
  
    
    addIncome(description, amount) {
      this.incomes.push({ description, amount });
    },
  
    
    addExpense(description, amount) {
      this.expenses.push({ description, amount });
    },
  
    
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  
  console.log(personAccount.accountInfo());
  
  personAccount.addIncome("Bonus", 500000); 
  personAccount.addExpense("Utilities", 20000); 
  
  console.log("\nUpdated Account Info:");
  console.log(personAccount.accountInfo()); 