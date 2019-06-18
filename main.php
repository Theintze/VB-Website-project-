

<!--This is the code that I previously had as html. However I converted to php and stored it on 'main.php. This is php code for my navigation and footer. -->
<?php
function outputnav(){
		echo '<div class ="nav">';
		echo '';
		echo '<li><a class="home" href="index.php"> HOME </a></li>';
		echo '<li><a  href="gamepage.php">GAMEPAGE </a></li>';
		echo '<li><a  href="loginpage.php">LOGIN </a></li>';
		echo '<li><a  href="signuppage.php"> SIGN UP</a></li>';
		echo '<li><a  href="scoreboard.php">HIGHSCORE<a></li>';
		echo '';
		echo '</div>';
		echo '';
}

function outputfooter(){
	echo '<div class="footer">';
	echo '<p> Developed by Ekmel Intze </p>';
	echo '</div>';
}

?>
