function findRemainder(num1, num2) {
  return num1 % num2;
}

function startGPS(pointA, pointB) {
  if (pointA === pointB) {
    return `You are already at the ${pointA}!  Would you like to go somewhere else?`;
  } else {
    return `Taking you from ${pointA} to ${pointB}!  Getting directions now!`;
  }
}

function createUser(firstName, lastName, birthDate, onlineStatus = false) {
  return user = {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    onlineStatus: onlineStatus
  }
}

function makePizza(pizza, toppings) {
  pizza.cooked = true;
  if (pizza.toppings.length < 5) {
    pizza.toppings.push(toppings);
  }
  
  return pizza
}

module.exports = {
  findRemainder,
  startGPS,
  createUser,
  makePizza
}