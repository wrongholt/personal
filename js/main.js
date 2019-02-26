window.fbAsyncInit = function() {
  FB.init({
    appId      : '255764971238848',
    xfbml      : true,
    version    : 'v2.6'
  });
};
 
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var vara;
vara = new Vara("#container", "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json", [{
  text: "William Rongholt",
  fontSize: 48,
  y:10
}], {
  strokeWidth: 2,
  textAlign:"center"
});