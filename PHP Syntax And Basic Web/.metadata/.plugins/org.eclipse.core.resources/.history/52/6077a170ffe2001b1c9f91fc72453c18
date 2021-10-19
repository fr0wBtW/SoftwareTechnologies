<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
	<?php 
	if(isset($_GET['num']))
	{
	    $num = intval($_GET['num']);
	    if($num == 1){
	        echo "1";
	    } else if($num == 2){ 
	        echo "1 1";
	    } else{
	        echo "1 1 ";
	        $prev = 1;
	        $next = 1;
	    }
	    for($i = 2; $i < $num; $i++){
	        $sum = $prev + $next;
	        $prev = $next;
	        $next = $sum;
	        echo "{$sum} ";
	    }
	}
	?>
</body>
</html>