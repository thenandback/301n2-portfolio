var articleView = {};

articleView.handleMainNav = function() {
  $('#main-nav').on('click', 'li.tab', function() {
    $('section.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('#main-nav li[data-content="articles"]').click();
};


$(document).ready(function() {
  articleView.handleMainNav();
});
