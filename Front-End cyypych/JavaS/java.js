'use strict'

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

// let accumulator = new Accumulator(2); // начальное значение 2

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

// let sym = Symbol('name');

// let obj = {
//     name: 'Roby',
//     age: '15',
//     [sym]: 'hi',
// }

// let clone = {};

// Object.assign(clone, obj);

// alert(clone[sym]);

// alert(sym.description);

// let obj1 = {
//     age: 4,
//     valueOf() {
//         return this.age
//     }
// }

// alert(obj1 * 4)


// let a = +prompt('a?');
// let b = +prompt('b?');

// if (!isFinite(a)) {
//     alert('Ожидался ввод чисел')
// } else if(!isFinite(b)) {
//     alert('Ожтдался ввод чисел')
// }else {
//     alert (a + b)
// }


// function readNumber() {
//     let num;
//     do {
//         num = prompt('Введите число', 0)
//     } while (!isFinite(num))

//     if (num === null || num === '') return null;

//     return +num;
// };

// alert(`Число: ${readNumber()}`)


// let i = 0;
// while (i != 10) {
//  alert( i += 0.2);
// }
// for (let i = 0; i != 10; i += 0.2) {
//     alert(i);
// }

// function random(min, max) {
//     return min + Math.random() * (max - min);
// }

// alert(random(5, 7))
// alert(random(5, 7))
// alert(random(5, 7))

// function random(min, max) {
//     return ((min + Math.random() * (max - min)).toFixed(0));

// }

// alert(random(3, 10))
// alert(random(3, 10))
// alert(random(3, 10))

// let str = 'Alla'
// let str2 = 'Betta'

// alert(str.localeCompare(str2))
// alert(str < str2)

// function ucFirst(str) {
//     return (str[0].toUpperCase() + str.slice(1))
// }
// alert(ucFirst('lada'))
// alert(ucFirst('balasrt'))
// alert(ucFirst('foxFriedPip'))



// function checkSpam(str) {
//     str = str.toLowerCase()

//    if (str.includes('viagra') || str.includes('xxx')) {
//     return true
//    } else {
//     return false 
//    }
// } 

// alert(checkSpam('buy ViAgRA now'))
// alert (checkSpam('free xxxxx'))
// alert ( checkSpam("innocent rabbit"))
// alert( checkSpam('vIagRa buy'))
// alert( checkSpam('xXxXXXx'))
// alert( checkSpam('i love you'))



// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         str = (str.slice(0, (maxlength - 3))) + ('...');
//         return str;
//     } else {
//         return str;
//     }
// }

// alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 5))


// function extractCurrencyValue(str) {
//    return +str.slice(1)
// }

// alert( extractCurrencyValue('$150'))



// let styles = ['Джаз','Блюз'];

// styles.push('Рок-н-ролл');

// styles[(Math.floor(styles.length/2))] = 'Классика'

// alert(styles.shift())

// styles.unshift('Рэп','Рэгги')

// alert(styles)



// function camelsize(str) {
//     return str

//     .split('-')

//     .map( (item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))

//     .join('');

// }

// alert(camelsize('back-ground-color'))


// function filterRange(arr, a, b) {
//     let arrFiltered = arr.filter(item => item >= a && item <= b);
//     return arrFiltered;
// }

// let non = [3, 6, 12, 89, 5, 7, 2, 13];

// let newNon = filterRange(non, 5, 15);

// alert(newNon);
// alert (non);




// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] >= b || arr[i] <= a) {
//             arr.splice(i, 1);
//               i--; //нужен чтобы сместить элементы по индексу влево при удалении, чтобы не быо пустот и проверка была правильной
//         }
        
//     }
// }

// let non = [3, 6, 12, 89, 5, 7, 2, 13];

// filterRangeInPlace(non, 5, 15);

// alert(non);




// function sortNum(arr) {

//     arr.sort((a, b) => b - a);
// }

// let arr = [4, 98, 23, -2, -35, 35, 25];

// sortNum(arr);

// alert( arr );





// function copySorted(arr) {
//     let newCopy = arr.slice();
//     newCopy.sort();
//     return newCopy;
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); 
// alert( arr ); 



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); 





// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map( user => (
//     {fullName: user.name + ' ' + user.surname,
//      id: user.id,

// }))

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин




// function sortByAge(users) {
//     users.sort((a,b) => a.age - b.age)
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


// function getAvarageAge(users) {
//    let ages = users.map(item => item.age)   
//    let result = Math.round(ages.reduce((sum, item) => sum + item, 0)/users.length) 
      //решение получше: return Math.round(users.reduce((sumAver, item) => sumAver + item, 0) / user.lenght)
//    return result
// }

// let vasya = { name: "Вася", age: 56 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];
 
// alert( getAvarageAge(arr) )



// function unique(arr) {
//    return arr.filter((item, i) => i === arr.indexOf(item))
    
// }


// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O



// function groupById(arr) {
//    return arr.reduce((obj, item) => {
//         obj[item.id] = item;
//         return obj;
//     }, {})
// }

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
//   let usersById = groupById(users);

//   alert (usersById)




// function unique(arr) {
//     let set = new Set();
//     arr.forEach(item => set.add(item));

//     let newArr = [];

//     for (let uniq of set) {
//         newArr.push(uniq);
//     }

//     return newArr;

//     // решение учебника: return Array.from(new Set(arr));

// }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) ); // Hare,Krishna,:-O
  




// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// alert(keys)




function aclean(arr) {
let map = new Map()
let map2 = new Map() 

for (let item of arr) {
  map.set(item, item)
 }

map.forEach(function(value, key){
  key = key.toLowerCase().split('').sort().join('');
  map2.set(key, value)
  
})

return Array.from(map2.values())

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let paap = ['мама', 'внуЧка','Деда', 'пАпа', 'ппаа', 'едад', 'кот', 'ток', 'отк', 'пора'];

alert( aclean(arr) );
alert( aclean(paap))

