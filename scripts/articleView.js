var articleView = {};

articleView.populateFilters = function(content) {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).attr('data-' + content); // data key
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#' + content + '-filter').append(optionTag);
    }
  });
};

articleView.handleFilter = function(primary) {
  $('#' + primary + '-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-' + primary + '="' + $(this).val() + '"]').show();
    } else {
      $('article').show();
    }
  });
};

articleView.handleMainNav = function() {
  $('#main-nav').on('click', 'li.tab', function() {
    $('section.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('#main-nav li[data-content="articles"]').click();
};


$(document).ready(function() {
  articleView.populateFilters('category');
  articleView.handleFilter('category');
  articleView.handleMainNav();
});
