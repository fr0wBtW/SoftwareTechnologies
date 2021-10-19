function multiplyDivide(array)
{
 let firstNumber = Number(array[0]);
 let secondNumber = Number(array[1]);
 let result = 0;
 if(secondNumber >= firstNumber)
 {
 result = firstNumber * secondNumber;
 }
 else
 {
 result = firstNumber/secondNumber
 }
 console.log(result);
}
multiplyDivide([`2`,`3`]);