function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      return this.name + ' is located in ' + this.continent + `. visited: ${this.visited}`;
    },
    visitCountry() {
      this.visited = true;
    }
  }
}

let chile = makeCountry('The Republic of Chile', 'South America', true);
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

canada.visitCountry();

chile.getDescription();       // "The Republic of Chile is located in South America."
canada.getDescription();      // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."

