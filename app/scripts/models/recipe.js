var Backbone = require('backbone');


var ParseModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  save: function(key, val, options){
   delete this.attributes.createdAt;
   delete this.attributes.updatedAt;

   return Backbone.Model.prototype.save.apply(this, arguments);
 },
});

var ParseCollection = Backbone.Collection.extend({
  parse: function(data){
    return data.results;
  }
});

var Ingredient = Backbone.Model.extend({
    defaults: {
      title: '',
      quantity: 0,
      measurementtype: ''
    }
});

var IngredientCollection = Backbone.Collection.extend({
    model: Ingredient
});

var Recipe = ParseModel.extend({
  defaults: {
    servings: 0,
    ingredients: new IngredientCollection()
  },
  urlRoot: 'https://colinmck.herokuapp.com/classes/Recipe',

  parse: function(data){
    data.ingredients = new IngredientCollection(data.ingredients);
    return data;
  },
  save: function(key, val, options){
    // Convert ingredients collection to array for parse
    this.set('ingredients', this.get('ingredients').toJSON());

    return ParseModel.prototype.save.apply(this, arguments);
  }
});

var RecipeCollection = ParseCollection.extend({
    model: Recipe,
    url: 'https://colinmck.herokuapp.com/classes/Recipe'
});

module.exports = {
    RecipeCollection: RecipeCollection,
    Recipe: Recipe
};
