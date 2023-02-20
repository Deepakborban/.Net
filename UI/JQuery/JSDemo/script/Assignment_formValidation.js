// console.log('hi');
//when you want to read the data 


//See UI pogramming is very easy you need to understand 2 things
//---When should i do this ------------------>when user clicks on submit button
//---What should i do this  ------------------->i should read all this data and put it in a table 



function getData() {
    console.log('Hi');
    event.preventDefault();//through this line i am saying don't execute the  default event, i am preventing the default event
    //so from now it will not take me to the success.html page

    //now we need to read the data
    let name = document.getElementById("name").value;
    let pwd = document.getElementById("pwd").value;
    let cpwd = document.getElementById("cpwd").value;
    let address = document.getElementById("address").value;
    let state = document.getElementById("state").value;





    //now we have to check weather the radio button is male or female so to do that we by default put gender as male 
    //and only if user check
    //radio button of female then only i will make gender as female 

    // let gender = 'Male';
    // if (document.getElementById("female").checked) {
    //     gender = 'Female';
    // }

    //now it is not ok to write so many lines of code 
    //try to reduce no of lines of code 

    let gender = document.querySelector('input[name = gender]:checked').value;
    //query selector means i can pass some kind of query to this 
    //so the type should be input whose name is equal to gender and if it is checked then pls get the value of it 
    //pls understand what my query is doing 
    //i am saying pls go grab all the names whose name is gender and if it is checked then get the value of it 



    //now check how to  get the hobby, as google aunty how to get the checkbox value 
    //can i do something which we have already done 
    let hob1 = "";
    let hob2 = "";
    let hob3 = "";
    let hob4 = "";
    if (document.getElementById("ho1").checked) {
        hob1 = 'Music';
    } else {
        hob1 = '';
    }
    if (document.getElementById("ho2").checked) {
        hob2 = 'Coocking';
    } else {
        hob2 = '';
    }
    if (document.getElementById("ho3").checked) {
        hob3 = 'Playing Games';
    } else {
        hob3 = '';
    }
    if (document.getElementById("ho4").checked) {
        hob4 = 'Travelling';
    } else {
        hob4 = '';
    }
//there are many ways to do this this is not the only way
//we can do the same with query selector also


    //lets try to print this in console
    console.log('Name' + name);
    console.log('Password' + pwd);
    console.log('conf Password' + cpwd);
    console.log('state' + state);
    console.log('Address' + address);
    console.log('Gender' + gender);
    console.log('Hob1' + hob1);
    console.log('Hob2' + hob2);
    console.log('Hob3' + hob3);
    console.log('Hob4' + hob4);

}