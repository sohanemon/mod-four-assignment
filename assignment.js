/*                      radianToDegree calculation,                      */

function radianToDegree(rad) {
  if (typeof rad !== "number") {
    return "Please enter an integer value. Program Exiting";
  }
  return ((rad * 180) / Math.PI).toFixed(2);
}

/*                 check a file whether javascript or not                */

function isJavaScriptFile(file) {
  if (typeof file !== "string") {
    return "Please enter a string value. Program Exiting";
  }
  if (file.endsWith(".js")) {
    return true;
  } else return false;
}

/*                         oil price computation                         */

function oilPrice(diesel, petrol, octane) {
  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;
  return diesel * dieselPrice + petrol * petrolPrice + octane * octanePrice;
}

/*                      public bus fare calculation                      */

function publicBusFare(peoples) {
  if (typeof peoples !== "number") {
    return "please enter a valid  number";
  }
  const afterBusRemains = peoples % 50;
  const afterMicroBusRemains = afterBusRemains % 11;
  return 250 * afterMicroBusRemains;
}
/*             find between two person are best friend or not            */

function isBestFriend(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Function requires object. Program exiting";
  }
  if (person1.name === person2.friend && person2.name === person1.friend)
    return true;
  else return false;
}
