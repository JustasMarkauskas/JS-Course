/////////////////////////////////////
// Lecture: Hoisting

// Functions
/*
calculateAge(1980);
function calculateAge(year){
    console.log(2019 - year);
}


//retirement(1989);

var retirement = function(year){
    console.log(65-(2019-year));
}

//Variables
console.log(age);
var age = 23;

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

*/
/////////////////////////////////////
// Lecture: Scoping
/*
var a = 'Hello bitch! ';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!!!';
        third()
    }
}

function third(){
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/
/////////////////////////////////////
// Lecture: The this keyword
/////////////////////////////////////
// console.log(this);

/*
calculateAge(1989)


function calculateAge(year) {
    console.log(2019-year);
    console.log(this);
}
*/
var john = {
    name: 'John',
    yearOfBirth: 1989,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);
       
       /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
    }
}
john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;

mike.calculateAge();






