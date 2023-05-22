var a=1;
var b=2;
let c= 3;
if(a === 1)
{
    var a =10;
    let b = 20;
    let c = "Ayush"; //however you can in different scope 
    console.log(a);//10
    console.log(b);//20
}
console.log(a);//10
console.log(b);//2 


var d = 10;
var d = 20;
// let e = 4;
// let e = 29; //you cannot ReDeclare Let keyword within the same scope 
