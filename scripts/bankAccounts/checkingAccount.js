
class CheckingAccount extends Account {
  constructor(number, overdraftLimit) {
    super(number);
    this.setOverdraftLimit(overdraftLimit);
  }

  getOverdraftLimit() {
    return this._overdraftLimit;
  }

  setOverdraftLimit(overdraftLimit) {
    if (overdraftLimit < 0) {
      throw new RangeError("Overdraft limit has to be greater than zero");
    }
    this._overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > super.getBalance() + this.getOverdraftLimit()) {
        throw Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  toString() {
    return "Account " + super.getNumber() + ": balance " + super.getBalance() + " overdraft limit " + this.getOverdraftLimit();
  }

  endOfMonth() {
    if (super.getBalance() < 0) {
      return "Warning, low balance CheckingAccount " + super.getNumber() + ": balance: " + super.getBalance() + " overdraft limit: " + this.getOverdraftLimit();
    }
    return "";
  }
}