

//Given the meal price (base cost of a meal),
// tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

function mealCost (cost){

    tip = cost*20/100;
    tax = cost*8/100;

    let total = (cost + tip + tax );

    console.log(Math.round(total));


}

mealCost(12);

// Day 3
// Task
// Given an integer, , perform the following conditional actions:

// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.


function check(num){

    if(num%2==0 && num > 2 && num <= 5){
        console.log(" Not Weird");
    }
    else if (num%2==0 && num > 6 && num < 20){
        console.log("Weird");
    }
    else if (num%2==0 && num >= 20){
        console.log(" Not Weird");
    }else
    console.log("Weird");
}

//Day 5: Loops;

//Task
// Given an integer, , print its first  multiples. Each multiple  (where )
//  should be printed on a new line in the form: n x i = result.

let n = 3;
for(let i =0 ;i<=10; i++){

    console.log( `${n} * ${i} = ` + n*i) 

};