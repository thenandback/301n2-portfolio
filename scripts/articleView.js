(function(module) {
  var articleView = {};

  articleView.attach = function() {
    Article.all.forEach(function(element, index){
      if (jQuery(window).width() >= 900) {
        var leftHeight = $('#leftColumn').position().top + $('#leftColumn').outerHeight(true);
        var rightHeight = $('#rightColumn').position().top + $('#rightColumn').outerHeight(true);
        if (leftHeight <= rightHeight) {
          $('#leftColumn').append(element.toHtml());
        } else {
          $('#rightColumn').append(element.toHtml());
        }
      } else {
        if (index % 2 === 0) {
          $('#leftColumn').append(element.toHtml());
        } else {
          $('#rightColumn').append(element.toHtml());
        }
      }
    });
  };

  articleView.initIndexPage = function() {
    articleView.attach();
  };

  module.articleView = articleView;
})(window);
