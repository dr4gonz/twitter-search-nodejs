var oAuthId = require("./../.env").oAuthId;

OAuth.initialize(oAuthId);

var twitterSearch = function() {
  OAuth.popup('twitter', {cache: true})
  .done(function(OAuthResult) {
    OAuthResult.get("https://api.twitter.com/1.1/search/tweets.json?q=%40realDonaldTrump&count=10")
  .done(function(response){
    console.log(response);
  })
  .fail(function(error){
    console.log(error);
    });
  });
};

$(document).ready(function(){
  $("#search").click(function(){
    twitterSearch();
  });
});
