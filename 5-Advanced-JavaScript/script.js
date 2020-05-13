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
function game(){
    var score = Math.random()*10;
    console.log(score>=5);
}
game();

(function(){
    var score = Math.random()*10;
    console.log(score>=5);
})();

(function(goodLuck){
    var score = Math.random()*10;
    console.log(score>=5-goodLuck);
})(4);

/*****************************************************************************************
****************************************68. Closures**************************************
*****************************************************************************************/
function retirement(retirementAge){
    var a = ' years left until retirement.'
    return function(yearOfBirth3){
        var age = 2020-yearOfBirth3;
        console.log((retirementAge - age)+a);
    }
}

var retirementUS = retirement(66);
retirementUS(1989);
var retirementLT = retirement(65);
retirementLT(1989);

retirement(65)(1991);

function fizzBuzz(number){
    for(i=1; i<=number; i++){
        if(i%3 ===0 && i%5===0){console.log('FizzBuzz');}
        else if (i%5===0){console.log('Buzz');}
        else if(i%3===0){console.log('Fizz');}
        else {console.log(i);}
    }
}
fizzBuzz(20);

function jobQuestion2(job3){
    return function(name){
        if(job3 === 'designer'){            
            console.log(name + ', can you please explain what UX design is ?');            
        }else if (job3 === 'teacher'){            
            console.log('What subject do you teach ' + name +'?');
        }else{            
            console.log('Hello ' + name + ', what do you do ?');            
        }
    }

}
jobQuestion2('designer')('Gintare');

/*****************************************************************************************
****************************************69. Bind, Call and Apply**************************
*****************************************************************************************/

var jonny = {
    name: 'Jonny Bravo',
    age: 45,
    job: 'Women hunter',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good '+ timeOfDay+', Ladies and gentlemen! I\'m '+
            this.name + ', I\'m '+
            this.job+ ', and i\'m '+
            this.age+' years old.');
        }else if(style === 'friendly'){
            console.log('Hey MaMa !!! I am '+
            this.name + ', '+
            this.age+' years old. And I\'m a professional '+
            this.job+', let\'s have a nice '+timeOfDay+'.');
        }
    }
}

jonny.presentation('formal', 'morning');
jonny.presentation('friendly','evening');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
}

//call
jonny.presentation.call(emily, 'friendly', 'night');

// Apply
jonny.presentation.apply(emily, 
    ['formal', 'afternoon']);


//Bind generate copy of a method but dont call it

var jonnyFriendly = jonny.presentation.bind(jonny, 'friendly');

jonnyFriendly('morning');
jonnyFriendly('afternoon');

var emilyFormal = jonny.presentation.bind(emily, 'formal');
emilyFormal('morning');







var years1 = [1989, 1991, 2013, 1952, 1976];

function arrayCalc1(arr, fn){
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge4(el){
    return 2020-el;
}

function isFullAge2(limit, el){
    return el >= limit;
}

var ages2=arrayCalc1(years1, calculateAge4);

var fullJapan = arrayCalc1(ages, isFullAge2.bind(this, 20));
console.log(ages2);
console.log(fullJapan);









/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// (function(){
//     var quizQuestions = function(question, anwers, correct){
//         this.question = question;
//         this.anwers = anwers;
//         this.correct = correct;
//     }
    
//     quizQuestions.prototype.displayQuestion = function() {
//         console.log(this.question);
        
//         for(var i=0; i<this.anwers.length; i++){
//             console.log(i + ':' + this.anwers[i]);
//         }
//     }
    
//     quizQuestions.prototype.checkAnswer = function(ans){
//         if (ans === this.correct){
//             console.log('Correct answer!!!');
//         }else{
//             console.log('Wrong answer. Try again :)');
//         }
//     }
    
    
//     var q1 = new quizQuestions('Is JavaScript the coolest programming language in the world ?', ['Yes', 'No'], 0);
//     var q2 = new quizQuestions('What is the name of this course\' teacher?',['Justas','Jonas','Michael'],1);
//     var q3 = new quizQuestions('What does best describe coding?',['Boring','Hard','Fun','Tedious'],2);
    
//     var questions = [q1, q2, q3];
    
//     var n = Math.floor(Math.random()*questions.length);
    
//     questions[n].displayQuestion();
    
//     var answer = parseInt(prompt('Please select the correct naswer.'));
    
//     questions[n].checkAnswer(answer);
// })();



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/



(function(){
    var quizQuestions = function(question, anwers, correct){
        this.question = question;
        this.anwers = anwers;
        this.correct = correct;
    }
    
    quizQuestions.prototype.displayQuestion = function() {
        console.log(this.question);
        
        for(var i=0; i<this.anwers.length; i++){
            console.log(i + ':' + this.anwers[i]);
        }
    }
    
    quizQuestions.prototype.checkAnswer = function(ans, callBack){
        var sc;
        if (ans === this.correct){
            console.log('Correct answer!!!');
            sc = callBack(true);

        }else{
            console.log('Wrong answer. Try again :)');
            sc= callBack(false);
        }
        this.displayScore(sc);
    }
    quizQuestions.prototype.displayScore = function(score){
        console.log('Your current score is: '+ score);
        console.log('------------------------------------------------');
    }
    
    var q1 = new quizQuestions('Is JavaScript the coolest programming language in the world ?', ['Yes', 'No'], 0);
    var q2 = new quizQuestions('What is the name of this course\' teacher?',['Justas','Jonas','Michael'],1);
    var q3 = new quizQuestions('What does best describe coding?',['Boring','Hard','Fun','Tedious'],2);
    var questions = [q1, q2, q3];

    function score(){

        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

function nexQuestion(){    
    
    var n = Math.floor(Math.random()*questions.length);
    
    questions[n].displayQuestion();
    
    var answer = prompt('Please select the correct naswer.');   

    if(answer != 'exit'){
        questions[n].checkAnswer(parseInt(answer), keepScore); 
        nexQuestion();
    }   
}

nexQuestion();
   
})();






























































