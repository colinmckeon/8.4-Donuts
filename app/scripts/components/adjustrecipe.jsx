var React = require('react');
var Backbone = require('backbone');


var AdjustRecipe = React.createClass({
    render: function(){
        return(
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="recipe-container">

                    <div className="adjustrecipe-header">
                        <div className="servings">
                            <span>Makes</span>
                            <input id="servings-input" name="servings-input" placeholder="Qty">
                            <span>servings.</span>
                        </div>
                        <div className="radio-button-container">
                            <input type="radio" value="US" checked> US
                            <input type="radio" value="US"> Metric
                        </div>
                        <div className="adjustrecipe-button-container">
                            <input className="btn btn-info" type="submit" value="Adjust Recipe">
                        </div>
                    </div>
                    <div className="recipe-items">
                          <label><input type="checkbox"> (recipe item)</label>
                          <br>
                    </div>

                </div>
              </div>
            </div>
          </div>
        )
    }
});

module.exports = {
  AdjustRecipe: AdjustRecipe
}
