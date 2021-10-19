function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let splitted = arr[i].split(" ");
    let command = splitted[0];
    let value = Number(splitted[1]);

    switch(command) {
      case "add":
      result.push(value);
      break;
      case "remove":
      result.splice(value, 1);
      break;
    }
  }
  for (let number of result) {
    console.log(number);
  }
}
solve(["add 3", "add 5", "remove 1", "add 2"]);
