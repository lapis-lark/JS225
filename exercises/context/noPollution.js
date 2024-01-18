const greeter = (function() {
  const name = 'Naveed';
  const greeting = 'Hello';

  const greeter = {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
   }
  };

return greeter;
})();

greeter.sayGreetings();