let drinkCoffeeCup = (function() {
  let cups = 0;

  return (function() {
    cups += 1;
    console.log(`you drink a coffee. that's number ${cups} for the day ~`);
  });
})();

drinkCoffeeCup();
drinkCoffeeCup();