$('#submitLogin').click(function() {
  var login = {}
  login.email = $('#emaiLogin').val();
  login.password = $('#passwordLogin').val();

  $.ajax({
    type: "POST",
    contentType: 'application/json',
    url: "/users",
    data: JSON.stringify(login),
    success: function (resp) {
      document.cookie = `x-auth=${resp._id}`;
      // location.href = "/home.html"
    },
    error: function(resp){
      console.log(resp);
      var msg = $('.container').append('<p>bad request</p>');
    }
  });
});
