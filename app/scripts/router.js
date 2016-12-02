
var React =  require('react');
var ReactDOM = require('react-dom');
var Backbone =  require('backbone');

//LOCAL REQUIRE
var setupParse = require('./parseUtilities').setupParse;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var AdjustRecipeContainer = require('./components/adjustrecipe.jsx').AdjustRecipeContainer;
var RecipeFormContainer = require('./components/recipeform.jsx').RecipeFormContainer;


var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'login',
      'recipes/': 'recipeList',
      'recipes/add/': 'addRecipe',
      'recipes/:id/': 'adjustRecipe'
    },

    initialize: function(){
      setupParse('overwatch', 'harambe');
    },

    login: function(){
        ReactDOM.render(
          React.createElement(LoginContainer),
          document.getElementById('app')
        );
    },

    addRecipe: function(){
        ReactDOM.render(
          React.createElement(RecipeFormContainer),
          document.getElementById('app')
        );
    },

    adjustRecipe: function(){
        ReactDOM.render(
          React.createElement(AdjustRecipeContainer),
          document.getElementById('app')
        );
    }
});

var router = new AppRouter();

module.exports = router;
