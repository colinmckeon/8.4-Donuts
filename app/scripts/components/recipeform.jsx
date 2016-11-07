var React = require('react');
var Backbone = require('backbone');

var RecipeForm = React.createClass({
    render: function(){
        return (
          <div className="form-container">
              <h3>Basic Info</h3>
              <hr />

              <div className="well">
                <div className="author-container">
                    <input className="form-control" id="recipe-name" type="text" placeholder="Enter Recipe Name" />
                    <br />
                    <input className="form-control" id="author-name" type="text" placeholder="Author's Name" />
                    <br />
                </div>

                <div className="cook-time-container">
                    <label htmlFor="prep-time">Prep Time</label>
                    <input id="prep-time" type="text" placeholder="Hours/Minutes" />
                    <label htmlFor="cook-time">Cook Time</label>
                    <input id="cook-time" type="text" placeholder="Hours/Minutes" />
                    <label htmlFor="cook-temp">Cook Temp</label>
                    <input id="cook-temp" type="text" placeholder="°F" />
                    <hr />
                    <span>The final product will make</span> &nbsp;
                    <input id="recipe-willmake" type="text" placeholder="Enter Number" /> &nbsp;
                    <input id="recipe-output" type="text" placeholder="cookies, loaves, etc..." />
                </div>
              </div>

              <br />
              <h3>Recipe Steps</h3>
              <hr />

              <div className="steps-container well">
                  <h4>Input Ingredients for this step</h4>
                  <label htmlFor="ingredient-amount">Amount</label>
                  <input id="ingredient-amount" type="text" placeholder="Enter Number" />
                  <label htmlFor="unit-input">Unit</label>
                  <input id="unit-input" type="text" placeholder="ex: Tbsp" />
                  <label htmlFor="ingredient-input">Ingredient</label>
                  <input id="ingredient-input" type="text" placeholder="ex: Avocado" />
                  <button id="add-ingredient" type="button" className="btn btn-secondary">+</button>
                  <button id="remove-ingredient" type="button" className="btn btn-secondary">-</button>
                  <hr />
                  <textarea id="step-directions" name="textarea" rows="8" placeholder="What directions go with this step?"></textarea>
                  <hr />
                  <button type="button" className="btn btn-info">Add Additional Step</button>
              </div>

              <div className="recipe-save-container">
                  <input className="btn btn-success" id="save-recipe-button" type="submit" value="Save this Recipe!" />
              </div>
          </div>


        )
    }
});

var RecipeFormContainer = React.createClass({
    render: function(){
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">

                  <RecipeForm />

              </div>
            </div>
          </div>
        )
    }
})

module.exports = {
  RecipeFormContainer: RecipeFormContainer
}
