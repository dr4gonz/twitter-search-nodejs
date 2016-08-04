var oAuthId = require("./../.env").oAuthId;

OAuth.initialize(oAuthId);

var twitterSearch = function() {
  OAuth.popup('twitter').done(function(result) {
    console.log(result);
    result.get("https://api.twitter.com/1.1/statuses/user_timeline.json&count=2&oauth_consumer_key=Bxc0tpfwRWKh4irGuZLkTcQlA&oauth_nonce=53576f65edd6c6a1e8b00e0da47eab30&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1470353679&oauth_token=15154981-v7V6yBBTGASbebZToU84GFOObuMgqjIlbrt5RCupq&oauth_version=1.0&screen_name=realdonaldtrump")
      .then(function(result){
        console.log(result);
      }).fail(function(error){
        console.log(error);
      });
    // do some stuff with result

  });
};

$(document).ready(function(){
  $("#search").click(function(){
    twitterSearch();

  });
});
