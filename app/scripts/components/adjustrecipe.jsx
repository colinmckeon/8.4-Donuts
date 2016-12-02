var React = require('react');
var Backbone = require('backbone');

//Local Data being brought in
var recipeItems = require('../data/data.js').recipeItems;
var recipe = require('../data/data.js').recipe;
var TemplateContainer =  require('./templates/template.jsx').TemplateContainer;

var AdjustRecipe = React.createClass({
    getInitialState: function(){
      return{
        servings: this.props.servings
      };
    },
    adjustServings: function(e){
      this.state.servings = e.target.value;
    },

    adjustRecipe: function(e){
      e.preventDefault();
      var factor = this.state.servings / this.props.servings;
      var servings = this.state.servings;
      var ingredientsList = this.props.ingredientsList.map(function(ingredient){
          ingredient.quantity = ingredient.quantity * factor
          return ingredient;
      });
      this.props.adjustRecipe(ingredientsList, servings);
    },
    render: function(){
      var recipeHtml = this.props.ingredientsList.map(function(item, index){
        return (
          <div className="recipe-items" key={item.id + index}>
                <label><input type="checkbox" />&nbsp;
                  {item.quantity}&nbsp;
                  {item.measurementtype}&nbsp;
                  {item.title}
                </label>
                <br/>
          </div>
        )
      });
        return(
          <div>
              <div className="adjustrecipe-header">
                  <div className="servings">
                      <span>Makes</span>
                      <input onChange={this.adjustServings} id="servings-input" type="text" name="servings-input" placeholder={this.props.recipe.servings}/>
                      <span>servings.</span>
                  </div>
                  <div className="radio-button-container">
                      <input type="radio" value="US" defaultChecked /> US
                      <input type="radio" value="US" /> Metric
                  </div>
                  <div className="adjustrecipe-button-container">
                      <input onClick={this.adjustRecipe} className="btn btn-info" type="submit" value="Adjust Recipe" />
                  </div>
              </div>
              <div className="adjustRecipe-backButtonContainer">

              </div>

              <br />

              <div>
              <h4 id="title-recipe">{this.props.recipe.name}</h4> &nbsp;
              <h5 id="servings-recipe">Initial Servings: {this.props.recipe.servings}</h5>
              <br/>
              </div>
              {recipeHtml}
          </div>
        )
    }
});

var AdjustRecipeContainer = React.createClass({
    getInitialState: function(){
        return{
          ingredients: recipeItems,
          recipe: recipe
        }
    },
    adjustRecipe: function(ingredients, servings){
      var recipe = this.state.recipe;
      recipe.servings = Number(servings);
      this.setState({recipe: recipe});
    },
    render: function(){
      console.log('re-render');
        return(
        <div>
          <TemplateContainer />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="recipe-container">

                    <AdjustRecipe
                      servings={this.state.recipe.servings}
                      ingredientsList={this.state.ingredients}
                      recipe={this.state.recipe}
                      adjustRecipe={this.adjustRecipe}
                      />

                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
});

module.exports = {
  AdjustRecipeContainer: AdjustRecipeContainer
}
