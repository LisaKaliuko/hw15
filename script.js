'use strict';

alert(`Lets check your knowledge about JS!`);
alert(`Click OK, if its true and Cancel, if its false`);

let rightAnswers = 0;
let wrongAnswers = 0;

const question1 = confirm(`Conversion Number (“false”) will return number 0`); //cancel, returt NaN

if(question1 === false) {
    rightAnswers += 1;
} else {
    wrongAnswers += 1;
}

const question2 = confirm(`Let variable value cannot be changed after initialization`); //cancel

if(question2 === false) {
    rightAnswers += 1;
} else {
    wrongAnswers += 1;
}

const question3 = confirm(`The Math object has a method for calculating the square root`); //OK

if(question3 === true) {
    rightAnswers += 1;
} else {
    wrongAnswers += 1;
}

const question4 = confirm(`The result of performing a logical operation is a boolean value`); //OK

if(question4 === true) {
    rightAnswers += 1;
} else {
    wrongAnswers += 1;
}

const question5 = confirm(`JS is too complex and impossible to learn`); //cancel

if(question5 === false) {
    rightAnswers += 1;
} else {
    wrongAnswers +=1;
}

alert(`Right answers: ${rightAnswers} and Wrong answers: ${wrongAnswers}`);