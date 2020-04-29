// 8 paskaita variables and data types
/*
var firstName = 'Justas';
console.log(firstName);

var lastName = 'Markauskas';
var age = 29;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


var _3years = 3;
var johnMark = 'john and mark';
var if = 23;

*/

//======================================================================================================



// 9 pasklaita variable mutation and type coercion
// Type coercion

/*
var firstName = 'Justas';
var age = 29;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried)

// Variable mutation 

age = 'twenty nine';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried);

var lastName = prompt('What is his last name ?');
console.log(firstName + ' ' + lastName);
*/

//==========================================================================================================



/************** 
11 BASIC OPERATORS 
**************/

/*
var now = 2019;

ageJohn = 30;
ageMark = 33;
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// logikal operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is loch');
var x;
console.log(typeof x);

====================================================================================================

*/

/*********************
11.OPERATOR PRECEDENCE
*********************/
 /*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);


var ageJohn = now - yearJohn;
var ageMark = 35;
var averAge = (ageJohn + ageMark) / 2;

console.log(averAge);

// multiple assignments

var x, y;
x = y =(3 + 5) * 4 - 6;
console.log(x, y);


x*=2;

console.log(x);
x+=10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
====================================================================================================
*/

/******************
12 CODING CHALLENGE
******************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated 
using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI 
higher than John's? true"). 

*/


/*
var johnHeight = 1.76; 
var johnMass = 85;
var markHeight = 1.80;
var markMass = 79;

var johnBmi = johnMass / (johnHeight*johnHeight);
console.log(johnBmi);

var markBmi = markMass / (markHeight*markHeight);
console.log(markBmi);

console.log('Is Mark\'s BMI higher than John\'s? ', markBmi > johnBmi);
==========================================================================================================
*/

/*****************
IF/ELSE STATEMENTS
*****************/


/*
var firstName = 'Justas';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
    }
    else{
        console.log(firstName + ' will hopefully marry soon.')
    }

var isMarried = true;
    if (isMarried){
        console.log(firstName + ' is married!');
        }
        else{
            console.log(firstName + ' will hopefully marry soon.')
        }



var johnHeight = 1.76; 
var johnMass = 85;
var markHeight = 1.80;
var markMass = 79;
        
var johnBmi = johnMass / (johnHeight*johnHeight);
console.log(johnBmi);
        
var markBmi = markMass / (markHeight*markHeight);
console.log(markBmi);
        
if (markBmi > johnBmi){
    console.log('Mark\'s BMI is higher than John\'s')
    }else{
        console.log('John\'s BMI is higher than Mark\'s')
        }
===============================================================================================================
*/

        
/************
BOOLEAN LOGIC
************/
/*
var firstName = 'John';
var age = 19;

if (age<13){
    console.log(firstName + ' is a boy.')
    }else if (age>=13 && age<20){
        console.log(firstName + ' is a teenager.')    
    }else if(age >=20 && age<30){ 
        console.log(firstName + ' is a young man.')
    }else{
        console.log(firstName + ' is a man.')  
    }
===============================================================================================================
*/

/*****************************************
The Ternary Operator and Switch Statements
*****************************************/
/*
var firstName = 'John';
var age = 20;
// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

/*
if (age >= 18){
    var drink = 'beer';
}else{
    var drink = 'juice';
}*/

//Switch statement

/*
var firstName = 'John'
var job = 'instructor';

switch(job){
    case 'teacher':
    case 'instructor':
    console.log(firstName+ ' teaches kids how to code.');
    break;
    case 'driver':
    console.log(firstName+ ' drives uber in Lisbon.');
    break;
    case 'designer': 
    console.log(firstName+ ' designs beautiful.');
    break;
    default:
    console.log(firstName+ ' does something else.');
}

var age = 28;

switch(true){
    case age < 13:
    console.log(firstName + ' is a boy.');
    break;
    case age>=13 && age<20:
    console.log(firstName + ' is a teenager.');
    break; 
    case age >=20 && age<30:
    console.log(firstName + ' is a young man.');
    break;
    default:
    console.log(firstName + ' is a man.'); 
}
===============================================================================================================
*/

/*************************************************
17. Truthy and Falsy Values and Equality Operators
*************************************************/

// falsy valules: indefined, null, 0, '', NaN
// Truthy values: NOT falsy values
/*
var height;
height =23;
if (height || height===0){
    console.log('variable is difined');
}else{
    console.log('variable has NOT ben difined');
}

if (height == '23'){
    console.log('The == operator does type coecion!');
}
*/

/*************************************************************************************************
*********************************************TEST 2***********************************************
*************************************************************************************************/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89,
 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into account there might 
be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log 
the average winner to the console. HINT: you will need the && operator to take the decision. If you 
can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

/*
var games = 3;

var john1 = 89;
var john2 = 120;
var john3 = 103;

var mike1 = 116;
var mike2 = 94;
var mike3 = 123;

var mary1 = 97;
var mary2 = 134;
var mary3 = 105;

var averJohn = (john1+john2+john3)/games;
console.log(averJohn);
var averMike = (mike1+mike2+mike3)/games;
console.log(averMike);
var averMary = (mary1+mary2+mary3)/games;
console.log(averMary);

if (averJohn > averMike && averJohn > averMary){
    console.log('The winner is John\'s team, Score: ' + averJohn);
    }else if(averJohn == averMike && averJohn==averMary){
        console.log('The draw: ' + averJohn + ' ' + averMike + ' ' + averMary);
    }else if (averMike > averJohn && averMike > averMary){
        console.log('The winner is Mike\'s team, Score: ' + averMike);
    }else if (averMary>averJohn && averMary>averMike){
        console.log('The winner is Mary\'s team, Score: ' + averMary);
    }
===============================================================================================================
*/


/************
20. Functions
************/
/*
function calculateAge(birthYear){
    return 2019 - birthYear;
}


var ageJohn = calculateAge(1989);
var ageMike = calculateAge(1952);
var ageJane = calculateAge(1953);

//console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
    console.log(firstName + ' retires in ' + retirement + ' years');
    }else{
        console.log(firstName + ' is allready retired.');
    }
}

yearsUntilRetirement(1989, 'Justas');
yearsUntilRetirement(1952, 'Mike');
yearsUntilRetirement(1953, 'Jane');

*/


/**************************************
21. Function Statements and Expressions
**************************************/
/*
//FUNCTION EXPRESSION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives car.';
        case 'designer':
            return firstName + ' designs beautiful.';
        default:
        return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'jane'));
console.log(whatDoYouDo('retirement', 'Dad'));


================================================================================================================
*/

/*****
ARRAYS
*****/
/*

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1989, 1952, 1953);

console.log(names);
console.log(names.length);


// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


// diferent data types

var john = ['John', 'Smith', 1989, 'designer', false];

john.push('blue');
john.unshift('Mr.');


console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.lastIndexOf(1989));

var isDesigner = john.lastIndexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'

console.log(isDesigner);

=============================================================================================

*/

/************************************************************************
********************************TEST 3***********************************
************************************************************************/

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). He likes to tip 20% of the bill when the bill is less than 
$50, 15% when the bill is between $50 and $200, and 10% if the bill is more 
than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/
/*

var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

function calculateTips(bill){
    if (bill < 50){
        return bill * 0.2;
    }else if (bill >= 50 && bill < 200){
        return bill * 0.15;
    }else{
        return bill * 0.10;
    }
}


var bills = [124,48,268]
var tips = [calculateTips(bills[0]), 
            calculateTips(bills[1]),
            calculateTips(bills[2])];
var final = [bills[0]+tips[0],
             bills[1]+tips[1],
             bills[2]+tips[2]];

console.log(tips, final);
*/




/****************************************************************
25. Objects and Properties
****************************************************************/
// Object literal

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1989,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: 'false'
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'driver';
john['isMarried'] = true;
console.log(john);

// new Object sintax

var jane = new Object();

jane.firstName = 'Jane';
jane.birthYear = 1953;
jane['lastName'] = 'Smith';

console.log(jane);



/**********************
26. Objects and Methods
**********************/


/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1989,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: 'false',
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
============================================================================================
*/

/*******************************************************************************************
************************************TEST4***************************************************  
*******************************************************************************************/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now 
implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and 
also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and 
the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

/*
=============================================================================================
=============================================================================================
=============================================================================================
var John = {
    firstName: 'John',
    height: 1.80,
    mass: 80,
    calkBmi: function(){
        this.bmi = this.mass / (this.height*this.height)
    } 
}
John.calkBmi()
//console.log(John);

var Mike = {
    firstName: 'Mike',
    height: 1.80,
    mass: 80,
    calkBmi: function(){
        this.bmi = this.mass / (this.height*this.height)
    } 
}
Mike.calkBmi();
//console.log(Mike);


if (John.bmi > Mike.bmi){
    console.log('John\'s BMI is higher. BMI: ' + John.bmi);
}else if(John.bmi < Mike.bmi){
    console.log('Mike\'s BMI is higher. BMI: ' + Mike.bmi);
}else if (John.bmi == Mike.bmi){
    console.log('Mike\'s BMI is equal John\'s BMI: ' + Mike.bmi +' '+ John.bmi);
}


=============================================================================================
=============================================================================================
=============================================================================================
*/

/**********************
29. Loops and Iteration
**********************/
/*
for(var i=1; i<=20; i+=2){
    console.log(i);
}

var john = ['John', 'Smith', 1989, 'designer', false];

for (var i=0; i < john.length; i++){
    console.log(john[i]);
}

var i = 0;
while (i<john.length){
    console.log(john[i]);
    i++;
}
*/
// Continue and a break statements
//var john = ['John', 'Smith', 1989, 'designer', false, 'blue'];
/*
for (var i=0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i=0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for(var i=john.length-1; i>=0; i--){
    console.log(john[i]);
}

*/

/**************************************************************************
*****************************TEST5***************************************** 
**************************************************************************/

/*
Remember the tip calculator challenge? Let's create a more advanced version using 
everything we learned!
This time, John and his family went to 5 different restaurants. The bills were 
$124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill 
is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip 
calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing 
final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and 
then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different 
restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is 
between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable 
(starting from 0). After you have the sum of the array, divide it by the number of 
elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/
var johnTips = {
    johnBills: [124, 48, 268, 180, 42],
    johnTip: [],
    johnFinal: [],
    calculateTips: function(){
        for (i=0; i<this.johnBills.length; i++) {
            if (this.johnBills[i] < 50){
                this.johnTip[i] = this.johnBills[i] * 0.2;
            }else if (this.johnBills[i] >= 50 && this.johnBills[i] < 200){
                this.johnTip[i] = this.johnBills[i] * 0.15;
            }else{
                this.johnTip[i] = this.johnBills[i] * 0.10;
            }
        }
    },
    calculateFinal: function(){
        for(i=0; i<this.johnBills.length; i++){
            this.johnFinal[i] = this.johnBills[i] + this.johnTip[i];
        }
    }
}
johnTips.calculateTips()
johnTips.calculateFinal()


var markTips = {
    markBills: [77, 375, 110, 45],
    markTip: [],
    markFinal: [],
    calculateTips: function(){
        for (i=0; i<this.markBills.length; i++) {
            if (this.markBills[i] < 100){
                this.markTip[i] = this.markBills[i] * 0.2;
            }else if (this.markBills[i] >= 100 && this.markBills[i] < 300){
                this.markTip[i] = this.markBills[i] * 0.10;
            }else{
                this.markTip[i] = this.markBills[i] * 0.25;
            }
        }
    },
    calculateFinal: function(){
        for(i=0; i<this.markBills.length; i++){
            this.markFinal[i] = this.markBills[i] + this.markTip[i];
        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for(var i=0; i<tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}



johnTips.calculateTips()
johnTips.calculateFinal()
markTips.calculateTips()
markTips.calculateFinal()
console.log(johnTips, markTips);

johnTips.average = calcAverage(johnTips.johnTip);
markTips.average = calcAverage(markTips.markTip);
console.log(johnTips, markTips);



if (johnTips.average > markTips.average){
    console.log('John\'s tips is higner '+ johnTips.average);
}else{
    console.log('Mark\'s tips is higner ' + markTips.average);
};


/*
function averTips1(johnTip){
    var sum1 = 0;
    for(i=0; i<johnTips.johnTip.length; i++){
        sum1 = sum1 + johnTips.johnTip[i];
        return sum1;
    }
    console.log(sum1/johnTips.johnTip.length);
}
averTips1(johnTip);
*/


/*
var tips1 = [15.4, 9.60, 11, 9]

function averTips1(tips1){
    var sum1 = 0;
    for(i=tips1.length-1; i>=0; i--){
    sum1 = +tips1[i];    
    }
    sum1/tips1,length;

}
console.log(averTips1(tips1));

*/























