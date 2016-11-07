var React = require('react');
var Backbone = require('backbone');

//Local Data being brought in
var recipeItems = require('../data/data.js').recipeItems;

var AdjustRecipe = React.createClass({
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
                      <input id="servings-input" name="servings-input" placeholder="Qty" />
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
              <br/>
              {recipeHtml}
          </div>
        )
    }
});

var AdjustRecipeContainer = React.createClass({
    getInitialState: function(){
        return{
          recipe: recipeItems
        }
    },
    render: function(){
        return(
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="recipe-container">

                    <AdjustRecipe recipeList={this.state.recipe} />

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
