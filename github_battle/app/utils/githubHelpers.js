var axios = require('axios');

var id = ""
var sec = ""
var param = ""


function getUserInfo (usernname){
   return axios.get('https://api.github.com/users/' + usernname + param)
}


var helpers = {
  getPlayersInfo: function(players) {
      // fetch data from github
      return axios.all(players.map(function(username){
        return getUserInfo(username)
      })).then(function (info){
        console.log(info)
        return info.map(function(user){
          return user.data;
        })
      }).catch(function (err){
        console.warn('Error in getPlayersInfo', err);
      })
  }
};

module.exports = helpers;
