var Backbone = require('backbone');

var Users = Backbone.Model.extend({
    urlRoot: 'https://colinmck.herokuapp.com/users'
});

module.exports = {
  User: User
}
