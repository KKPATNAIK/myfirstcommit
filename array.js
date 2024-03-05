let marks =[43,78,99,35,47,59,61,90];

for (let val of marks){ 

    console.log( val);

}

// // using arrays to print the prices before and after 10% discount

let prices=[1000,1500,2300,1700,5000,2700,4500,3200]
for (i= 0; i<prices.length; i++)
{ 
    
    console.log(` The prices before discount: ${prices[i]}`);
    let newPrice = prices[i] - 0.1*prices[i];
    console.log (`The prices after discount is: ${newPrice}`);
}

// //using arrays to find out the sum & average score

let stuMarks =[76,40,89,99,56,48,52,81]
let sum=0;
for (let marks of stuMarks)
{
    sum+=marks;
   
}console.log(`The sum of the marks is : ${sum}`);

let avg = sum/stuMarks.length;
console.log(`The average marks is ${avg}`);

// //Practising array methods such as push, pop, shift, unshift, concat, tostring

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

// // array to add 10+ marks to each student as bonus

let canMarks =[88,74,56,81,90,58,66,40];
let bonus=0
 for(i=0;i<canMarks.length;i++){
    console.log(`The marks before getting bonus ${canMarks[i]}`);
    bonus=canMarks[i] + 10;
    console.log(`The marks after getting bonus ${bonus}`)
    
 }

//  //Practice question to print the arrays using forEach loop

 let Arr =[23,90,78,45,67,89,92,34,121];

Arr.forEach(function sqr(val,idx)
{
    let j=val**2;
    console.log(`The square of ${val} is ${j}`)
})

// // rpactice question to find the price after the discount of 50%

let PRice =[45,56,98,100,27,438,33,20]

PRice.forEach(function discouNt(val,idx){
    let i=0;
    console.log(`The price before the discount ${PRice[i]} `)
    let j= PRice[i] - 0.5*PRice[i];
    console.log(`The price after the discount ${j}`);
    i++;
})







function days(x) {
    
    switch (x) {
        case 1:
            console.log("one");
            break;
            
            case 2:
                console.log("two");
                break;
                case 5:
                    console.log("five")
                    
                    break;
                    case 6:
                        console.log("six");
                        break;
                        
                        default:
                            console.log("Zero");
                            break;
                        }
                    }
                        
                        days(2)

                        
function getFee(isMember) {
return isMember ? '$2.00' : '$10.00';}

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(null));
                    
 
let age=27;
let result = age>=21 ? 'beer' : 'juice';

console.log(result);


function candrink(a){
result= a>=18? 'can vote' : 'cannot vote';
console.log(`As you are of age ${a} you ${result}`)
}

candrink(10);
candrink(20);
candrink(29);
candrink(18);
candrink(60);
candrink(9);
 
    




