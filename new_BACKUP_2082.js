<<<<<<< HEAD
/******************************************************************
 ******************Coding Challenge 1******************************
 *********************BMI Calculator********************************/
 var johnMass, markMass, johnHeight, markHeight, BMIofMark, BMIofJohn ;
 //John's BMI
 johnMass = prompt('Please enter John Masss in Kg');
 johnHeight = prompt('Enter John height in meter');
 //BMI calculation
 BMIofJohn = johnMass/(johnHeight * johnHeight);
 console.log('BMI'+' '+'of John is '+ BMIofJohn);
 //Marks's BMI
 markMass = prompt('Please enter Mark Masss in Kg');
 markHeight = prompt('Enter Mark height in meter');
 //BMI calculation
 BMIofMark = markMass/(markHeight * markHeight);
 console.log('BMI'+' '+'of Mark is '+ BMIofMark);
 //Checking thier BMI
 var isGreater = BMIofJohn > BMIofMark;
 console.log("Is John's BMI higher than Mark's? " + isGreater);
=======
alert("Hi there!");
var Name= "My name";
var is= "is";
var firstName="tarik";

// String concatenation example

console.log(Name + is + firstName);
>>>>>>> 7e673dbec5d571b7dfa41525a6d0697e5f1cfcea
