var recipeItems = [{
    id: '01',
    title: 'Avocado',
    measurementtype: 'ripe',
    quantity: 2
  }, {
    id: '02',
    title: 'Kosher salt',
    measurementtype: 'teaspoon',
    quantity: .5
  }, {
    id: '03',
    title: 'Lime juice',
    measurementtype: 'Tbsp',
    quantity: 1
  }, {
    id: '04',
    title: 'minced red onion',
    measurementtype: 'cups',
    quantity: .25
  }, {
    id: '05',
    title: 'serrano chiles',
    measurementtype: '',
    quantity: 2
  }, {
    id: '06',
    title: 'cilantro',
    measurementtype: 'Tbsp',
    quantity: 2
  }, {
    id: '07',
    title: 'black pepper',
    measurementtype: 'dash',
    quantity: 1
  }, {
    id: '08',
    title: 'tomato',
    measurementtype: 'ripe',
    quantity: .5
}];

var recipe = {
  name: 'Guacamole',
  servings: 4
}

module.exports = {
  recipeItems: recipeItems,
  recipe: recipe
};
