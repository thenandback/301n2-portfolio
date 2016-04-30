(function (module) {
  var aboutController = {};

  var templating = function (about) {
    var template = Handlebars.compile($('#about-template').text());
    return template(about);
  };

  templating(about);

  var render = function () {

  };

  aboutController.index = function() {
    render();
    $('.tab-content').hide();
    $('#about').fadeIn();
    $('#about').empty().append(templating(about.all));
  };

  module.aboutController = aboutController;
})(window);
