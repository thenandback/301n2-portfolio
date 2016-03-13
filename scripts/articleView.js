// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
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

articleView.handleFilter = function(primary, secondary) {
  $('#' + primary + '-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-' + primary + '="' + $(this).val() + '"]').show();
    } else {
      $('article').show();
    }

    $('#' + secondary + '-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', 'li.tab', function() {
    $('section.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 3 in any artcile body.

  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

$(document).ready(function() {
  articleView.populateFilters('author');
  articleView.populateFilters('category');
  articleView.handleFilter('author', 'category');
  articleView.handleFilter('category', 'author');
  articleView.handleMainNav();
  articleView.setTeasers();
});
