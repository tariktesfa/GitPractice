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
