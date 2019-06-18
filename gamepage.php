<!doctype html>

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


<!--This is the link between my gamepage.php and gamemain.js. my game 'gamemain.js' will be played on 'gamepage.php'-->
<script type="text/javascript" src="userManagement.js"></script>
<script type="text/javascript" src="gamemain.js"></script>

<button onclick="saveGame()" class="saveGame" type='submit'>Save Game</button>


<!--This is my footer. I converted from html to php, and stored all my code on main.php-->
<?php
include_once 'main.php';
	outputfooter();

?>



</body>
</html>
