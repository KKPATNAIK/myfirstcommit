let x = 400;
let y = 300;
let z = 500;
let a = 20;
let b = 35;
let c = 80;
const k = 3.14;

var z1 = 44;

let x1 = x+y+z+a+b+c;
let x2 = x-y;
let x3 = z-y;
let x4 = z/a;
let x5 = c/a;
let x6 = c%b;
let x7 = c%a;

console.log(x)
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)
console.log(x5)
console.log(x6)
console.log(x7)
console.log(a)
console.log(b)
console.log(c)
console.log(k)
console.log(x)
console.log(y)
console.log(z)
console.log(x1+x2)
console.log(x2+x3)
console.log(x3+x4)


let someBool = true;
console.log(typeof someBool);
let someU = undefined;
console.log(typeof someU);

let someNl = null;
console.log(someNl);

let firstsym = Symbol(20);

let secondsym = Symbol("second symbol");

console.log(firstsym, secondsym);
console.log(typeof firstsym);
console.log(typeof secondsym);

let me = true;
let you = false;
console.log(typeof me)
console.log(typeof you);

let we = undefined;
console.log(typeof we);

let our = null;
console.log(our);
console.log(typeof our);
console.log( me);
console.log(you);
console.log(we);

const big = BigInt(668767343641431346476952436464343648476761434647)
console.log(big);
console.log(typeof big);
const small = 3041256465467684657878787867878787878644664646466;
console.log(small);
console.log(typeof small);

const person = {
    firstname: "Johnny",
    secondname: "Kumar",
    lastname: "Sins"
}

const cars =["scorpio","volvo","mercedes","bmw"]

console.log(cars);
console.log(person);

const profile ={
    username : "prince",
    age : 22 ,
    followers : 245,
    following : 56,
    isfollow : true,
    bio : "jaihind jaijawan",
    
    y : null,
    
    
}
profile.username = profile.username + "kumar";

profile["username"]= profile["username"] + "  patnaik";
profile.age = profile.age + 2;
profile["age"]= profile["age"] + 1;

console.log(profile);
console.log(typeof profile.username);
console.log(typeof profile.isfollow)
console.log(profile.isfollow);

let someArray = ["Rajaratan", 86, "Porbandar"];

console.log(someArray);
console.log(profile,someArray,profile.bio, cars);
console.table(profile,cars,someArray,cars);

function MyName(){
    console.log("ALorem ipsum dolor sit amet, consectetur adipisicing elit. Quod officia porro temporibus eveniet ipsum qui, quas id, rerum dolorum corrupti adipisci consequuntur animi iste amet! Sint.");
    console.log("K");
    console.log("A");
    console.log("sLorem ipsum dolor sit amet, consectetur adipisicing elit. Quod officia porro temporibus eveniet ipsum qui, quas id, rerum dolorum corrupti adipisci consequuntur animi iste amet! Sint.");
    console.log("h");
    console.log("i");
    console.log("ALorem ipsum dolor sit amet, consectetur adipisicing elit. Quod officia porro temporibus eveniet ipsum qui, quas id, rerum dolorum corrupti adipisci consequuntur animi iste amet! Sint.");
}
MyName()
MyName()
MyName()

function Addsum()
{a = 100,
    b = 1000,
    c = 20,

    console.log(a+b+c);

}

Addsum()

function notebook(a,b,c,d,e){
    
console.log("The sum of a+b+c+d+e is  :", a+b+c+d+e); 
console.log("The product of the numbers is    :",   a*b*c*d*e);
console.log("The subtraction of first tawo digits is  :", a-b);
console.log("The division of last two digits are   :",d/e);
}


notebook(13.678,8994,90,15);
notebook(456,4556789,246978,135,585);
notebook(44558,255.11,56,55);
notebook(564646,5447578,4647647,54646,74769);

function userlogged(user){
    console.log("This one is user");
    return `${user} has logged in`;  
}
console.log(userlogged('John'));

function login(customer){
    console.log(" This is the customer ");
    console.log( customer ,"has logged in ");
    console.log("Good morining" ,  customer);
}

login("prince");
login("Rachana");
