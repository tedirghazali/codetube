<?php
include('db.php');
include('function.php');
if(isset($_POST["operation"]))
{
	if($_POST["operation"] == "Add")
	{
		$image = '';
		if($_FILES["user_image"]["name"] != '')
		{
			$image = upload_image();
		}
		$statement = $connection->prepare("
			INSERT INTO users (first_name, last_name, branch, degree, idno, dept, session, bloodtype, image) 
			VALUES (:first_name, :last_name, :branch, :degree, :idno, :dept, :session, :bloodtype, :image)
		");
		$result = $statement->execute(
			array(
				':first_name'	=>	$_POST["first_name"],
				':last_name'	=>	$_POST["last_name"],
				':branch'	=>	$_POST["branch"],
				':degree'	=>	$_POST["degree"],
				':idno'	=>	$_POST["idno"],
				':dept'	=>	$_POST["dept"],
				':session'	=>	$_POST["session"],
				':bloodtype'	=>	$_POST["bloodtype"],
				':image'		=>	$image
			)
		);
		if(!empty($result))
		{
			echo 'Data Inserted';
		}
	}
	if($_POST["operation"] == "Edit")
	{
		$image = '';
		if($_FILES["user_image"]["name"] != '')
		{
			$image = upload_image();
		}
		else
		{
			$image = $_POST["hidden_user_image"];
		}
		$statement = $connection->prepare(
			"UPDATE users 
			SET first_name = :first_name, last_name = :last_name, branch = :branch, degree = :degree, idno = :idno, dept = :dept, session = :session, bloodtype = :bloodtype, image = :image  
			WHERE id = :id
			"
		);
		$result = $statement->execute(
			array(
				':first_name'	=>	$_POST["first_name"],
				':last_name'	=>	$_POST["last_name"],
				':branch'	=>	$_POST["branch"],
				':degree'	=>	$_POST["degree"],
				':idno'	=>	$_POST["idno"],
				':dept'	=>	$_POST["dept"],
				':session'	=>	$_POST["session"],
				':bloodtype'	=>	$_POST["bloodtype"],
				':image'		=>	$image,
				':id'			=>	$_POST["user_id"]
			)
		);
		if(!empty($result))
		{
			echo 'Data Updated';
		}
	}
}

?>
