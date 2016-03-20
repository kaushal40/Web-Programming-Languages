<html>
	<head>
		<title>Welcome</title>

	</head>
	<body>
		
<?php
 echo "Welcome ".$_COOKIE['name']."<br>";
 echo "<br>";
 echo "your Full Name is" .$_COOKIE['Fname']."<br>";
echo "<br>";
 echo "your EmailID is" .$_COOKIE['Email']."<br>";
 echo "<br>";
 echo "Your Power Animal is <br>";
 echo "<img src='".$_COOKIE['path']."'/><br>";
echo "<br>";
echo "You have visited this page for ".$_COOKIE['count']." number of times";
?>
</body>
</html>