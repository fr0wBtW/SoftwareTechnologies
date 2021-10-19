function numbers(arr) {
  let number = arr.map(Number).sort((a, b) => b - a);
  let count = Math.min(3, arr.length);
  for (let i = 0; i < count; i++)
  {
  console.log(number[i]);
  }  
}
numbers([10, 3010,
  30,
  15,
  20,
  50,
  5
]);
