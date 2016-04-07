(function (module) {
  var articlesController = {};

  Article.fetchAll(articleView.initIndexPage);

  articlesController.index = function () {
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articlesController = articlesController;
})(window);
