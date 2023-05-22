let displayColor = function(message, ...colors){
    console.log(message);
    console.log(colors);

    for(let i in colors){
        console.log(colors[i]);
    }
}

let  message = "List of colors";
let colorArray = ["Red", "Blue", "Green"];
displayColor(message, ...colorArray);

// o/p : List of colors
// ['Red', 'Blue', 'Green']
// Red
// Blue
// Green