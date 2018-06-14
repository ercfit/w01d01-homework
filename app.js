//SECTION 1
//1. the difference between interpolation and 
//concatenation is: string concatentation joins 2 
//strings end to end (Wikipedia). interpolation	uses 
//variables as placeholders (Wikipedia).

//2. DRY - don't repeat yourself, avoids redundancy 
//in code (Wikipedia). We use loops as repetition
//structures

//SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a < b > c);
console.log(a == a < d);
console.log(e == 'Kevin');
console.log(48 != '48');


//SECTION 3
//infinite loop? 
//Yes, because there is no real logical 
//expression--while what is true?? for
//example: while (x !=0) 

//infinite loopII
//yes, because runProgram is a const variable and cannot
//be changed.

//Reading Code
//let letters = "A";
//the variable letters = the string "A"
//let i = 0;
//the variable i is a counter set = 0
//while (i < 20)
//while repetition statement (counter-controlled)
//letters += "A";
//letters = letters + "A"
//i++;
//use the current value of i, then add 1;
//console.log(letters);
//print letters
//the code should print the letter "A" 20 times 

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

//SECTION 4
//for loop - for a predetermined number of
//iterations
//while loop - boolean--while the logical 
//expression evaluates to true

//For Loop I
for (i = 0; i < 1000; i++)
{
	console.log(i);
}

//For Loop Control Statement
//3 components:
//1. initial expression (initiate variable)
//2. logical expression (loop condition)
//3. update expression (repeat until #2 is false)

//For Loop In Reverse:
for (i = 1000; i >= 0; i--)
{
	console.log(i);
}

//Terminal Practice
//I did this but missed the part about writing commands as 
//comments at the bottom of my homework file.  If you can see my 
//homework file, you can see I did this assignment.  In an effort
//to move on to the next day's homework. I will come back to this 
//as practice over the weekend.