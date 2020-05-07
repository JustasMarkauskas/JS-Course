/*****************************************************************************************
*********************61. Creating Objects: Function Constructors**************************
*****************************************************************************************/
var john = {
    name: 'John',
    yearOfBirth: 1989,
    job: 'teacher'
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

var justas = new Person('Justas', 1989, 'teacher');
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






/*****************************************************************************************
**************66. First Class Functions: Functions Returning Functions********************
*****************************************************************************************/




/*****************************************************************************************
**************67. Immediately Invoked Function Expressions (IIFE)*************************
*****************************************************************************************/


/*****************************************************************************************
****************************************68. Closures**************************************
*****************************************************************************************/




/*****************************************************************************************
****************************************69. Bind, Call and Apply**************************
*****************************************************************************************/








































































































