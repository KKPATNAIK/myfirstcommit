let marks =[43,78,99,35,47,59,61,90];

for (let val of marks)
{ 

    console.log( val);

}

// using arrays to print the prices before and after 10% discount

let prices=[1000,1500,2300,1700,5000,2700,4500,3200]
for (i= 0; i<prices.length; i++)
{ 
    
    console.log(` The prices before discount: ${prices[i]}`);
    let newPrice = prices[i] - 0.1*prices[i];
    console.log (`The prices after discount is: ${newPrice}`);
}

//using arrays to find out the sum & average score

let stuMarks =[76,40,89,99,56,48,52,81]
let sum=0;
for (let marks of stuMarks)
{
    sum+=marks;
   
}console.log(`The sum of the marks is : ${sum}`);

let avg = sum/stuMarks.length;
console.log(`The average marks is ${avg}`);

//Practising array methods such as push, pop, shift, unshift, concat, tostring

let foodItems =["potato","tomato","litchi","mango","banana","apple","strawberry"];
console.log(foodItems)
let cookedItems =["biryani","rice","freidrice","chicken","fish"];
let rawItems =["carrot","guava","papaya","sweetpoatao","sweetcorn"]
  foodItems.push("bringal","baigan", "meshedpotato");
  console.log(foodItems);

  let y= foodItems.concat(cookedItems,rawItems);
  console.log(y.toString());
let z= foodItems.toString();
console.log(z);

foodItems.pop();
console.log(foodItems.toString());

foodItems.shift();
console.log(foodItems);







