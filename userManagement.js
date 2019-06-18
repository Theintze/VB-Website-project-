

/*This does some basic checking of user data and then stores the user data into localStorage*/
function registerUser(){

  //This will extract the name and password that the user has entered
  var nameInput = document.getElementById("NameOfPlayer").value;
  var EmailInput = document.getElementById("EmailOfPlayer").value;
  var UsernameInput = document.getElementById("UsernameOfPlayer").value;
  var NumberInput = document.getElementById("NumberOfPlayer").value;
  var PasswordInput = document.getElementById("PasswordOfPlayer").value;


  //This will check that the name and password are empty
  if(nameInput !== "" && EmailInput !== "" && UsernameInput !== "" && NumberInput !== "" && PasswordInput !== ""){

  //This will create a Javascript to hold the user data
  var usrObj = {};

  //This will add user entered data to object
  usrObj.NameOfPlayer = nameInput;
  usrObj.EmailOfPlayer = EmailInput;
  usrObj.UsernameOfPlayer = UsernameInput;
  usrObj.NumberOfPlayer = NumberInput;
  usrObj.PasswordOfPlayer = PasswordInput;


  //This will add a score field to object to support ranking table
  usrObj.topscore = 0;

  //This stores a string version of the object in localStorage
  localStorage[nameInput] = JSON.stringify(usrObj);
  localStorage[PasswordInput] = JSON.stringify(usrObj);
  }
}


/* This checks that the username and password match the user name and password of a registartion user and provides feedback to user */
function checkLogin(){

  //This gets a reference to the div where we will desplay the login result
  var loginResult = document.getElementById("LoginResult");


  //This extracts the name and password that the user has entered
  var nameInput = document.getElementById("namelogin").value;
  var PasswordInput = document.getElementById("passwordlogin").value;


  //This is the output for debuggin
  console.log("Login name: " + nameInput + "; Login password" + PasswordInput);


  //This checks to see if we have data stores for this user
  if(localStorage[nameInput] === undefined){
  //this provides feedback that user has not been found
  loginResult.innerHTML = "User name incorrect";
  return;
  }

  //This will check password
  //This gets object that is stored for the user name
  var usrObj = JSON.parse(localStorage[nameInput]);

  //This will compare the entered password with the stored password
  if(PasswordInput !== usrObj.PasswordOfPlayer){

  //This will provide feedback to user for incorrect password
  loginResult.innerHTML = "Password incorrect";
  return;
  }


  //If we have got this far, the username and password are correct
  //This will record the user that has logged in using local storage
  localStorage.loggedInUser = nameInput;


  //This will provide feedback for the user
  loginResult.innerHTML = "User logged in.";
}
function updateScore(newScore){
    //This will get the Javascript object that holds the data for the logged in user
    var usrObj = JSON.parse(localStorage[localStorage.loggedInUser]);


    //This will update the user object with the new top score
    usrObj.topscore = newScore;

  
    //This will put the user data back into localStorage
    localStorage[localStorage.loggedInUser] = JSON.stringify(usrObj);
}
