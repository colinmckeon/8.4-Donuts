var React = require('react');
var Backbone = require('backbone');

var User = require('../models/users.js').User;

var CurrentUserLogin = React.createClass({
    getInitialState: function(){
      return {
        username: '',
        password: '',
      };
    },
    handleLogIn: function(e){
      e.preventDefault();

      var username = this.state.username;
      var password = this.state.password;
      var router = this.props.router;


      this.props.logIn(username, password, router);
    },
    handleUsernameInput: function(e){
      this.setState({username: e.target.value})
    },
    handlePasswordInput: function(e){
      this.setState({password: e.target.value})
    },
    render: function(){
        return (
            <div className="col-md-6">
              <h2>Login Here!</h2>
              <form onSubmit={this.handleLogIn} id="login">
                <div className="form-group">
                  <label forHTML="email-login">Email address</label>
                  <input onChange={this.handleUsernameInput} value={this.state.username} className="form-control" name="email" id="email-login" type="email" placeholder="email" />
                </div>

                <div className="form-group">
                  <label forHTML="password-login">Password</label>
                  <input onChange={this.handlePasswordInput} value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
                </div>

                <button className="btn btn-primary" type="submit">Let the Recipes Begin!</button>
              </form>
            </div>

        )
    }
});


var NewUserCreate = React.createClass({
    getInitialState: function(){
      return {
        username: '',
        password: '',
      };
    },
    handleSignUp: function(e){
      e.preventDefault();
      var username = this.state.username;
      var password = this.state.password;

      this.props.handleSignUp(username, password);
      this.setState({username: '', password: ''});
    },
    handleEmail: function(e){
      this.setState({username: e.target.value});
    },
    handlePassword: function(e){
      this.setState({password: e.target.value});
    },
    render: function(){
        return (

            <div className="col-md-6">
              <h2>Need an Account? Sign Up!</h2>
              <form onSubmit={this.handleSignUp} id="signup">

                <div className="form-group">
                  <label forHTML="email">Email address</label>
                  <input onChange={this.handleEmail} value={this.state.username} className="form-control" name="email" id="email" type="email" placeholder="email" />
                </div>

                <div className="form-group">
                  <label forHTML="password">Password</label>
                  <input onChange={this.handlePassword} value={this.state.password} className="form-control" name="password" id="password" type="password" placeholder="Password Please" />
                </div>

                <button className="btn btn-primary" type="submit">Create an Account</button>
              </form>
            </div>

        )
    }
});

function setHeaders(sessionId){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", "overwatch");
      xhr.setRequestHeader("X-Parse-REST-API-Key", "harambe");
      if(sessionId){
        xhr.setRequestHeader("X-Parse-Session-Token", sessionId);
      }
    }
  });
}

var LoginContainer = React.createClass({
    getInitialState: function(){
      return {
        user: new User()
      }
    },
    logIn: function(username, password, router){
      this.state.user.set({username: username, password: password});
      this.state.user.logIn(username, password, router)
    },
    handleSignUp: function(username, password){
      this.state.user.set({username: username, password: password});
      this.state.user.signUp();

      var sessionId = localStorage.getItem('sessionId');
      setHeaders(sessionId);
    },
    render: function(){
        return (
          <div className="container">
            <div className="row">

              <CurrentUserLogin logIn={this.logIn} router={this.props.router} />
              <NewUserCreate handleSignUp={this.handleSignUp} />

            </div>
          </div>
        )
    }
});


module.exports = {
  LoginContainer: LoginContainer
}
