var score=80;

var val= score> 100 ? 'It is greater':'It is lesser';
console.log(val);

val = prompt('Please enter a number b/n 1-4');
console.log(val);

switch(val){
case '1':
    console.log('Entered 1');
    break;
case '2':
    console.log('Entered 2');
    break;
case '3':
        console.log('Entered 3');
        break;
case '4':
        console.log('Entered 4');
        break; 
default:
    console.log('You didn\'t enter the correct number' );   
}