let Account = {
  init(email, password, firstName, lastName) {
      generateDisplayName = function() {
        let alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
        let tempName = [];

        for (let i = 0; i < 16; i += 1) {
          tempName.push(alphaNum[Math.floor(alphaNum.length * Math.random())]);
        }

        return tempName.join('');
      }

      this.displayName = generateDisplayName();

      this.firstName = function(pass) {
        if (pass === password) {
          return firstName;
        } else {
          return 'invalid password';
        }
      }

      this.lastName = function(pass) {
        if (pass === password) {
          return lastName;
        } else {
          return 'invalid password';
        }
      }

      this.email = function(pass) {
        if (pass === password) {
          return email;
        } else {
          return 'invalid password';
        }
      }

      this.reanonymize = function(pass) {
        if (pass === password) {
          this.displayName = generateDisplayName();
          return true;
        } else {
          return 'invalid password';
        }
      }

      this.resetPassword = function(pass, newPass) {
        if (pass === password) {
          password = newPass;
          return true;
        } else {
          return 'invalid password';
        }
      }

      return this;
  },
}

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar)
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'