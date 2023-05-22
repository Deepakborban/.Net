//Now in ES5 or java Script when a parameter is not specified for a function during its call then the value will be undefined 
// let getValue = function(value){

//   console.log(value);   // undefined 
// }
// getValue();


//But now in ES2015 we can set default values for parameters in paranthesis

// let getValue = function(value = 10){  //so we can assign a default value to parameter using assignment operator 
//     console.log(value); 
// }    
// getValue(20)//if you call this function with a value  it will log the value 
// //  o/p: 20


// getValue(); //if you don't call it with a value it will pass the default value in our case it will log 10 every single time 
//o/p: 10



//let us have a look on functions with 2 parameters
// let getValue = function(value = 10, bonus = 5){ 
//     console.log(value + bonus); 
// }  
// getValue();             //15
// getValue(20);           //25   ,if you don't want to pass the parameter on right hand side simply ignore it 
// getValue(20, 30);       //50
// getValue(undefined, 40);//50   , if you don't want to pass parameter on left hand side pass undefined 



// let getValue = function(value = 10, bonus = value*0.1){ // you can take a value that is specified already i.e value on the left hand side you can use this parameter to specify a default parameter that occurs on the right hand side 
// //but you cannot assign bonus to value because there is no look ahead so value does not know what the value of bonus is 
//     console.log(value + bonus); 
// }  
// getValue();             //11
// getValue(20);           //22  
// getValue(20, 30);       //50



// //we can also pass variables as assignments to our parameters
// let percentBonus = 0.1; 
// let getValue = function(value = 10, bonus = value*percentBonus){ 
//     console.log(value + bonus); 
// }  
// getValue();             //11
// getValue(20);           //22  
// getValue(20, 30);       //50



//we can also pass function to this default 
// let percentBonus = () => 0.1;  // this function takes no parameter and returns 1
// let getValue = function(value = 10, bonus = value*percentBonus() ){ 
//     console.log(value + bonus); 
// }  
// getValue();             //11
// getValue(20);           //22  
// getValue(20, 30);       //50



//arguments object 
let percentBonus = () => 0.1;  
let getValue = function(value = 10, bonus = value*percentBonus()){ 
    console.log(value + bonus); 
    console.log(arguments.length);  // it only takes in the parameters passed and ignore the default values 
}  
getValue();             //11
                        //0     // we haven't provide any arguments so argumrnts.lenght = 0
getValue(20);           //22  
                        //1
getValue(20, 30);       //50
                        //2