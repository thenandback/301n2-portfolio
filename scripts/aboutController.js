(function (module) {
  var aboutController = {};


var render = function (about) {
  var template = Handlebars.compile($('#about-template').text());
  return template(about);
};

aboutController.index = function () {
  $('.tab-content').hide();
  $('#about-template').fadeIn();
};

  module.aboutController = aboutController;
})(window);
