function solve(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let splitted = arr[i].split(" -> ");
    let key = splitted[0];
    let value = splitted[1];
    if (isNaN(Number(value))) {
      obj[key] = value;
    } else {
      obj[key] = Number(value);
    }
  }
  console.log(JSON.stringify(obj));
}
solve(['{"name" : "Angel", "surname" : "Georgiev" , "age":20 , "grade":6 , "date" : "19/05/1995" , town":Sofia"}']);
