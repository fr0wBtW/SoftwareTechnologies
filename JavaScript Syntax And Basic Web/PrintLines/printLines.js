function solve(input){
for (let i=0; i<input.length; i++)
{
if(input[i] == "Stop")
{
return;
}
console.log(input[i]);
}
}
solve(["Line 1", "Line 2", "Stop", "Line 3"]);