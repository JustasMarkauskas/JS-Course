// Lecture: let and const

//ES5 
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

//ES6

// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'jane Miller';
// console.log(name6);

//ES5 

function driverLicence5(passedTest){
    if (passedTest){
        
        var firstName5 = 'John';
        var yearOfBirth5 = 1989;
        
    }
    console.log(firstName5+ ', born in '+yearOfBirth5 +', is now officialy allowed to drive a car.');

}

driverLicence5(true);

//ES6

function driverLicence6(passedTest){
    let firstName6;
    const yearOfBirth6 = 1989;
    if (passedTest){
        firstName6 = 'John';               
    }
    console.log(firstName6 + ', born in '+yearOfBirth6 +', is now officialy allowed to drive a car.');
}

driverLicence6(true);


let i = 23;

for(let i=0; i<5; i++){
    console.log(i);
}

//console.log(i);

//Lecture: IIFEs
//ES6
{
    const a = 1;
    let b = 2;
    var c=3;
}

//console.log(a + b);
console.log(c);

//ES5
(function(){
    var c=3;
})

//console.log(c);

// Lecture: Strings in ES6
let firstName = 'Justas';
let lastName = 'Markauskas';
const yearOfBirth = 1989;
function calcAge(year){
    return 2020-year;
}

//ES5

console.log('This is '+firstName+' '+lastName+'. He was born in '+yearOfBirth+'. Today he is '+calcAge(yearOfBirth)+' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));  

console.log(n.endsWith('as'));  

console.log(n.includes(' '));  
console.log(firstName.repeat(5));  


//Lecture: Arrow functions

const years = [1952, 1953, 1976, 1977, 1981, 1985, 1989];

// ES5

var ages5 = years.map(function(el){
    return 2020-el;
})

console.log(ages5);

// ES6
let ages6 = years.map(el=>2020-el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index +1}: ${2020 - el}.`)

console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index +1}: ${age}.`
});
console.log(ages6);

// Lecture: Arrow functions 2

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
       
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position+ ' and it is ' + self.color;
            alert(str);
        })
    }
}

//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
               
        document.querySelector('.green').addEventListener('click', ()=>
        {
            var str = 'This is box number ' + this.position+ ' and it is ' + this.color;
            alert(str);
        })
    }
}
box6.clickMe();


function Person(name){
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Gintare', 'Edmundas', 'Inesa', 'Karolis'];
new Person('Justas').myFriends5(friends);


//ES6
Person.prototype.myFriends6 = function(friends){

    var arr = friends.map(el=> `${this.name} is a friend with ${el}`);
    console.log(arr);
}

new Person('Morkis').myFriends6(friends);


//Lecture: Destructuring

//ES5 
var john =['John', 31];
var name = john[0];
var age = john[1];


//ES6 

const [name6, age6]=['John', 31];
console.log(name6);
console.log(age6);

const obj = {
    firstName12: 'Justas', 
    lastName12: 'Markauskas'
};

const {firstName12, lastName12} = obj;
console.log(firstName12);
console.log(lastName12);

const {firstName12: a, lastName12: b} = obj;

console.log(a);
console.log(b);

function calcAgeRetirement(year){
    const age = new Date().getFullYear()-year;
    return[age, 65-age];    
}

const [age2, retirement] = calcAgeRetirement(1989);
console.log(age2);
console.log(retirement);


//Lecture: Arrays ES6

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// })

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5 

// for (var j=0; j< boxesArr5.length; j++){

//     if(boxesArr5[j].className === 'box blue'){
//         continue;
//     }

//     boxesArr5[j].textContent = 'I changed to blue!';

// }

//ES6

for(const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue with ES6!!!';
}



//ES5 

var ages = [12,17,8,21,14,11];

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6 
ages.findIndex(cur => cur >= 18);

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));



//Lecture: Spread operator

function addFourAges (a,b,c,d){
    return a+b+c+d;
}

var sum1 = addFourAges (68,67,31,29)

console.log(sum1);

//ES5 

var ages13 = [68,67,31,29];
var sum2 = addFourAges.apply(null, ages13);
console.log(sum2);
//

//ES6

const sum3 = addFourAges(... ages13);
console.log(sum3);

const familySmith = ['Justas', 'Gintare','Fanta'];
const familyMiller = ['Mark', 'Bob', 'Emily'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes2 = document.querySelectorAll('.box');

const all = [h, ...boxes2];
//console.log(all);

Array.from(all).forEach(cur => cur.style.color = 'purple');

//Lecture: REST parameters

//ES5 

function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log((2020-cur)>=18);
    })
}

isFullAge5(1990,2017,1965);




























