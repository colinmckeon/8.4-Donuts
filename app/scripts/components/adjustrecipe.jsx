var React = require('react');
var Backbone = require('backbone');

//Local Data being brought in
var recipeItems = require('../data/data.js').recipeItems;
var Recipe = require('../models/recipe.js').Recipe;

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
    goBackButton: function(e){
      e.preventDefault();
      this.props.router.navigate('recipes/', {trigger: true});
    },
    render: function(){
      var recipeHtml = this.props.ingredientsList.map(function(item, index){
        return (
          <div className="recipe-items">
                <label key={item.id + index}><input type="checkbox" />&nbsp;
                  {item.get('quantity')} &nbsp;
                  {item.get('measurementtype')} &nbsp;
                  {item.get('title')}
                </label>
                <br/>
          </div>
        )
      });
        return(
          <div>
              <div className="adjustrecipe-header">
                <br/>
                  <div className="servings">
                      <span>Makes</span>
                      <input onChange={this.adjustServings} id="servings-input" type="text" name="servings-input" placeholder={this.props.recipe.servings}/>
                      <span>servings.</span>
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
              <div>
                <button onClick={this.goBackButton} className="btn btn-success" type="button">Go Back</button>
              </div>
          </div>
        )
    }
});

var AdjustRecipeContainer = React.createClass({
    getInitialState: function(){
        return{
          ingredients: recipeItems,
          recipe: new Recipe()
        }
    },
    componentWillMount: function(){
      var self = this;
      this.state.recipe.set('objectId', this.props.objectId);
      this.state.recipe.fetch().then(function(){
        self.setState({recipe: self.state.recipe})
      });
    },
    adjustRecipe: function(ingredients, servings){
      var recipe = this.state.recipe;
      recipe.servings = Number(servings);
      this.setState({recipe: recipe});
    },
    render: function(){
      console.log(this.state.recipe);
        return(
        <div>

          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="recipe-container">

                    <AdjustRecipe
                      servings={this.state.recipe.get('servings')}
                      ingredientsList={this.state.recipe.get('ingredients')}
                      recipe={this.state.recipe}
                      adjustRecipe={this.adjustRecipe}
                      router={this.props.router}
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
