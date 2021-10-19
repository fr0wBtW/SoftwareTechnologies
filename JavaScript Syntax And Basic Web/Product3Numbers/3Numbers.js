function numbers(arr) {
  let counter = 0;
  let counterZero = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
      counter++;
    }
    if (arr[i] == 0) {
      counterZero++;
    }
  }
  if (counterZero > 0) {
    console.log("Positive")
  } 
  else if(counter == 1)
  {
    console.log("Negative");
  }
  else
  {
  console.log("Positive")
  }
}
numbers([`5`,`4`,`3`]);