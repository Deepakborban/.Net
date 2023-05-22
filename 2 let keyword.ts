// function greetPerson(name){
//     if(name === "Deepak") {
//         let greet = "Hi Deepak";
//     }
//     else{
//         let greet = "Hi there";
//     }
//     console.log(greet);    // we are not able to find let variable here because it was block scoped 
// }
// greetPerson("Deepak");


// to resolve this problem we can declare the let variable to the top
function greetPersonByname(personname){
    let greet;
    if(personname === "Deepak") {
        greet = "Hi Deepak";
    }
    else{
        greet = "Hi there";
    }
    console.log(greet);  
}  
greetPersonByname("Deepak");