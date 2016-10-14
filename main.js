//Question 1: Show me how to calculate the average price of all items.
var avgPrice = function () {
  var total = 0;
  for (var count = 0; count < items.length; count++){
    var temp = items[count].price;
    total = total + temp;
  }
  return total / items.length;
};
var answer1 = document.getElementById ("answer1");
answer1.innerHTML = avgPrice();

//Question 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD.
var findItemsByPrice = items.filter(function(objects) {
  return (objects.price > 14 && objects.price < 18)
});
for (count = 0; count < findItemsByPrice.length; count++){
  answer2.innerHTML += "<p>" + findItemsByPrice[count].title + "</p>";
};

//Question 3: Which item has a "GBP" currency code? Display it's name and price.
var findGBP = items.filter(function(objects) {
  return (objects.currency_code === "GBP")
});
for (count = 0; count < findGBP.length; count++){
  answer3.innerHTML += findGBP[count].title;
};

//Question 4: Display a list of all items who are made of wood.
var wooden = items.filter(function(objects) {
  return (objects.materials.includes ("wood"))
});
for (count = 0; count < wooden.length; count++){
  var answer4 = document.getElementById ("answer4");
  answer4.innerHTML += "<p>" + wooden[count].title + "</p>";
};

//Question 5: Which items are made of eight or more materials? Display the name,
//number of items and the items it is made of.
var eight = items.filter(function(objects){
  return (objects.materials.length > 8)
});

for (count = 0; count < eight.length; count++){
  answer5.innerHTML += "<p>" + eight[count].title + "</p>" + "<p>" + eight[count].materials + "</p>";
};


//Question 6: How many items were made by their sellers?
var madeBySellers = items.filter(function(objects){
  return (objects.who_made === "i_did")
});
var answer6 = document.getElementById ("answer6");
answer6.innerHTML = madeBySellers.length;
