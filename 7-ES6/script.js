// // Lecture: let and const

// //ES5 
// // var name5 = 'Jane Smith';
// // var age5 = 23;
// // name5 = 'Jane Miller';
// // console.log(name5);

// //ES6

// // const name6 = 'Jane Smith';
// // let age6 = 23;
// // name6 = 'jane Miller';
// // console.log(name6);

// //ES5 

// function driverLicence5(passedTest){
//     if (passedTest){
        
//         var firstName5 = 'John';
//         var yearOfBirth5 = 1989;
        
//     }
//     console.log(firstName5+ ', born in '+yearOfBirth5 +', is now officialy allowed to drive a car.');

// }

// driverLicence5(true);

// //ES6

// function driverLicence6(passedTest){
//     let firstName6;
//     const yearOfBirth6 = 1989;
//     if (passedTest){
//         firstName6 = 'John';               
//     }
//     console.log(firstName6 + ', born in '+yearOfBirth6 +', is now officialy allowed to drive a car.');
// }

// driverLicence6(true);


// let i = 23;

// for(let i=0; i<5; i++){
//     console.log(i);
// }

// //console.log(i);

// //Lecture: IIFEs
// //ES6
// {
//     const a = 1;
//     let b = 2;
//     var c=3;
// }

// //console.log(a + b);
// console.log(c);

// //ES5
// (function(){
//     var c=3;
// })

// //console.log(c);

// // Lecture: Strings in ES6
// let firstName = 'Justas';
// let lastName = 'Markauskas';
// const yearOfBirth = 1989;
// function calcAge(year){
//     return 2020-year;
// }

// //ES5

// console.log('This is '+firstName+' '+lastName+'. He was born in '+yearOfBirth+'. Today he is '+calcAge(yearOfBirth)+' years old.');

// //ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith('J'));  

// console.log(n.endsWith('as'));  

// console.log(n.includes(' '));  
// console.log(firstName.repeat(5));  


// //Lecture: Arrow functions

// const years = [1952, 1953, 1976, 1977, 1981, 1985, 1989];

// // ES5

// var ages5 = years.map(function(el){
//     return 2020-el;
// })

// console.log(ages5);

// // ES6
// let ages6 = years.map(el=>2020-el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index +1}: ${2020 - el}.`)

// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index +1}: ${age}.`
// });
// console.log(ages6);

// // Lecture: Arrow functions 2

// //ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
       
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position+ ' and it is ' + self.color;
//             alert(str);
//         })
//     }
// }

// //box5.clickMe();

// //ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
               
//         document.querySelector('.green').addEventListener('click', ()=>
//         {
//             var str = 'This is box number ' + this.position+ ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// }
// box6.clickMe();


// function Person(name){
//     this.name = name;
// }

// //ES5
// Person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Gintare', 'Edmundas', 'Inesa', 'Karolis'];
// new Person('Justas').myFriends5(friends);


// //ES6
// Person.prototype.myFriends6 = function(friends){

//     var arr = friends.map(el=> `${this.name} is a friend with ${el}`);
//     console.log(arr);
// }

// new Person('Morkis').myFriends6(friends);


// //Lecture: Destructuring

// //ES5 
// var john =['John', 31];
// var name = john[0];
// var age = john[1];


// //ES6 

// const [name6, age6]=['John', 31];
// console.log(name6);
// console.log(age6);

// const obj = {
//     firstName12: 'Justas', 
//     lastName12: 'Markauskas'
// };

// const {firstName12, lastName12} = obj;
// console.log(firstName12);
// console.log(lastName12);

// const {firstName12: a, lastName12: b} = obj;

// console.log(a);
// console.log(b);

// function calcAgeRetirement(year){
//     const age = new Date().getFullYear()-year;
//     return[age, 65-age];    
// }

// const [age2, retirement] = calcAgeRetirement(1989);
// console.log(age2);
// console.log(retirement);


// //Lecture: Arrays ES6

// const boxes = document.querySelectorAll('.box');

// //ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// // boxesArr5.forEach(function(cur){
// //     cur.style.backgroundColor = 'dodgerblue';
// // })

// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// //ES5 

// // for (var j=0; j< boxesArr5.length; j++){

// //     if(boxesArr5[j].className === 'box blue'){
// //         continue;
// //     }

// //     boxesArr5[j].textContent = 'I changed to blue!';

// // }

// //ES6

// for(const cur of boxesArr6){
//     if (cur.className.includes('blue')){
//         continue;
//     }
//     cur.textContent = 'I changed to blue with ES6!!!';
// }



// //ES5 

// var ages = [12,17,8,21,14,11];

// var full = ages.map(function(cur){
//     return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// //ES6 
// ages.findIndex(cur => cur >= 18);

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));



// //Lecture: Spread operator

// function addFourAges (a,b,c,d){
//     return a+b+c+d;
// }

// var sum1 = addFourAges (68,67,31,29)

// console.log(sum1);

// //ES5 

// var ages13 = [68,67,31,29];
// var sum2 = addFourAges.apply(null, ages13);
// console.log(sum2);
// //

// //ES6

// const sum3 = addFourAges(... ages13);
// console.log(sum3);

// const familySmith = ['Justas', 'Gintare','Fanta'];
// const familyMiller = ['Mark', 'Bob', 'Emily'];
// const bigFamily = [...familySmith, ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes2 = document.querySelectorAll('.box');

// const all = [h, ...boxes2];
// //console.log(all);

// Array.from(all).forEach(cur => cur.style.color = 'purple');

// //Lecture: REST parameters
// /*
// //ES5 

// function isFullAge5(){
//     //console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur){
//         console.log((2020-cur)>=18);
//     })
// }

// // isFullAge5(1990,2017,1965);

// // isFullAge5(1990,2017,1965,2008,1970);


// // ES6

// function isFullAge6(...years){
//     years.forEach(cur=>console.log((2020-cur)>=18));
    
// }



// isFullAge6(1990,2017,1965,2008,1970);
// */


// //ES5 

// function isFullAge5(limit){
//     //console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments, 1);
//     //console.log(argsArr);

//     argsArr.forEach(function(cur){
//         console.log((2020-cur)>=limit);
//     })
// }


// //isFullAge5(21, 1990,2017,1965,2008,1970,2000);


// // ES6

// function isFullAge6(limit, ...years){
//     years.forEach(cur=>console.log((2020-cur)>=limit));
    
// }


// isFullAge6(18, 1990,2017,1965,2008,1970);



// //Lecture: Default parameters

// //ES5
// /*
// function SmithPerson(firstName33, yearOfBirth33, lastName33, nationality){

//     lastName33 === undefined ? lastName33 = 'Markauskas' : lastName33 = lastName33;
//     nationality === undefined ? nationality = 'Lithuanian' : nationality = nationality;

//     this.firstName33 = firstName33;
//     this.lastName33 = lastName33;
//     this.yearOfBirth33 = yearOfBirth33;
//     this.nationality = nationality;
// }


// var justas = new SmithPerson('Justas', 1989);

// var gintare = new SmithPerson('Gintare', 1991, 'Salkauskaite', 'Latvian');
// */
// // ES6
// function MarkauskasPerson(firstName33, yearOfBirth33, lastName33='Markauskas', nationality='lithuanian'){
//     this.firstName33 = firstName33;
//     this.lastName33 = lastName33;
//     this.yearOfBirth33 = yearOfBirth33;
//     this.nationality = nationality;
// }


// var justas = new MarkauskasPerson('Justas', 1989);

// var gintare = new MarkauskasPerson('Gintare', 1991, 'Salkauskaite', 'Latvian');


// //Lecture: MAP 

// const question = new Map();
// question.set('question', 'What is the oficial name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer!!!');
// question.set(false, 'Wrong, try again!');

// console.log(question.get('question'));
// //console.log(question.size);

// if(question.has(4)){
//     // question.delete(4);

// }

// // question.clear();

// //question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


// for (let [key, value] of question.entries()){
//     if(typeof(key)=== 'number'){
//         console.log(`Answer ${key}: ${value}`)
//     }
// }


// //const ans = parseInt(prompt('Write the correct answer'));

// //console.log(question.get(ans === question.get('correct')));


// //Lecture: Classes

// //ES5 

// // var Person5 = function(name44, yearOfBirth44, job44){
// //     this.name44 = name44;
// //     this.yearOfBirth44 = yearOfBirth44;
// //     this.job44 = job44;
// // }

// // Person5.prototype.calculateAge = function(){
// //     var age = new Date().getFullYear() - this.yearOfBirth44;
// //     console.log(age);
// // }

// // var Justas5 = new Person5('Justas', 1989, 'developer');

// // console.log(Justas5);
// // Justas5.calculateAge();
// //ES6

// // class Person6 {
// //     constructor(name66, yearOfBirth66, job66 ){
// //         this.name66 = name66,
// //         this.yearOfBirth66 = yearOfBirth66,
// //         this.job66 = job66
// //     }

// //     calculateAge6(){
// //         var age6 = new Date().getFullYear() - this.yearOfBirth66;
// //         console.log(age6);
// //     }
// //     static greeting(){
// //         console.log('Hey there');
// //     }
// // }

// // const Justas6 = new Person6('Justas', 1989, 'Developer');

// // Person6.greeting();
// // Justas6.calculateAge6();


// //Lecture: Classes and SubClasses

// //ES5

// var Person5 = function(name44, yearOfBirth44, job44){
//     this.name44 = name44;
//     this.yearOfBirth44 = yearOfBirth44;
//     this.job44 = job44;
// }

// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth44;
//     console.log(age);
// }

// var Athlete5 = function(name44, yearOfBirth44, job44, olympicGames, medals){
//     Person5.call(this, name44,yearOfBirth44, job44);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }



// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function(){
//     this.medals++;
//     console.log(this.medals);
// }

// var JustasAthlete5 = new Athlete5('Justas', 1989, 'swimmer', 3, 10);

// JustasAthlete5.calculateAge();
// JustasAthlete5.wonMedal()


// // ES6
// class Person6 {
//     constructor(name66, yearOfBirth66, job66 ){
//         this.name66 = name66,
//         this.yearOfBirth66 = yearOfBirth66,
//         this.job66 = job66
//     }

//     calculateAge6(){
//         var age6 = new Date().getFullYear() - this.yearOfBirth66;
//         console.log(age6);
//     }       
// }

// class Athlete6 extends Person6{
//     constructor(name66, yearOfBirth66, job66, olympicGames66, medals66){
//         super(name66, yearOfBirth66, job66);
//         this.olympicGames66 = olympicGames66;
//     this.medals66 = medals66;
//     }
//     wonMedal66(){
//         this.medals66++;
//         console.log(this.medals66);
//     }
// }


// const JustasAthlete6 = new Athlete6('Gintare', 1991, 'Runner', 5, 15);

// JustasAthlete6.wonMedal66();
// JustasAthlete6.calculateAge6();

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

//susikuriam bendra klase parkams ir gatvems(name, buidYear)
class Element {
    constructor(name, buidYear) {
        this.name = name;
        this.buidYear = buidYear;    
    }
}

//susikuriam parku klase ir extendinam bendraja klase papildomi laukai yra plotas ir medziu skaicius kuriu reikes kad suskaiciuoti mediu tankuma.
class Park extends Element{
    constructor (name, buidYear, area, numTrees){
        super(name, buidYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treesDensity(){
        const density = this.numTrees / this.area;
        console.log(`${this.name} parka has a tree density of ${density} trees per square kilometers`);
    }
}


// Susikuriam gatves klase kuri extendins bendraja, o nauji kintamieji bus ilgis ir dydis, pasirasom gatves klasifikatoriu.

class Street extends Element{
    constructor(name, buidYear, length, size=3){
        super(name, buidYear);
        this.length = length;
        this.size = size;
    }

    streetClasify(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name} street, build in ${this.buidYear}, is a ${classification.get(this.size)} street.`);
    }
}


//Parku ir Gatviu masyvai
const allParks = [new Park('Reformatu Park',1987, 0.5, 215),
                new Park('Vingio Park', 1965, 1.62, 6541),
                new Park('Ozo Park', 2015, 0.4, 949)];

const allStreets = [new Street('Antakalnio', 1905, 3.2, 4),
                    new Street('Naugarduko', 1975, 2.2, 2),
                    new Street('Jogailos', 1930, 0.34),
                    new Street('Zirmunu', 1982, 3.7, 5)];


//Funkcija kuri skaiciuoja total ir average 
function calc(arr){
    const sum = arr.reduce((prev, cur, index)=>prev + cur,0);
    return [sum, sum /arr.length];
}


//Sukuriam funkcija kuri rasys reportus apie Parkus

function parkReports(p){
    console.log('=========PARKS REPORT=========');

    //Parku tankumas
    p.forEach(el => el.treesDensity());
    
    //Skaiciujam vidutini parku amziu.
    const ages = p.map(el => new Date().getFullYear()-el.buidYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    //Issiaiskinam kuris parkas turi daugiau nei 1000 medziu

    const i = p.map(el => el.numTrees).findIndex(el => el>=1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

//Sukuriam funkcija kuri rasys reportus apie Gatves

function streetsReport(s){
    console.log('=========STREETS REPORT=========');

    //klasifikuojam gatves
    s.forEach(el => el.streetClasify());

    //Bendras ir vidutinis pateiktu gatviu ilgis
    const[totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km`);
   
}



//Iskvieciam parku ir gatviu reportus
parkReports(allParks);
streetsReport(allStreets);
