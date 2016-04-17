(function (module) {
  var aboutController = {};

  var templating = function (about) {
    var template = Handlebars.compile($('#about-template').text());
    return template(about);
  };

  templating(about);

  var render = function () {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  aboutController.index = function() {
    render();

    $('myRepo').append(about.all);
  };

  module.aboutController = aboutController;
})(window);
