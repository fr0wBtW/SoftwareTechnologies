<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
</head>
<body>
<?php 
for($i = 1; $i <= 5; $i++)
{
  echo "<button style='background-color:blue'>1</button>";
}
echo "<br>";
for($e = 1; $e <= 3; $e++){
echo "<button style='background-color:blue'>1</button>";
for($j = 2; $j <= 5; $j++)
{
    echo "<button>0</button>";
}
echo "<br>";
}
for($i = 1; $i <= 5; $i++)
{
    echo "<button style='background-color:blue'>1</button>";
}
echo "<br>";
for($e = 1; $e <= 3; $e++){
    for($j = 1; $j <= 4; $j++)
    {
        echo "<button>0</button>";
    }
    echo "<button style='background-color:blue'>1</button>";
    echo "<br>";
}
for($i = 1; $i <= 5; $i++)
{
    echo "<button style='background-color:blue'>1</button>";
}
?>
</body>
</html>