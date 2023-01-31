
class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this.setInterest(interest);
  }

  getInterest() {
    return this._interest;
  }

  setInterest(interest) {
    if(interest < 0) {
      throw new RangeError("Interest has to be greater than zero");
    }
    this._interest = interest;
  }

  addInterest() {
    if(super.getBalance() > 0) {
      super.deposit(super.getBalance() * this.getInterest() / 100);
    }
  }

  toString() {
    return "Account " + this._number + ": balance " + this._balance + " interest " + this.getInterest();
  }

  endOfMonth() {
    this.addInterest();
    return "Interest added SavingsAccount " + super.getNumber() + ": balance: " + super.getBalance() + " interest: " + this.getInterest();
  }
}