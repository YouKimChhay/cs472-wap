
class Bank {

  static nextNumber = 100;

  constructor() {
    this.accounts = [];
  }

  addAccount() {
    this.accounts.push(new Account(Bank.nextNumber));
    return Bank.nextNumber++;
  }

  addSavingsAccount(interest) {
    this.accounts.push(new SavingsAccount(Bank.nextNumber, interest));
    return Bank.nextNumber++;
  }

  addCheckingAccount(overdraft) {
    this.accounts.push(new CheckingAccount(Bank.nextNumber, overdraft));
    return Bank.nextNumber++;
  }

  closeAccount(number) {
    this.accounts = this.accounts.filter(acc => acc.getNumber() != number);
  }

  accountReport() {
    return this.accounts.map(acc => acc.toString())
              .reduce((accumulator, accString) => accumulator + accString + "\n", "");
  }

  endOfMonth() {
    return this.accounts.map(acc => acc.endOfMonth())
              .reduce((accumulator, accString) => accumulator + accString + "\n" , "");
  }
}
