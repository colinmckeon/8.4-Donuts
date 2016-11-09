var React = require('react');
var Backbone = require('backbone');

//Local Data being brought in
var recipeItems = require('../data/data.js').recipeItems;
var recipe = require('../data/data.js').recipe;

var AdjustRecipe = React.createClass({
    getInitialState: function(){
      return{
        qty: 1
      };
    },
    handleQty: function(e){
      this.setState({qty: e.target.value});
      this.props.adjustQtys(e.target.value);
    },
    render: function(){

      var recipeHtml = this.props.recipeList.map(function(item, index){
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
                      <input onChange={this.handleQty} id="servings-input" type="text" name="servings-input" placeholder="Qty" />
                      <span>servings.</span>
                  </div>
                  <div className="radio-button-container">
                      <input type="radio" value="US" defaultChecked /> US
                      <input type="radio" value="US" /> Metric
                  </div>
                  <div className="adjustrecipe-button-container">
                      <input className="btn btn-info" type="submit" value="Adjust Recipe" />
                  </div>
              </div>

              <br />

              <div>
              <h4 id="title-recipe">{this.props.recipe.name}</h4> &nbsp;
              <h5 id="servings-recipe">Servings: {this.props.recipe.servings}</h5>
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
    adjustQtys: function(){
        
    },
    render: function(){
        return(
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="recipe-container">

                    <AdjustRecipe
                      recipeList={this.state.ingredients}
                      recipe={this.state.recipe}
                      adjustQtys={this.adjustQtys}
                      />

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
