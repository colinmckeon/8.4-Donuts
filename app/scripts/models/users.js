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
    }
});

module.exports = {
  User: User
}
