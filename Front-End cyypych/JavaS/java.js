// let imya = prompt('Как тебя зовут?', 'Введи имя');
// alert(`Тебя зовут ${imya} !`); 

// let answer = prompt('Кого я люблю больше всего на свете?', 'Писать в именительном падеже с большой буквы!');
// if (answer == 'Саша') {
//     alert('Верно верно верно! Люблю люблюююю тебя!');
// }  else {
//     alert('Подумай лучше, САША!');
// }

// let java = prompt('Какое «официальное» название JavaScript?');
// if (java == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAScript!');
// }

// let numb = prompt('Введите число');
// if (numb > 0) {
//     alert(1);
// } else if(numb < 0) {
//     alert(-1);
// } else if(numb == 0) {
//     alert(0);
// } else {
//     alert('Error')
// }
    
// let age = prompt('Сколько тебе лет?');
// // if (age >= 14 && age <= 90) {
// //     alert('Привет, гражданин!');
// // } else {
// //     alert('Ты кто?')
// // }


// let who = prompt('Кто там?');
//    if (who == 'Админ') { 
//         let passw = prompt('Пароль?');
//         if (passw == 'Я Главный') {
//             alert('Здравствуйте!')
//         } else if (passw == '' || passw == null) {
//             alert('Отмена')
//         } else {
//             alert('Неверный пароль')
//         }
// } else if (who == '' || who == null) {
//             alert('Отмена')
// } else {
//             alert('Я вас не знаю')}


// for (let i = 2; i <= 10; ++i) {
//     if (i % 2) continue;
//     alert(i);
// }

// let c = 0
// while (c < 3) {
//     alert(`Number ${c}!`);
//     c++;
// }
 
// do { num = prompt('Введите число больше 100');
// } while (num <= 100 && num);

// n = 10
// nextPrime:
// for(let i = 2; i <= n; i++) {
// for (let j = 2; j < i; j++) {
//     if (i % j == 0 ) continue nextPrime
// }
// alert(i);
// }

// let love = ('Сколько я буду любить Сашу?');
// alert (love);
// for (let l = 5; l < 100000; l++){
// alert ('Я буду любить Сашу ' + l + ' лет!');
// }

// let browser = prompt('Введите ваш браузер')
// if (browser === 'Edge') {
//     alert ("You've got the Edge");
// }else if (browser == 'Chrome' 
//         || browser == 'Firefox' 
//         || browser == 'Safari'
//         || browser == 'Opera') {
//     alert ('Okay we support these browsers too!');
// }else {
//     alert ('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число от 0 до 3')
// switch(number) {
//     case 0:
//         alert('Вы ввели число 0')
//         break;
//     case 1:
//         alert('Вы ввели число 1')
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3')
//         break;
// }



//   function checkAge(age) {
//    return (age > 18) ? true : confirm('Родители разрешили?')
//   }

//   function checkAge(age) {
//     return age > 18 || confirm('Родители разрешили?')
//   }

// let age = prompt('Ваш возраст?')


// if ( checkAge(age) ) {
//     alert ('Да');
//     } else {
//     alert('Нет');
//     }

// function minNumb(a, b) {
//     if (a > b) {
//         alert(a + ' больше')
//     } else {
//         alert (b + ' больше')
//     }
// }
    
// minNumb(67, 5);




//   let ask = (question, yes, no) => confirm(question) ? yes() : no();
//     ask("Вы согласны?", 
//         () => alert('Вы согласились'),
//         () => alert('Вы отменили выполнение')
//         );

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete"
// delete user.name;


// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     } 
    
//     return true;
// }

// let some = {}
// alert (isEmpty(mama));

// let empl = {
//     akd: fhog,
// }
// alert (isEmpty(dad));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//  let sum = 0
//  for (let key in salaries) {
//     sum += salaries[ key ];
//  }
 
//  alert (sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
 
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//             obj[key] *=2;
//         }
//     } 
  
//   }

//   multiplyNumeric(menu)
//     alert (menu.width)
//     alert (menu.height)
//     alert (menu.title)


// let year = {     // Клонирование объектов
//   first: 'winter',
//   second: 'spring',
// };

// let god = {
//   third: 'summer',
//   fourth: 'autmn',
// };

// let clone = {};

// for (let key in year) {
//   clone[key] = year[key];
// }

// alert(clone.first);

// Object.assign(clone, god);

// for (let key in clone) {
//   alert(clone[key])
// };



// let karbonara = {     // Вложенное клонирование
//   lapsha: '500g',
//   bacon: '150g',
//   souse: {
//     milk: '100ml',
//     egg: '2 pices',
//   }
// };

// let clon = {};

// for (let key in karbonara) {
//   clon[key] = karbonara[key];
//   if (key == Object) {
//     let clonin = {};
//     for (let pen in key) {
//       clonin[pen] = key[pen]
//     }
//   }
// }

// for (let key in clon) {
//   alert(clon[key]);
//   if (typeof clon[key] === 'object') {
//   for (let pen in (clon[key])) {
//     alert ((clon[key])[pen])
//   }
// }
// }






// let karbonara = {     // Вложенное клонирование с использованием structuredClone
//     lapsha: '500g',
//     bacon: '150g',
//     souse: {
//       milk: '100ml',
//       egg: '2 pices',
//     }
//   };

//   const clone = structuredClone(karbonara);

//   for (let key in clone) {
//     alert(clone[key])
//     if (typeof clone[key] === 'object') {  // Использование только typeof (???)
//       for (let pen in (clone[key])) {
//         alert ((clone[key])[pen])
//       }
//     }
//   }


// let calculator = {
//   read() {
//     this.first = prompt('Введите первое число');
//     this.second = prompt('Введите второе число');
//   },
//   sum() {
//     return (+(this.first) + +(this.second))
//   },
//   mull() {
//     return (this.first * this.second)
//   },
// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mull());


// function Calculator() {
//     this.read = function() {
//         this.a = +prompt ('a?', '0')
//         this.b = +prompt ('b?', '0')
//     }
//     this.sum = function() {
//         return(this.a + this.b)
//     }
//     this.mul = function() {
//         return(this.a * this.b)

//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// function Accumulator(startingValue) {
//     this.value = startingValue,
//     this.read = function(){
//         newValue = +prompt('Ввведите число');
//         this.value += newValue;
//     }
    
// }

// let accumulator = new Accumulator(2); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read();
// accumulator.read();
// accumulator.read(); 

// alert(accumulator.value); // выведет сумму этих значений

// let User = {
//     name: 'Bob',
//     adress: {
//         street: 'Right',
//         appartament: '34',
//         flour: '2',

//     },
//     loveCake() {
//         alert('true');
//     },
// };

// let User2 = {};

//  delete User.adress.flour;

//  alert(User.adress?. street);
//  User.loveCake();
//  User2.loveCake?.();
//  alert(User.adress.appartament);

let sym = Symbol('name');

let obj = {
    name: 'Roby',
    age: '15',
    [sym]: 'hi',
}

let clone = {};

Object.assign(clone, obj);

alert(clone[sym]);

alert(sym.description);

