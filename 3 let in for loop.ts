//Display number 1 to n

// function displayNumber(number){
  
//     for(let i = 1; i <= number; i++)
//     {

//         console.log(i);
//     }

// }
// displayNumber(100); 


// Now suppose we want to display the numbers after 1second and for that we are going to make use of settimeout function 
// and setTimeOut fuunction will take 2 parameters 1 - function, 2 - time  


  
    // for(var i = 1; i <= 5; i++)
    // {

    //    setTimeout(function(){console.log(i);}, 1000) ; // we are logging after 1 sec 
    // }

    // here we got output as 6 and that is repeated 5 times 
    // we usually expect output to be 1 2 3  4 5
    // So why did we get 6 printed out 5 times, so this problem occurs because we are passing the reference to the variable i 
    // not the actual value at the moment inside each loop, so by the time settimeout function will execute the for statement already executed and incremented to the value 6 
    // to achieve the desired result we need to use iffee of immediately invoked function 
    //However a simple way which ES2015 provides is simple replace var with let


    // So while dealing with closures in loops, please use of let instead of var 

    for(let i = 1; i <= 5; i++)
    {

       setTimeout(function(){console.log(i);}, 1000) ; // we are logging after 1 sec 
    }


