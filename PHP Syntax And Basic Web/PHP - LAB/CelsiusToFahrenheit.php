<?php
    if(isset($_GET['cel']))
    {
        $cel = floatval($_GET['cel']);
        $fahrenheit = $cel*(9/5)+32; 
        echo "$cel &deg;C = $fahrenheit &deg;F";
    }
    if(isset($_GET['fah']))
    {
        $fah = floatval($_GET['fah']);
        $fahrenheit = ($fah-32)/1.8; 
        echo "$fah &deg;F = $fahrenheit &deg;C";
    }
?>
<form>
	Celsius: <input type="text" name="cel" />
	<input type = "submit" value = "Convert">
</form>
<form>
	Fahrenheit: <input type="text" name="fah" />
	<input type="submit" value="Convert">
</form>

