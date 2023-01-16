// Task1
let user = {};
let properties = ['имя', 'возраст', 'пол'];

for (let i = 0; i < properties.length; i++) {
    let input = prompt(`Введите ваш ${properties[i]}:`);
    user[properties[i]] = input;
}
console.log(user)

// Task 2
let input = prompt("Введите число:");

if (input === null || input === "") {
    alert("Это не число.");
} 
else {
    alert("Вы ввели число: " + input);
}

// Task 3
let a = +prompt('a?', '');
console.log(a)
a = +a
console.log(a)

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}

// Task 4
let sum = 0;

for (let i=1; i<=100; i++) {
    sum +=i;
}
console.log(sum)

// Task 5
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }