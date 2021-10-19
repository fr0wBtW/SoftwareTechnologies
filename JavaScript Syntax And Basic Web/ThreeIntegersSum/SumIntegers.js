function sumIntegers([num1, num2, num3]) {
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);

  if (num1 + num2 == num3) {
    if (num1 > num2) {
      [num1, num2] = [num2, num1];
    }
    console.log(`${num1} + ${num2} = ${num3}`);
  } else if (num1 + num3 == num2) {
    if (num1 > num3) {
      [num1, num3] = [num3, num1];
    }
    console.log(`${num1} + ${num3} = ${num2}`);
  } else if (num2 + num3 == num1) {
    if (num2 > num3) {
      [num2, num3] = [num3, num2];
    }
    console.log(`${num2} + ${num3} = ${num1}`);
  } 
  else {
    console.log("No");
  }
}
sumIntegers([10,5, 5]);
