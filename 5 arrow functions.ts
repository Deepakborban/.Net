//it is the syntax addition to ES2015 to write a function
//our regular function 
var getRegvalue  = function(){
    return 10;
}
console.log(getRegvalue());



//  converting this to arrow funcion  
//1. First thing we can do is to remove the Function Keyword and just write () followed by fat arrow =>
const getArrowvalue = () => {
    return 10;
}
console.log(getArrowvalue());

//2. If our function has only the single statement within the body then remove the curly braces and we can also remove the return keyword 
// (parameter list) => implicit return value
const getArrowedvalue = () => 10;
// here we are passing nothing and returning 10
console.log(getArrowedvalue());


//Let say we want to pass an argument 
const getArrowwvalue = (m) => 10*m;

console.log(getArrowwvalue(5));

//when you want to pass only single value you can remove this paramthesis

const getArowwvalue = m => 10*m;

console.log(getArowwvalue(5));

//when we want to pass multipe value we need parantheis 
const getArrowwvalueBonus = (m, bonus) => 10*m+bonus ;

console.log(getArrowwvalueBonus(5, 50));


//also you can check the type of getArrowwvalueBonus
console.log(typeof getArrowwvalueBonus); //function


//now if you have to specify a function body with multiple line  just make sure that you inclose them in pair of curly braces and also have the return keyword stated explictly 
 