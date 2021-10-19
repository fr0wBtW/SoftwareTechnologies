<ul>
<?php
$numbers = "";
for($numbers = 1; $numbers <= 20; $numbers++)
{
if($numbers % 2 == 0)
{
    echo "<li><span style='color: green'>$numbers</span></li>";
}
else 
{
    echo "<li><span style='color: blue'>$numbers</span></li>";
}
}
?>
</ul>