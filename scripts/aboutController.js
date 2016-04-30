(function (module) {
  var aboutController = {};

  var templating = function (about) {
    var template = Handlebars.compile($('#about-template').html());
    return template(about);
  };

  templating(about);

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
    $('#about').empty().append(templating(about.all));
  };

  module.aboutController = aboutController;
})(window);
