// var employee = {
//     id: 1,
//     greet : function(){
//         console.log(this.id);
    
//     }
// };
// employee.greet();

//expected o/p = 1 we got 1 so far so good 


//suppose we want to print this after 1 sec
//so will use setTimeout function 
var employee = {
    id: 1,
    greet : function(){
        setTimeout(function(){console.log( )}, 1000); //here this keywod is bound to this function only at line 18  
    
    }
};
employee.greet();