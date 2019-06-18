<!doctype html>

<html>
<head>
	<!--This is the title of the game. Each page will include this title. However this does not display on the website-->
	<title> VAC-BAN</title>
	<link rel="stylesheet" type="text/css" href="text.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--This code is used to make the game mobile friendly-->
	<style>
	.showResult{
		position: absolute;
		left: 10px;
		top: 500px;
		color: red;
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

	<!--This is the title. This will be displayed on each page-->
	<div  class ="border1">
	<h1>VAC-BAN</h1>
	</div>
	<div id="RankingsTable"></div>
	<button onclick="showRankingsTable()" class="showResult" type='submit'>Show Results!</button>

	<script>


		//This loads the ranking table
		//This function is called once the page containing the ranking table loads
		function showRankingsTable(){


			//This gets a reference to the div which holds the rnking table
			var rankingDiv = document.getElementById("RankingsTable");

			//This creates a variable which will hold the HTML for the ranking table
			var htmlStr = "";

			//This is the heading
			htmlStr += "<h1>Rankings Table</h1>";

			//This is to add the table tag
			htmlStr += "<table>";

			//This works through all the keys in local storage
			for(var key in localStorage) {

			//all of keys should point to user data except loggedInUser
			if(key !== "loggedInUser"){

			//This extracts the objects containing user data
			//This extracts the user name and top score

			htmlStr += key;
			rankingDiv.innerHTML = htmlStr;

			//This adds a table row to the HTML string

		}
	}

			//This finishes off the table
			htmlStr += "</table>";

			//This adds the table to the page

		}
	</script>

	<!--This is my footer. I converted from html to php, and stored all my code on main.php-->

	<?php
	include_once 'main.php';
	outputfooter();
	?>

</body>
</html>
