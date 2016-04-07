(function (module) {
  var homeController = {};

  // Article.stats();

  homeController.index = function () {
    $('.tab-content').hide();
    $('#home').fadeIn();
    Article.stats();
  };

  module.homeController = homeController;
})(window);
