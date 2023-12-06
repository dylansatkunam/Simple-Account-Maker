//var myName = window.prompt("What's your name?");
//console.log("Hello",myName);
var accounts = new Array();
let addAccountButton = document.getElementById('submit');
let accountContainer = document.getElementById('accountContainer');
let inputField = document.getElementById('inputField');

function arrToPar(arr){ //For JS-Array --> HTML content
    var out = "";
    for(var i = 0; i < arr.length; i++){
        out += arr[i] + "<br>";
    }
    return(out);
}


addAccountButton.addEventListener('click', function(){
    //grab all info from form
    var theName = myName.value;
    var theAge = myAge.value;
    var theEmail = myEmail.value;
    const account = {firstName:theName, age:theAge, email:theEmail};
    //add new account to accounts array
    accounts.push(account);
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = JSON.stringify(account.firstName+", "+account.age+", "+account.email); //grab all info for distribution
    accountContainer.appendChild(paragraph);//show the new account on screen
    account.value = "";
    console.log(accounts);//log all accounts on the console
} )




