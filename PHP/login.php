<html>
<head>
	<title>PW4 - KAUSHAL PRAJAPATI</title>
</head>
<body>
	<?php
	$name = $_POST["username"];
	$fullname = $_POST["fullname"];
	$email = $_POST["emailid"];
	
	if($name!=''&& $fullname!=''&& $email !='') {
		$username = root;
		$password = root;

		$db = new PDO("mysql:host=localhost:8889;dbname=user", $username, $password);
		$stmt = $db->query("select * from UserInfo where Name='".$name."'") or die(mysql_error());
		$res = $stmt->fetch();

		if($res){
			setcookie('name',$name);
			$imagename = $res['ImageName'];
			setcookie('Fname', $res['Fname']);
			setcookie('Email', $res['Email']);
			setcookie('path',$imagename);
			setcookie('count',1);
			if (!isset($_COOKIE['count']))
			{
				echo 'Welcome! This is the first time you have viewed this page.'; 
				$cookie = 1;
				setcookie("count", $cookie);
			}
			else
			{
				$cookie = ++$_COOKIE['count'];
				setcookie("count", $cookie);
		}
		header('location: welcome.php');
	}
	else {
		echo "Please Log In First";
echo "<script>setTimeout(\"location.href = 'index.html';\",3000);</script>";		
	}
}
else {
	echo'Enter all the fields';
	echo "<script>setTimeout(\"location.href = 'index.html';\",3000);</script>";
}
$db = NULL;
?>
</body>
</html>