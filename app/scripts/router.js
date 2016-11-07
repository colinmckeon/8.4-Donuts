
var React =  require('react');
var ReactDOM = require('react-dom');
var Backbone =  require('backbone');

//LOCAL REQUIRE
var LoginContainer = require('./components/login.jsx').LoginContainer;
var AdjustRecipeContainer = require('./components/adjustrecipe.jsx').AdjustRecipeContainer;
var RecipeFormContainer = require('./components/recipeform.jsx').RecipeFormContainer;


var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'login',
      
    },
    login: function(){
        ReactDOM.render(
          React.createElement(AdjustRecipeContainer),
          document.getElementById('app')
        );
    }
});

var router = new AppRouter();

module.exports = router;
