let store = {
    id: -1,
    makeProduct(name, stock, price) {
      return {
        id: this.id += 1,
        name,
        stock,
        price,
        describeSelf() {
          console.log(`my name is ${this.name} and my id is ${this.id}.`);
          console.log(`i cost $${this.price} and there are ${this.stock} of me.`);
          console.log('help meeeee');
        },
        setPrice(newPrice) {
          if (newPrice < 0) { 
            console.log('invalid price') 
          } else {
            this.price = newPrice;
          }
        }
      }
    },
}



let scissors = store.makeProduct('scissors', 8, 10);
let pens = store.makeProduct('pens', 5, 11);
let flashlights = store.makeProduct('flashlights', 20, 401);

flashlights.describeSelf();
flashlights.setPrice(49);
flashlights.describeSelf();
