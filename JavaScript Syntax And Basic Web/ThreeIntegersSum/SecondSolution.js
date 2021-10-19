function sumIntegers([input]) {
  let arr = input.split(' ').map(Number);
  let num1 = Number(arr[0]);
  let num2 = Number(arr[1]);
  let num3 = Number(arr[2]);

  let result = print(num1, num2, num3) || print(num1, num3, num2) || print(num2, num3, num1) || "No";

  console.log(result);

  function print(num1, num2, num3) {
    if (num1 + num2 != num3) {
      return false;
    } else {
      if (num1 > num2) {
        [num1, num2] = [num2, num1];
      }
      return (`${num1} + ${num2} = ${num3}`);
    }
  }
}
sumIntegers(["1 -10 11"]);