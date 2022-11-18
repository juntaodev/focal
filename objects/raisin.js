const raisinAlarm = function(cookie) {
  const alert = "Raisin alert!";
  let result = "All good!";
  for (let element of cookie) {
    if (element === "🍇") {
      result = alert;
    }
  }
  return result;
};


// step 1: loop through arrays
// step 2: if statment for emjoi rasin
// step 3: console.log results, return array with ["Raisin alert!", "Raisin alert!", "All good!"]

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));