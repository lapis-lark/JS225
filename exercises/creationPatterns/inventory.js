class ItemCreator {
  constructor(name, category, quantity) {
    if (this.invalidValues(name, category, quantity)) {
      return {notvalid: true};
    }

    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.updateSKU();
  }

  updateSKU() {
    let chars = this.name.split(' ')[0].split('').slice(0, 3).join('').toUpperCase();
    this.sku = `${chars}${this.category.slice(0, 2).toUpperCase()}`;
  }

  invalidValues(name, category, quantity) {
    let nameLength = name.split(' ')[0].split('').length;
    return (nameLength < 5 || !category.match(/\w{5}/) || quantity === undefined)
  }
}

class ItemManager {
  static items = [];
  static create(name, category, quantity) {
    let newItem = new ItemCreator(name, category, quantity);
    if (newItem.notvalid) {
      return false;
    }

    ItemManager.items.push(newItem);
    return newItem;
  }

  static update(sku, object) {
    let item = this.getItem(sku);

    Object.entries(object).forEach(([key, value]) => {
      item[key] = value;
    });

    item.updateSKU();
    return item;
  }

  static delete(sku) {
    let index = this.items.findIndex(item => item.sku === sku);
    this.items.splice(index, 1);
    return this.items;
  }

  static inStock() {
    return this.items.filter(item => item.quantity > 0);
  }

  static itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }

  static getItem(sku) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].sku === sku) {
        return this.items[i];
      }
    }

    return {notvalid: true};
  }
}

let ReportManager = {
  init(manager) {
    this.items = manager;
  },
  reportInStock() {
    console.log(this.items.inStock().map(item => item.name).join(', '));
  },
  createReporter(sku) {
    let item = this.items.getItem(sku);

    return {
      itemInfo() {
        Object.entries(item).forEach(([key, value]) => console.log(`${key}: ${value}`));
      }
    }
  }
}

let apple = ItemManager.create('apple', 'foodstuff', 3);


// let newItem = ItemManager.create('potato', 'yumyums', 5);
// // console.log(newItem);
// let newItemm = ItemManager.create('potato', 'yums', 5);
// // console.log(newItemm);
// ItemManager.update('POTYU', {name: 'tomatoes', quantity: 12});
// // console.log(newItem);
// // console.log(ItemManager.items);
// ItemManager.delete('APPFO');
// // console.log(ItemManager.items);
// let newItemmm = ItemManager.create('pretty plant', 'garden', 0);
// // console.log(ItemManager.items);
// // console.log(ItemManager.inStock());
// ItemManager.create('shiny plant', 'garden', 3);
// // console.log(ItemManager.itemsInCategory('garden'))
// 
// ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// let shinyReporter = ReportManager.createReporter('SHIGA');
// shinyReporter.itemInfo();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10