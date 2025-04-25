
// 1

let bankAccount = {
  ownerName: "Іван",
  accountNumber: "UA123456789",
  balance: 1000,

  deposit: function () {
    let sum = prompt("Скільки хочеш додати?");
    sum = Number(sum);
    bankAccount.balance = bankAccount.balance + sum;
    alert("Баланс зараз: " + bankAccount.balance + " грн");
  },

  withdraw: function () {
    let amount = prompt("Скільки хочеш зняти?");
    amount = Number(amount);
    bankAccount.balance = bankAccount.balance - amount;
    alert("Баланс зараз: " + bankAccount.balance + " грн");
  }
};

let doDeposit = confirm("Поповнити рахунок?");
if (doDeposit) {
  bankAccount.deposit();
}

let doWithdraw = confirm("Зняти гроші?");
if (doWithdraw) {
  bankAccount.withdraw();
}
// 2

let weather = {
  temperature: 0,
  humidity: 60,
  windSpeed: 10,

  checkCold: function () {
    if (weather.temperature < 0) {
      return true;
    } else {
      return false;
    }
  }
};

let temp = prompt("Введи температуру:");
weather.temperature = Number(temp);

if (weather.checkCold()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура 0 або вище градусів Цельсія");
}

// 3
let user = {
    name: "Анна",
    email: "anna@example.com",
    password: "12345",
  
    login: function () {
      let inputEmail = prompt("Введи email:");
      let inputPassword = prompt("Введи пароль:");
      if (inputEmail === user.email && inputPassword === user.password) {
        alert("Вхід успішний!");
      } else {
        alert("Email або пароль неправильні.");
      }
    }
  };
  
  user.login();

// 4
let movie = {
  title: "Володар перснів",
  director: "Пітер Джексон",
  year: 2001,
  rating: 9.0,

  isGoodMovie: function () {
    if (movie.rating > 8) {
      return true;
    } else {
      return false;
    }
  }
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);

if (movie.isGoodMovie()) {
  console.log("Цей фільм має високий рейтинг!");
} else {
  console.log("Фільм не має дуже високого рейтингу.");
}
  

