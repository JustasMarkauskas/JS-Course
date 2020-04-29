/*****************************************************************************************
******************************************************************************************
******************************************************************************************
*********************61. Creating Objects: Function Constructors**************************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/



/*
var john = {
    name: 'John',
    yearOfBirth: 1989,
    job: 'teacher'
};
*/

/*

// Function constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
//creating object with constructor.

Person.prototype.calculateAge  = function(){
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';



var john = new Person('John', 1989, 'teacher');
var jane = new Person('Jane', 1953, 'Designer');
var mark = new Person('Mark', 1952, 'retired');

console.log(john, jane, mark);

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Susikuriam savo funkcini konstruktoriu
var Game = function(title, yearOfRealese, genre){
    this.title = title;
    this.yearOfRealese = yearOfRealese;
    this.genre = genre;
}

// Susikuriam savo naujus objectus
var pubg = new Game('PUBG', 2017, 'BattleRoyale');
var theWitcher3 = new Game('The Witcher 3', 2016, 'RPG');
var csGo = new Game('CS:GO', 2010, 'FPS');



Game.prototype.calculateYears = function(){
    console.log(2019-this.yearOfRealese);
};

pubg.calculateYears();
theWitcher3.calculateYears();
csGo.calculateYears();

Game.prototype.console = 'PC';

console.log(pubg.console);
console.log(theWitcher3.console);
console.log(csGo.console);

console.log(pubg, theWitcher3, csGo);


*/

/*****************************************************************************************
******************************************************************************************
******************************************************************************************
*********************62. The Prototype Chain in the Console*******************************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/




/*****************************************************************************************
******************************************************************************************
******************************************************************************************
*********************63. Creating Objects: Object.create**********************************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/
/*
var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1989;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1953 },
    job: { value: 'designer' } 
});
*/




/*****************************************************************************************
******************************************************************************************
******************************************************************************************
****************************64. Primitives vs. Objects************************************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/
// Primitives
/*
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// Objects

var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a = 30, 
    b.city = 'San Francisco'
}

change(age, obj);

console.log(age);
console.log(obj.city);


*/



/*****************************************************************************************
******************************************************************************************
******************************************************************************************
**************65. First Class Functions: Passing Functions as Arguments*******************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/
/*
var years = [1989, 1952, 1953, 1976, 1981];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2019-el;
}

function isFullAge (el){
    return el >=18;
}

function maxHeartRate(el){
    if(el >=18 && el<=88){
        return Math.round(206.9 - (0.67*el));
    }else{
        return -1;
    }

    
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(heartRate);

*/

/*****************************************************************************************
******************************************************************************************
******************************************************************************************
**************66. First Class Functions: Functions Returning Functions********************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/

/*

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you plaese explain what is UX design is ? ');
        }
    }else if(job ==='teacher'){
        return function(name){
            console.log('What subject do you teach ' + name+'?');
        }
    }else{
        return function(name){
            console.log('Hello '+name+', what do you do ?');
        }
    }
};

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('john');
designerQuestion('john');
designerQuestion('Jane');
designerQuestion('Mark');

interviewQuestion('teacher')('Mark');

*/

/*****************************************************************************************
******************************************************************************************
******************************************************************************************
**************67. Immediately Invoked Function Expressions (IIFE)*************************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/
/*
function game(){
    var score = Math.random()*10;
    console.log(score>=5);
};
game();



(function(){
    var score = Math.random()*10;
    console.log(score>=5);
})();

//console.log(score);

(function(goodLuck){
    var score = Math.random()*10;
    console.log(score>=5 - goodLuck);
})(5);

*/





/*****************************************************************************************
******************************************************************************************
******************************************************************************************
****************************************68. Closures**************************************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/

/*

function retirement(retirementAge){
    var a = ' years left until retirement.'
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age)+ a);
    }
}


var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1989);
retirementUS(1989);
retirementIceland(1989);




//retirement(65)(1989);

function interviewQuestion(job){
    //var a = ' , can you plaese explain what is UX design is ?';
    //var b = 'What subject do you teach ' + name+'?';
    //var c = 'Hello '+name+', what do you do ?';
    return function(name){
        if(job === 'designer'){            
            console.log(name + ', can you plaese explain what is UX design is ? ');            
        }else if(job ==='teacher'){            
            console.log('What subject do you teach ' + name+'?');            
        }else{            
            console.log('Hello '+name+', what do you do ?');            
        }
    }
}

interviewQuestion('teacher')('Mark');

/*
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you plaese explain what is UX design is ? ');
        }
    }else if(job ==='teacher'){
        return function(name){
            console.log('What subject do you teach ' + name+'?');
        }
    }else{
        return function(name){
            console.log('Hello '+name+', what do you do ?');
        }
    }
};
*/



/*****************************************************************************************
******************************************************************************************
******************************************************************************************
****************************************69. Bind, Call and Apply**************************
******************************************************************************************
******************************************************************************************
*****************************************************************************************/

var john = {
    name: 'John',
    age: 30,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good '+timeOfDay+', ladiies and gentlemen! i\'m '+this.name+', i\'m a '+this.job+' and I\'m '+this.age+' years old.');
        }else if ('friendly'){
            console.log('Hey! What\'s up? i\'m '+this.name+', i\'m a '+this.job+' and I\'m '+this.age+' years old. Have a nice '+timeOfDay+'.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 25,
    job: 'designer'
};





john.presentation('formal', 'morning')

//CALL 
john.presentation.call(emily, 'friendly', 'afternoon');

//APPLY
//john.presentation.apply(emily, ['friendly', 'afternoon']);


var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night')

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('day');













var years = [1989, 1952, 1953, 1976, 2010];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2019-el;
}

function isFullAge (limit, el){
    return el >=limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);






































































































