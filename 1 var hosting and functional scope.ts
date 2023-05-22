function greetPerson(name){
    if(name === "Deepak")   /*=== is strict equalto operator which checks weather its 2 operands are equal, returning a boolean result*/
    {
        greet = "Hi Deepak";
    }
    else{
        greet = "Hi there";
    }
    //you might have confused that we have assigned different values to same greet variable so that was not allowed in C# but that was fine in js or ts because 
    //there is something known as Hosting 
    console.log(greet);
    var greet;
}
greetPerson("Deepak");