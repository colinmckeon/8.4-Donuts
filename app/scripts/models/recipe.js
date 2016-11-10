var Backbone = require('backbone');


var ParseModel = Backbone.Model.extend({

});

var ParseCollection = Backbone.Collection.extend({

});

var Ingredient = ParseModel.extend({
    defaults: {

    }
});

var IngredientCollection = ParseCollection.extend({
    model: Ingredient,
    baseUrl: ''
});

var Recipe = ParseModel.extend({

});

var RecipeCollection = ParseCollection.extend({
    model: Recipe,
    url: 'https://colinmck.herokuapp.com/classes/Recipe'
});

module.exports = {
    RecipeCollection: RecipeCollection
};
