var Backbone = require('backbone');

var User = Backbone.Model.extend({
    urlRoot: 'https://colinmck.herokuapp.com/users',
    signUp: function(){
      var self = this;
      var username = this.get('username');
      var password = this.get('password');

      this.save().then(function(data){
        localStorage.setItem('sessionId', data.sessionToken)
        localStorage.setItem('user', JSON.stringify(self.toJSON()));
      });
    },
    logIn: function(username, password, router){
      var self = this;
      var loginUrl = 'https://colinmck.herokuapp.com/' + 'login?username=' + encodeURI(username) + '&password=' + encodeURI(password);

      $.ajax(loginUrl).then(function(response){
        self.set(response)
        self.set('password', '')
        localStorage.setItem('user', JSON.stringify(self.toJSON()));
        router.navigate('recipes/', {trigger: true});
      })
    }
});

module.exports = {
  User: User
}
