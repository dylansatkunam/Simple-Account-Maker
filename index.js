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
    var theName = myName.value;
    var theAge = myAge.value;
    var theEmail = myEmail.value;
    const account = {firstName:theName, age:theAge, email:theEmail};
    accounts.push(account);
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = JSON.stringify(account.firstName+", "+account.age+", "+account.email); 
    accountContainer.appendChild(paragraph);
    account.value = "";
    console.log(accounts);
} )



// document.getElementById("submit").onclick = function() {
// var myName = document.getElementById("myName").value;
// var myAge = document.getElementById("myAge").value;
// var myEmail = document.getElementById("myEmail").value;
// const account = {firstName:myName, age:myAge, email:myEmail};
// accounts.push(account);
// var paragraph = document.createElement('p')
// paragraph.innerText = myName.value; 
// accountContainer.appendChild(paragraph);
// console.log(accounts);
// } 


