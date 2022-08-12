function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "Please enter a number";
  }

  const degree = radian * (180 / Math.PI);
  return parseFloat(degree.toFixed(2));
}

function isJavaScriptFile(fileName) {
  if (typeof fileName !== "string") {
    return "Please enter a string";
  }

  if (fileName.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  if (
    typeof dieselQuantity !== "number" ||
    typeof petrolQuantity !== "number" ||
    typeof octaneQuantity !== "number"
  ) {
    return "Please enter a number";
  }

  const perDieselPrice = 114;
  const perPetrolPrice = 130;
  const perOctanePrice = 135;

  const dieselPrice = dieselQuantity * perDieselPrice;
  const petrolPrice = petrolQuantity * perPetrolPrice;
  const octanePrice = octaneQuantity * perOctanePrice;

  const totalPrice = dieselPrice + petrolPrice + octanePrice;
  return totalPrice;
}

function publicBusFare(people) {
  if (typeof people !== "number") {
    return "Please enter a number";
  }

  const reserveBusCapacity = 50;
  const microBusCapacity = 11;

  const afterReserveBus = people % reserveBusCapacity;
  const afterMicroBus = afterReserveBus % microBusCapacity;

  const publicBusTicketRate = 250;
  const totalTicketPrice = afterMicroBus * publicBusTicketRate;

  return totalTicketPrice;
}

function isBestFriend(first, second) {
  if (typeof first !== "object" || typeof second !== "object") {
    return "Please enter a object";
  }

  if (first.name === second.friend && first.friend === second.name) {
    return true;
  } else {
    return false;
  }
}
