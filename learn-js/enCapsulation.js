class BanKAccount {
  #balance; //با این کار این بالانس رو پرایوت یبا شخصی کردیم برای این کلاس
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }else{
      
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const account = new BanKAccount(10000);
// console.log(account.balance, "balance");
const a = account.deposite(1000);
console.log(account.getBalance());
