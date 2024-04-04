<?php
ob_start();

include ("index.php");

file_put_contents('index.html', ob_get_contents()); 

ob_end_clean();
?>