var React = require('react');
var Backbone = require('backbone');

var Recipe = require('../models/recipe.js').Recipe;

var RecipeForm = React.createClass({
    getInitialState: function(){
        return {
          recipe: this.props.recipe.toJSON()
        };
    },
    componentWillReceiveProps: function(nextProps){
      this.setState({recipe: nextProps.recipe.toJSON()});
    },
    submitRecipe: function(e){
      e.preventDefault();

      this.props.submitRecipe(this.state.recipe);
      this.props.router.navigate('recipes/', {trigger: true});
    },
    handleInputChange: function(e){
      var target = e.target;
      var recipe = this.state.recipe;

      recipe[target.name] = target.value;
      this.setState({recipe: recipe});


    },
    backToRecipes: function(e){
      e.preventDefault();
      this.props.router.navigate('recipes/', {trigger: true});
    },
    render: function(){
      var ingredientFormSet = this.props.recipe.get('ingredients').map(function(ingredient){
        return <IngredientForm key={ingredient.cid} ingredient={ingredient}/>
      });
        return (
          <div className="form-container">
              <h3 id="basicInfoTitle">Basic Info</h3>
              <button onClick={this.backToRecipes} className="btn btn-info backToRecipesButton" type="button">Go Back To Recipes</button>
              <hr />
              <form onSubmit={this.submitRecipe}>
                <div className="well">

                  <div className="author-container">
                      <input onChange={this.handleInputChange} id="recipe-name" className="form-control" type="text" name="title" value={this.state.recipe.title} placeholder="Enter Recipe Name" />
                      <br />
                      <input onChange={this.handleInputChange} id="author-name" className="form-control" type="text" name="author" value={this.state.recipe.author} placeholder="Author's Name" />
                      <br />
                  </div>

                  <div className="cook-time-container">
                      <label htmlFor="prep-time">Prep Time</label>
                      <input onChange={this.handleInputChange} id="prep-time" type="text" name="prepTime" value={this.state.recipe.prepTime} placeholder="Hours/Minutes" />
                      <label htmlFor="cook-time">Cook Time</label>
                      <input onChange={this.handleInputChange} id="cook-time" type="text" name="cookTime" value={this.state.recipe.cookTime} placeholder="Hours/Minutes" />
                      <label htmlFor="cook-temp">Cook Temp</label>
                      <input onChange={this.handleInputChange} id="cook-temp" type="text" name="cookTemp" value={this.state.recipe.cookTemp} placeholder="°F" />
                      <hr />
                      <span>The final product will make</span> &nbsp;
                      <input onChange={this.handleInputChange} id="recipe-willmake" type="text" name="servings" value={this.state.recipe.servings} placeholder="Enter Number" /> &nbsp;
                      <input onChange={this.handleInputChange} id="recipe-output" type="text" name="recipeOutput" value={this.state.recipe.recipeOutput} placeholder="cookies, loaves, etc..." />
                  </div>
                </div>

                <br />
                <h3>Recipe Ingredients</h3>
                <hr />

                <div className="steps-container well">

                  {ingredientFormSet}

                </div>

                <div className="recipe-save-container">
                    <button className="btn btn-success" id="save-recipe-button" type="submit">Save this Recipe!</button>
                </div>
              </form>
          </div>


        )
    }
});

var IngredientForm = React.createClass({
  handleInputChange: function(e){
    var target = e.target;
    var ingredient = this.props.ingredient;

    ingredient.set(target.name, target.value);
    this.forceUpdate();
  },
  render: function(){
    return(
      <div>
        <label htmlFor="ingredient-amount">Amount</label>
        <input onChange={this.handleInputChange} id="ingredient-amount" type="text" name="quantity" value={this.props.ingredient.get('quantity')} placeholder="Enter Number" />
        <label htmlFor="unit-input">Unit</label>
        <input onChange={this.handleInputChange} id="unit-input" type="text" name="measurementtype" value={this.props.ingredient.get('measurementtype')} placeholder="ex: Tbsp" />
        <label htmlFor="ingredient-input">Ingredient</label>
        <input onChange={this.handleInputChange} id="ingredient-input" type="text" name="title" value={this.props.ingredient.get('title')} placeholder="ex: Avocado" />
      </div>
    )
  }
});

var RecipeFormContainer = React.createClass({
  getInitialState: function(){
    return {
      recipe: new Recipe()
    }
  },
  componentWillMount: function(){
    var self = this;
    var recipe = this.state.recipe;

    var id = this.props.objectId;
    if(id){
      recipe.set('objectId', id);
      recipe.fetch().then(function(){
        self.setState({recipe: recipe})
      });
    }

    if(recipe.get('ingredients').length < 1){
      recipe.get('ingredients').add([{}]);
    }

    this.setState({recipe: recipe});
  },
  // componentWillUnmount: function(){
  //   this.state.recipe = undefined;
  // },
  submitRecipe: function(recipe){
    this.state.recipe.set(recipe);
    this.state.recipe.save();
  },
    render: function(){
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">


                  <RecipeForm
                    submitRecipe={this.submitRecipe}
                    recipe={this.state.recipe}
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
