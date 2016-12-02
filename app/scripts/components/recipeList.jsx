var React = require('react');

var RecipeCollection = require('../models/recipe.js').RecipeCollection;


var ListItem = React.createClass({
    render: function(){
      var recipe = this.props.recipe;
      return(
        <div>
          <a href={'#recipes/' + recipe.get('objectId') + '/'} className="list-group-item">{recipe.get('title')}</a>
        </div>
      );
    }
});

var List = React.createClass({
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
            <button className="btn btn-success" type="submit">Add New Recipe</button>
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
        <List recipes={this.state.recipeCollection}/>
      </div>
    );
    }
});


module.exports = {
  RecipeContainer: RecipeContainer
}
