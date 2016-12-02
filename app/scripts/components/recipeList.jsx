var React = require('react');

var RecipeCollection = require('../models/recipe.js').RecipeCollection;


var ListItem = React.createClass({
    render: function(){
      var recipe = this.props.recipe;
      return(
        <div>
          <a href={'#recipes/' + recipe.get('objectId') + '/'} className="list-group-item">{recipe.get('title')}</a>
          <button className="btn btn-success" type="submit">Edit Recipe</button>
          <hr />
        </div>
      );
    }
});

var List = React.createClass({
  handleAddNewRecipe: function(){
    this.props.router.navigate('recipes/add/', {trigger: true});
  },
  render: function (){
    console.log(this.props.recipes);
    var recipeList = this.props.recipes.map(function(recipe){
      return <ListItem key={recipe.cid} recipe={recipe}/>
    });

    return(
      <div className="row">
        <div className="col-md-8">

          <div>
            <h1 id="recipeListTitle">My Recipes</h1>
            <button onClick={this.handleAddNewRecipe} className="btn btn-info addNewRecipeButton" type="submit">Add New Recipe</button>
            <hr/>
          </div>

          <div>
            {recipeList}
          </div>

        </div>
      </div>
    );
  }
});

var RecipeContainer = React.createClass({
    getInitialState: function(){
      return{
        recipeCollection: new RecipeCollection()
      };
    },
    componentWillMount: function(){
      var self = this;
      var recipeCollection = this.state.recipeCollection;

      recipeCollection.fetch().then(function(){
        self.setState({'recipeCollection': recipeCollection})
      });
    },
    render: function(){
      return(
      <div className="container">
        <List
          recipes={this.state.recipeCollection}
          router={this.props.router}
          />
      </div>
    );
    }
});


module.exports = {
  RecipeContainer: RecipeContainer
}
