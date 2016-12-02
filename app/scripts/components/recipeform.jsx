var React = require('react');
var Backbone = require('backbone');

var RecipeCollection = require('../models/recipe.js').RecipeCollection;

var RecipeForm = React.createClass({
    getInitialState: function(){
        return {
          collection: this.props.recipe.toJSON()
        };
    },
    submitRecipe: function(e){
      e.preventDefault();

      this.props.submitRecipe(this.state.collection);
    },
    handleInputChange: function(e){
      var target = e.target;
      var newRecipe = {};
      newRecipe[target.name] = target.value;
      this.setState({collection: newRecipe});
      console.log(this.state.collection);
      console.log(newRecipe);
    },
    backToRecipes: function(){
      this.props.router.navigate('recipes/', {trigger: true});
    },
    render: function(){
        return (
          <div className="form-container">
              <h3 id="basicInfoTitle">Basic Info</h3>
              <button onClick={this.backToRecipes} className="btn btn-info backToRecipesButton" type="submit">Go Back To Recipes</button>
              <hr />
              <form onSubmit={this.submitRecipe}>
              <div className="well">

                <div className="author-container">
                    <input onChange={this.handleInputChange} id="recipe-name" className="form-control" type="text" name="name" value={this.state.name} placeholder="Enter Recipe Name" />
                    <br />
                    <input onChange={this.handleInputChange} id="author-name" className="form-control" type="text" name="author" value={this.state.author} placeholder="Author's Name" />
                    <br />
                </div>

                <div className="cook-time-container">
                    <label htmlFor="prep-time">Prep Time</label>
                    <input onChange={this.handleInputChange} id="prep-time" type="text" name="prepTime" value={this.state.prepTime} placeholder="Hours/Minutes" />
                    <label htmlFor="cook-time">Cook Time</label>
                    <input onChange={this.handleInputChange} id="cook-time" type="text" name="cookTime" value={this.state.cookTime} placeholder="Hours/Minutes" />
                    <label htmlFor="cook-temp">Cook Temp</label>
                    <input onChange={this.handleInputChange} id="cook-temp" type="text" name="cookTemp" value={this.state.cookTemp} placeholder="°F" />
                    <hr />
                    <span>The final product will make</span> &nbsp;
                    <input onChange={this.handleInputChange} id="recipe-willmake" type="text" name="servings" value={this.state.servings} placeholder="Enter Number" /> &nbsp;
                    <input onChange={this.handleInputChange} id="recipe-output" type="text" name="recipeOutput" value={this.state.recipeOutput} placeholder="cookies, loaves, etc..." />
                </div>
              </div>

              <br />
              <h3>Recipe Steps</h3>
              <hr />

              <div className="steps-container well">
                  <h4>Input Ingredients for this step</h4>
                  <label htmlFor="ingredient-amount">Amount</label>
                  <input onChange={this.handleInputChange} id="ingredient-amount" type="text" name="quantity" value={this.state.quantity} placeholder="Enter Number" />
                  <label htmlFor="unit-input">Unit</label>
                  <input onChange={this.handleInputChange} id="unit-input" type="text" name="measurementtype" value={this.state.measurementtype} placeholder="ex: Tbsp" />
                  <label htmlFor="ingredient-input">Ingredient</label>
                  <input onChange={this.handleInputChange} id="ingredient-input" type="text" name="title" value={this.state.title} placeholder="ex: Avocado" />
                  <hr />
                  <textarea onChange={this.handleInputChange} id="step-directions" name="textarea" rows="8" name="directions" value={this.state.directions} placeholder="What directions go with this step?"></textarea>
                  <hr />
                  <button type="button" className="btn btn-info">Add Additional Step</button>
              </div>

              <div className="recipe-save-container">
                  <button className="btn btn-success" id="save-recipe-button" type="submit">Save this Recipe!</button>
              </div>
              </form>
          </div>


        )
    }
});

var RecipeFormContainer = React.createClass({
  getInitialState: function(){
    return {
       recipeCollection: new RecipeCollection()
    }
  },
  submitRecipe: function(recipe){
    this.state.recipeCollection.create(recipe);
  },
    render: function(){
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">


                  <RecipeForm
                    submitRecipe={this.submitRecipe}
                    recipe={this.state.recipeCollection}
                    router={this.props.router}
                    />

              </div>
            </div>
          </div>
        )
    }
})

module.exports = {
  RecipeFormContainer: RecipeFormContainer
}
