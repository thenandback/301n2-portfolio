var articleView = {};

articleView.handleMainNav = function() {
  $('#main-nav').on('click', 'li.tab', function() {
    $('section.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('#main-nav li[data-content="articles"]').click();
};

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
  articleView.handleMainNav();
};
