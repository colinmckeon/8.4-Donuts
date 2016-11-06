var React = require('react');
var Backbone = require('backbone');

var CurrentUserLogin = React.createClass({
    render: function(){
        return (

            <div className="col-md-6">
              <h2>Login Here!</h2>
              <form id="login">
                <div className="form-group">
                  <label forHTML="email-login">Email address</label>
                  <input className="form-control" name="email" id="email-login" type="email" placeholder="email" />
                </div>

                <div className="form-group">
                  <label forHTML="password-login">Password</label>
                  <input className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
                </div>

                <input className="btn btn-primary" type="submit" value="Let the Recipes Begin!" />
              </form>
            </div>

        )
    }
});


var NewUserCreate = React.createClass({
    render: function(){
        return (

            <div className="col-md-6">
              <h2>Need an Account? Sign Up!</h2>
              <form id="signup">

                <div className="form-group">
                  <label forHTML="email">Email address</label>
                  <input className="form-control" name="email" id="email" type="email" placeholder="email" />
                </div>

                <div className="form-group">
                  <label forHTML="password">Password</label>
                  <input className="form-control" name="password" id="password" type="password" placeholder="Password Please" />
                </div>

                <input className="btn btn-primary" type="submit" value="Create an Account" />
              </form>
            </div>

        )
    }
});


var LoginContainer = React.createClass({
    render: function(){
        return (
          <div className="container">
            <div className="row">

              <CurrentUserLogin />
              <NewUserCreate />

            </div>
          </div>
        )
    }
});


module.exports = {
  LoginContainer: LoginContainer
}
