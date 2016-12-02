var Backbone = require('backbone');


var ParseModel = Backbone.Model.extend({
  idAttribute: 'objectId'
});

var ParseCollection = Backbone.Collection.extend({

});

var Ingredient = ParseModel.extend({
    defaults: {
      title: '',
      quantity: 0,
      measurementtype: ''
    }
});

var IngredientCollection = ParseCollection.extend({
    model: Ingredient
});

var Recipe = ParseModel.extend({
  defaults: {
    servings: 0,
    ingredients: new IngredientCollection()
  },
  urlRoot: 'https://colinmck.herokuapp.com/classes/Recipe',
});

var RecipeCollection = ParseCollection.extend({
    model: Recipe,
    url: 'https://colinmck.herokuapp.com/classes/Recipe'
});

module.exports = {
    RecipeCollection: RecipeCollection
};
