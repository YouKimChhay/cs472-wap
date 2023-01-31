
describe("test Account", () => {
  let acc;
  beforeEach(() => {
    acc = new Account(123);
  });

  describe("getNumber", () => {
    it("return the correct account number", () => {
      assert.equal(acc.getNumber(), 123);
    });
  });
  
  describe("getBalance", () => {
    it("return the correct initial balance", () => {
      assert.equal(acc.getBalance(), 0.0);
    });
  });
  
  describe("deposit", () => {
    it("deposit a positive amount should update balance", () => {
      acc.deposit(500);
      assert.equal(acc.getBalance(), 500);
    });
    it("deposit a negative amount should throw an error", () => {
      assert.throws(() => acc.deposit(-500), RangeError, "Deposit amount has to be greater than zero");
      assert.equal(acc.getBalance(), 0);
    });
  });
  
  describe("withdraw", () => {
    beforeEach(() => {
      acc.deposit(500);
    });

    it("withdraw a normal amount within balance should successfully withdraw the money", () => {
      assert.equal(acc.getBalance(), 500);
      acc.withdraw(200);
      assert.equal(acc.getBalance(), 300);
    });
    it("withdraw all the money in balance should put balance to zero", () => {
      assert.equal(acc.getBalance(), 500);
      acc.withdraw(500);
      assert.equal(acc.getBalance(), 0);
    });
    it("withdraw money with a 0 balance should throw an error", () => {
      assert.equal(acc.getBalance(), 500);
      acc.withdraw(500);
      assert.equal(acc.getBalance(), 0);
      assert.throws(() => acc.withdraw(50), Error, "Insufficient funds");
    });
    it("withdraw negative money should throw an error", () => {
      assert.equal(acc.getBalance(), 500);
      assert.throws(() => acc.withdraw(-200), RangeError, "Withdraw amount has to be greater than zero");
    });
  });
  
  describe("toString", () => {
    it("should return the account number and balance", () => {
      acc.deposit(500);
      assert.equal(acc.getBalance(), 500);
      assert.equal(acc.toString(), "Account 123: balance 500");
    });
  });

  describe("endOfMonth", () => {
    it("return an empty string", () => {
      assert.equal(acc.endOfMonth(), "");
    });
  });
});

describe("test SavingsAccount", () => {
  let sAcc;
  before(() => {
    sAcc = new SavingsAccount(123, 1.5);
  });

  describe("getInterest", () => {
    it("return the correct interest rate", () => {
      assert.equal(sAcc.getInterest(), 1.5);
    });
  });

  describe("setInterest", () => {
    it("set a new interest rate", () => {
      assert.equal(sAcc.getInterest(), 1.5);
      sAcc.setInterest(2.3);
      assert.equal(sAcc.getInterest(), 2.3);
    });
    it("set a negative interest rate should throw error", () => {
      assert.equal(sAcc.getInterest(), 2.3);
      assert.throws(() => sAcc.setInterest(-5), RangeError, "Interest has to be greater than zero");
    });
  });

  describe("addInterest", () => {
    it("balance 0 should not deposit any interest", () => {
      sAcc.setInterest(2.3);
      assert.equal(sAcc.getInterest(), 2.3);
      assert.equal(sAcc.getBalance(), 0);
      sAcc.addInterest();
      assert.equal(sAcc.getBalance(), 0);
    });
    it("deposit interest to balance", () => {
      sAcc.setInterest(2.3);
      assert.equal(sAcc.getInterest(), 2.3);
      sAcc.deposit(200);
      assert.equal(sAcc.getBalance(), 200);
      sAcc.addInterest();
      assert.equal(sAcc.getBalance(), 200+200*2.3/100);
    });
  });

  describe("toString", () => {
    it("should return account number, balance and interest rate", () => {
      assert.equal(sAcc.getNumber(), 123);
      assert.equal(sAcc.getBalance(), 204.6);
      assert.equal(sAcc.getInterest(), 2.3);
      assert.equal(sAcc.toString(), "Account 123: balance 204.6 interest 2.3");
    });
  });

  describe("endOfMonth", () => {
    it("return an update balance with interest added", () => {
      assert.equal(sAcc.getNumber(), 123);
      assert.equal(sAcc.getBalance(), 204.6);
      assert.equal(sAcc.getInterest(), 2.3);
      assert.equal(sAcc.endOfMonth(), "Interest added SavingsAccount 123: balance: 209.3058 interest: 2.3");
    });
  });
});

describe("test CheckingAccount", () => {
  let cAcc;
  before(() => {
    cAcc = new CheckingAccount(123, 50);
  });

  describe("getOverdraftLimit", () => {
    it("return the correct overdraft limit", () => {
      assert.equal(cAcc.getOverdraftLimit(), 50);
    });
  });
  
  describe("setOverdraftLimit", () => {
    it("set a new overdraft limit", () => {
      assert.equal(cAcc.getOverdraftLimit(), 50);
      cAcc.setOverdraftLimit(100);
      assert.equal(cAcc.getOverdraftLimit(), 100);
    });
    it("set a negative overdraft limit should throw an error", () => {
      assert.equal(cAcc.getOverdraftLimit(), 100);
      assert.throws(() => cAcc.setOverdraftLimit(-100), RangeError, "Overdraft limit has to be greater than zero");
    });
  });
    
  describe("withdraw", () => {
    beforeEach(() => {
      cAcc.deposit(500);
    });

    it("withdraw a normal amount within balance should successfully withdraw the money", () => {
      assert.equal(cAcc.getBalance(), 500);
      cAcc.withdraw(200);
      assert.equal(cAcc.getBalance(), 300);
      cAcc.withdraw(300);
      assert.equal(cAcc.getBalance(), 0);
    });
    it("withdraw all the money in balance should put balance to zero", () => {
      assert.equal(cAcc.getBalance(), 500);
      cAcc.withdraw(500);
      assert.equal(cAcc.getBalance(), 0);
    });
    it("withdraw money with a 0 balance but within overdraft limit should put account in negative balance", () => {
      assert.equal(cAcc.getBalance(), 500);
      cAcc.withdraw(500);
      assert.equal(cAcc.getBalance(), 0);
      assert.equal(cAcc.getOverdraftLimit(), 100);
      cAcc.withdraw(80);
      assert.equal(cAcc.getBalance(), -80);
      cAcc.deposit(80);
      assert.equal(cAcc.getBalance(), 0);
    });
    it("withdraw money with a 0 balance and over overdraft limit should throw an error", () => {
      assert.equal(cAcc.getBalance(), 500);
      cAcc.withdraw(500);
      assert.equal(cAcc.getBalance(), 0);
      assert.equal(cAcc.getOverdraftLimit(), 100);
      assert.throws(() => cAcc.withdraw(105), Error, "Insufficient funds");
    });
    it("withdraw negative money should throw an error", () => {
      assert.equal(cAcc.getBalance(), 500);
      assert.throws(() => cAcc.withdraw(-200), RangeError, "Withdraw amount has to be greater than zero");
    });
  });
  
  describe("toString", () => {
    it("should return the account number, balance and overdraft limit", () => {
      assert.equal(cAcc.getNumber(), 123);
      assert.equal(cAcc.getBalance(), 500);
      assert.equal(cAcc.getOverdraftLimit(), 100);
      assert.equal(cAcc.toString(), "Account 123: balance 500 overdraft limit 100");
    });
  });

  describe("endOfMonth", () => {
    it("return an empty string for normal balance", () => {
      assert.equal(cAcc.endOfMonth(), "");
    });
    it("return a warning for negative balance", () => {
      assert.equal(cAcc.getNumber(), 123);
      assert.equal(cAcc.getBalance(), 500);
      assert.equal(cAcc.getOverdraftLimit(), 100);
      cAcc.withdraw(580);
      assert.equal(cAcc.getBalance(), -80);
      assert.equal(cAcc.endOfMonth(), "Warning, low balance CheckingAccount 123: balance: -80 overdraft limit: 100")
    });
  });
});

describe("test Bank", () => {
  let bank;
  before(() => {
    bank = new Bank();
  });

  describe("addAccount", () => {
    it("add a new account", () => {
      assert.equal(Bank.nextNumber, 100);
      assert.equal(bank.addAccount(), 100);
      assert.equal(Bank.nextNumber, 101);
      assert.equal(bank.accounts.length, 1);
      assert.equal(bank.accounts[0].getBalance(), 0);
    });
  });

  describe("addSavingsAccount", () => {
    it("add a new savings account", () => {
      assert.equal(Bank.nextNumber, 101);
      assert.equal(bank.addSavingsAccount(1.2), 101);
      assert.equal(Bank.nextNumber, 102);
      assert.equal(bank.accounts.length, 2);
      assert.equal(bank.accounts[1].getBalance(), 0);
      assert.equal(bank.accounts[1].getInterest(), 1.2);
    });
  });

  describe("addCheckingAccount", () => {
    it("add a new checking account", () => {
      assert.equal(Bank.nextNumber, 102);
      assert.equal(bank.addCheckingAccount(150), 102);
      assert.equal(Bank.nextNumber, 103);
      assert.equal(bank.accounts.length, 3);
      assert.equal(bank.accounts[2].getBalance(), 0);
      assert.equal(bank.accounts[2].getOverdraftLimit(), 150);
    });
  });

  describe("closeAccount", () => {
    it("given an existing account number should remove the account", () => {
      assert.equal(bank.accounts.length, 3);
      bank.closeAccount(101);
      assert.equal(bank.accounts.length, 2);
      assert.equal(bank.accounts[0].getNumber(), 100);
      assert.equal(bank.accounts[1].getNumber(), 102);
    });
    it("given an invalid account number should do nothing", () => {
      assert.equal(bank.accounts.length, 2);
      bank.closeAccount(101);
      assert.equal(bank.accounts.length, 2);
      assert.equal(bank.accounts[0].getNumber(), 100);
      assert.equal(bank.accounts[1].getNumber(), 102);
    });
  });

  describe("accountReport", () => {
    it("return a string with each account on its own line", () => {
      assert.equal(bank.accounts.length, 2);
      assert.equal(bank.accounts[0].getNumber(), 100);
      assert.equal(bank.accounts[1].getNumber(), 102);
      bank.addSavingsAccount(1.3);
      assert.equal(bank.accounts.length, 3);
      assert.equal(bank.accounts[2].getNumber(), 103);
      assert.equal(bank.accountReport(),
        "Account 100: balance 0\n" +
        "Account 102: balance 0 overdraft limit 150\n" +
        "Account 103: balance 0 interest 1.3\n");
    });
  });

  describe("endOfMonth", () => {
    it("return a endOfMonth report for each account on its own line", () => {
      assert.equal(bank.accounts.length, 3);
      bank.accounts[1].withdraw(50);
      assert.equal(bank.endOfMonth(),
        "\n" +
        "Warning, low balance CheckingAccount 102: balance: -50 overdraft limit: 150\n" +
        "Interest added SavingsAccount 103: balance: 0 interest: 1.3\n");
    });
  });
});
