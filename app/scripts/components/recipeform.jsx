var React = require('react');
var Backbone = require('backbone');

var RecipeCollection = require('../models/recipe.js').RecipeCollection;

var RecipeForm = React.createClass({
    getInitialState: function(){
        return {}
    },
    submitRecipe: function(e){
      e.preventDefault();
      var recipe = {
        name: 'myname',
        title: 'me'
      }
      console.log(recipe);
      this.props.submitRecipe(recipe);
    },
    handleInputChange: function(){

    },
    render: function(){
        return (
          <div className="form-container">
              <h3>Basic Info</h3>
              <hr />

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
                  <button id="add-ingredient" type="button" className="btn btn-secondary">+</button>
                  <button id="remove-ingredient" type="button" className="btn btn-secondary">-</button>
                  <hr />
                  <textarea onChange={this.handleInputChange} id="step-directions" name="textarea" rows="8" name="directions" value={this.state.directions} placeholder="What directions go with this step?"></textarea>
                  <hr />
                  <button type="button" className="btn btn-info">Add Additional Step</button>
              </div>

              <div className="recipe-save-container">
                  <button onSubmit={this.submitRecipe} className="btn btn-success" id="save-recipe-button" type="submit">Save this Recipe!</button>
              </div>
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
    console.log('something');
  },
    render: function(){
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">

                  <RecipeForm submitRecipe={this.submitRecipe} />

              </div>
            </div>
          </div>
        )
    }
})

module.exports = {
  RecipeFormContainer: RecipeFormContainer
}
