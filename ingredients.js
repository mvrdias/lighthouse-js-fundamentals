var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (ingredients.length > i) {
  console.log (ingredients[i]);
  i = i + 1;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0;ingredients.length>i;i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length; i === 0 ;i = i - 1 ) {
  console.log(ingredients[i]);
}