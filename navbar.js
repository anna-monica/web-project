
document.write("\
\
<nav class=\"navbar navbar-inverse navbar-fixed-top\">\
    <div class=\"container container-fluid\">\
      <div class=\"navbar-header\">\
        <span class=\"navbar-brand\">cineMÁS?</span>\
        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\
          <span class=\"icon-bar\"></span>\
          <span class=\"icon-bar\"></span>\
          <span class=\"icon-bar\"></span>\
        </button>\
      </div>\
      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\
        <ul class=\"nav navbar-nav\">\
          <li class=\"active\">\
            <a href=\"projetWeb.html\">\
              <span class=\"glyphicon glyphicon-home\"></span> Home</a>\
          </li>\
          <li>\
            <a href=\"about.html\">About</a>\
          </li>\
          <li class=\"dropdown\">\
            <a class=\"dropdown-toggle \" data-toggle=\"dropdown\" href=\"#\">Contact Us\
              <span class=\"caret\"></span>\
            </a>\
            <ul class=\"dropdown-menu\">\
              <li>\
                <a href=\"mailto:samovies@hotmail.com\">\
                  <span class=\"glyphicon glyphicon-envelope\"></span> Email Us</a>\
              </li>\
              <li>\
                <a href=\"tel:76732565\">\
                  <span class=\"glyphicon glyphicon-earphone\"></span> Call Us</a>\
              </li>\
              <li>\
                <a href=\"https://goo.gl/maps/SPJRC71n7d52\" target=\"_blank\">\
                  <span class=\"glyphicon glyphicon-globe\"></span> Find Us</a>\
              </li>\
            </ul>\
          </li>\
        </ul>\
        <ul class=\"nav navbar-nav navbar-right\">\
          <li>\
            <a href=\"#\" data-toggle=\"modal\" data-target=\"#signUp\">\
              <span class=\"glyphicon glyphicon-user\"></span> Sign Up</a>\
          </li>\
          <li>\
            <a href=\"#\" data-toggle=\"modal\" data-target=\"#login\">\
              <span class=\"glyphicon glyphicon-log-in\"></span> Login</a>\
          </li>\
        </ul>\
      </div>\
    </div>\
  </nav> "
);