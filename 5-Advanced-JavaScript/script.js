/*****************************************************************************************
*********************61. Creating Objects: Function Constructors**************************
*****************************************************************************************/
var john = {
    name: 'John',
    yearOfBirth: 1989,
    job: 'designer'
};

// Susikuriam savo funkcini konstruktoriu

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;    
}

Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.calculateYearToRetirement = function(){
    console.log(65-(2020-this.yearOfBirth));
}

Person.prototype.placeOfBirth = 'Vilnius';

Person.prototype.lastName = 'Markauskas';
// Susikuriam savo naujus objectus

var justas = new Person('Justas', 1989, 'designer');
var gintare = new Person('Gintare', 1991, 'Acountant');
var fanta = new Person('Fanta', 2013, 'Cat')

justas.calculateAge();
gintare.calculateAge();
fanta.calculateAge();

console.log(justas.lastName);
console.log(gintare.lastName);
console.log(fanta.lastName);

justas.calculateYearToRetirement();
gintare.calculateYearToRetirement();
fanta.calculateYearToRetirement();

console.log(justas.placeOfBirth);
console.log(gintare.placeOfBirth);
console.log(fanta.placeOfBirth);

/*****************************************************************************************
*********************62. The Prototype Chain in the Console*******************************
*****************************************************************************************/

/*****************************************************************************************
*********************63. Creating Objects: Object.create**********************************
*****************************************************************************************/

var personProto = {
    calculateAge2: function(){
        console.log(2020-this.yearOfBirth2);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth2 = 1989;
john.job = 'dancer';

var jane = Object.create(personProto, {
    name:{value: 'Jane'},
    yearOfBirth2: {value: 1991},
    job: {value: 'Dancer'}
});

/*****************************************************************************************
****************************64. Primitives vs. Objects************************************
*****************************************************************************************/
// Primitives
var a = 25;
var b = a;
a = 46;
console.log(a);
console.log(b);


//objects
var obj1 = {
    name: 'Mark',
    age: 26
}

var obj2 = obj1;
obj1.age = 30; 
console.log(obj1);
console.log(obj2);


//Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a= 30; 
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);

/*****************************************************************************************
**************65. First Class Functions: Passing Functions as Arguments*******************
*****************************************************************************************/
var years = [1989, 1991, 2013, 1952, 1976];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge3(el){
    return 2020-el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el>=18 && el <=81){
      return Math.round(206.9-(0.67*el));  
    }else{
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge3);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

/*****************************************************************************************
**************66. First Class Functions: Functions Returning Functions********************
*****************************************************************************************/
function interviewQuestion(job1){
    if(job1 === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is ?');
        }
    }else if (job1 === 'teacher'){
            return function(name){
                console.log('What subject do you teach ' + name +'?');
            }
        }else{
            return function(name){
                console.log('Hello ' + name + ', what do you do ?');
            }
        }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Justas')

var designerQuestion = interviewQuestion('designer');
designerQuestion('Gintare');

var elseQuestion = interviewQuestion('katinas');
elseQuestion('Fanta');

interviewQuestion('designer')('Jonas');

/*****************************************************************************************
**************67. Immediately Invoked Function Expressions (IIFE)*************************
*****************************************************************************************/


/*****************************************************************************************
****************************************68. Closures**************************************
*****************************************************************************************/




/*****************************************************************************************
****************************************69. Bind, Call and Apply**************************
*****************************************************************************************/








































































































