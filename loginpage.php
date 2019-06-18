<!DOCTYPE html>

<html>
<head>
	<!--This is the title of the game. Each page will include this title. However this does not display on the website-->
	<title> VAC-BAN</title>
	<link rel="stylesheet" type="text/css" href="text.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--This code is used to make the game mobile friendly-->
	<style>
	/* This is the css file format code for my log in */
	.form1{
		position: absolute;
width: 300px;
height: 200px;
z-index: 15;
top: 50%;
left: 50%;
margin: -100px 0 0 -150px;
}
.submitbutton{
	position: static;
	width: 112%;
}
	</style>
</head>

<!--This is the third image that I used. It looks the best on my website-->
<body background= "images/image3.jpg">

	<!--This is the php file for my website. I converted my navigation and footer to php and located the codes on main.php -->
	<?php
	include_once 'main.php';
	outputnav();
	?>

	<div  class ="border1">
	<!--This is the title. This will be displayed on each page-->
	<h1>VAC-BAN</h1>
	</div>
	<h1 align='center'> LOG IN TO YOUR VAC-BAN ACCOUNT </h1>


	<div class="form1">
		<!--This is my log in form. I named it form1. The user will just have to put in their 'Player Username' and 'Password' in order to log in to their account-->
		<!-- <form  action="" method='post'> -->
		<input type="text" placeholder="Name" id="namelogin" required>
		<input  type="password" placeholder="Password" id="passwordlogin" required>
		<button onclick="checkLogin()" class="submitbutton" type='submit' >LOG IN</button>
		<p id="LoginResult">Not logged in.</p>
		<!--This is the button the user has to click once they have filled in all the required information-->
		<a href='signuppage.php'> Don't have an account? Register here! </a> <!--This is the link to direct the user to sign up. Once clicked they will be directed to the sign up page-->
		<!-- </form> -->
	</div>

	<script src="userManagement.js"></script>
	<!--This is my footer. I converted from html to php, and stored all my code on main.php-->
	<?php
	include_once 'main.php';
	outputfooter();
	?>

</body>
</html>
