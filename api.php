<?php 
// $putfp = fopen("php://input", "r");
// $message = "";
// while($data = fread($putfp, 1024))
// {
//     $message .= $data;
// }
// fclose($putfp);

$message = $_POST['message'];

$filename = "data.txt";   
//$message = $post_vars['message'];

if($message == "")
{
    echo "Something is missing 3";
    file_put_contents($filename, "BADPOST", LOCK_EX); 
}   
else{
    echo $message;
    file_put_contents($filename, $message, LOCK_EX); 
}




?>