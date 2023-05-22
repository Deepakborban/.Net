//We need a function that will display and that will take variable number of parameters 
//if you pass red, it needs to display red 
//if you pass red, blue it need to display red blue 
//...soon
// jo and jitna pass kia wo print hoga 

// How will we do that in ES5 or javascript 
//  let displayColors = function(){
//     for(let i in arguments)
//     {
//         console.log(arguments[i]);
//     }
//  };
//  displayColors ('Red'); //Red
//  displayColors ('Red', 'Blue');//Red Blue
//  displayColors ('Red', 'Blue','Green'); //Red Blue Green

 //with this code there are few problems 
 //1. Suppose someone is new to JavaScript they were not understand right away ok we have a function that takes no parameter yet we are passing certain variable numbers of parameters How does that work 
 //2. we are making using argument object where did that come from 



// consider this sensario : Suppose we want to display the message before we display the list of colors 
// let displayColors = function(){
//     console.log(message);

//     for(let i in arguments)
//     {
//         console.log(arguments[i]);
//     }
//  };
//  let message = "List of colors"
//  displayColors (message, 'Red');
//  displayColors (message, 'Red', 'Blue');
//  displayColors (message, 'Red', 'Blue','Green');

 //O/p : 
// List of colors
// List of colors
// Red
// List of colors
// List of colors
// Red
// Blue
// List of colors
// List of colors
// Red
// Blue
// Green

//Here we are getting message but that was twice 
//so this kind of things breaks our code whenever we use arguments object to iterate through parameters which is not a  good things 

//$$ So in ES2015 this is where our new rest parameter comes into play  
//Rest parameter represent indefinate number of arguments as an array


let displayColors = function(message, ...colors){//here in our functioin call we say message and then we have 3 dots which is the syntax for rest parameter followed by any name of your choice  here we are taking about colors so we had named it colors    

    console.log(message);
    console.log(colors);
    console.log(arguments.length)
    for(let i in colors)
    {
        console.log(colors[i]);
    }
 };
 let message = "List of colors"
 displayColors (message, 'Red'); 
 displayColors (message, 'Red', 'Blue');
 displayColors (message, 'Red', 'Blue','Green');

 //O/p : here also we have message but only once  
// List of colors
// Re
// List of colors
// Red
// Blue
// List of colors
// Red
// Blue 
// Green

// How this works -- So this ...colors will actually converts this list of arguments into an array 
//and then we are going to iterate through this array 

// to see that this is actually an array 
// print and see console.log(colors)

//so by doing this we can add any number of parameters without affecting loop part   

//to see arguments 
//write console.log(arguments.length)