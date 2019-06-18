<!DOCTYPE html>

<html>
<head>

	<!--This is the title of the game. Each page will include this title. However this does not display on the website-->
	<title> VAC-BAN</title>
	<link rel="stylesheet" type="text/css" href="text.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--This code is used to make the game mobile friendly-->

</head>
<!--This is the third image that I used. It looks the best on my website-->
<body background= "images/image3.jpg">

<!--This is the php file for my website. I converted my navigation and footer to php and located the codes on main.php -->
<?php
 include_once 'main.php';
	outputnav();

?>


<!--This is the title. This will be displayed on each page-->
<div  class ="border1">
	<h1>VAC-BAN</h1>
</div>

<!--This is form-box. It is a comment which interacts with the user and guides him to do what is said. In this case "sign up" is guiding them to create their first VAC BAN account-->
<div class="form-box">
	<h1> CREATE YOUR VAC-BAN ACCOUNT </h1>
	</div>

  <div class="form">
	<form action="" method='post'>

		<!--This is my sign up form. I named it form. The user wil have to put in a couple of information in order to sign up. the information needed it 'name', 'Email', 'Player Username' and 'Password'. -->

  		<input type="text" placeholder="Name"  id="NameOfPlayer" required>

  		<input type="email" placeholder="Email"  id="EmailOfPlayer" required>

  		<input type="text" placeholder="Player Username" id="UsernameOfPlayer" required>

        <input type="number" placeholder="Phone number" id="NumberOfPlayer" required>

 		 <input type="password" placeholder="Password" id="PasswordOfPlayer" required>

 		 <button onclick="registerUser()" class="submitbutton" type='submit'>CREATE ACCOUNT</button> <!--This is the button the user has to click once they have filled in all the required information-->

 		 <a href='loginpage.php'> Do you already have an account? Click here to sign in! </a> <!--This is the link to direct the user to log in. Once clicked they will be directed to the log in page-->

	</form>

	</div>

<script src="userManagement.js"></script>

<!--This is my footer. I converted from html to php, and stored all my code on main.php-->
<?php
include_once 'main.php';
	outputfooter();
	?>

</body>
</html>
