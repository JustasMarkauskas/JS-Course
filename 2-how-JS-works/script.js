///////////////////////////////////////
// Lecture: Hoisting

// Functions

//Variables

// console.log(age);


// var age = 30;
// console.log(age);

// function foo(){
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello! ';
// first();

// function first() {
//     var b = 'Hi! ';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var d = 'Hello!';
// third();

// function third() {
//     var e = 'Hi!';
//     fourth();

//     function fourth() {
//         var f = 'Hey!';
//         fifth()
//     }
// }

// function fifth() {
//     var g = ' John';
//     console.log(d +g);
// }




///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
// calculateAge(1952)

// function calculateAge(year){
//     console.log(2020-year);
//     console.log(this);
// }

var justas = {
    name: 'Justas',
    yearOfBirth: 1989,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        
    }
}

justas.calculateAge();

var gintare = {
    name: 'Gintere',
    yearOfBirth: 1991,
}

gintare.calculateAge=justas.calculateAge;

gintare.calculateAge();


