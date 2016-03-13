var articles = [];

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  if (!this.publishedOn) {
    $newArticle.addClass('draft');
  }
  $newArticle.attr('data-category', this.category);
  $newArticle.attr('data-author', this.author);

  $newArticle.find('.byline a').html(this.author);
  $newArticle.find('.byline a').attr('href', this.authorUrl);
  $newArticle.find('h1:first').html(this.title);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn)
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn)
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')
  $newArticle.append('<hr>');
  return $newArticle;
}

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

// for large windows, adds articles to shortest column
//for short windows, alternates adding columns (since we can't compare column lengths)
articles.forEach(function(element, index){
  if (jQuery(window).width() >= 900) {
    var leftHeight = $('#left').position().top + $('#left').outerHeight(true);
    var rightHeight = $('#right').position().top + $('#right').outerHeight(true);
    if (leftHeight <= rightHeight) {
      $('#left').append(element.toHtml());
    } else {
      $('#right').append(element.toHtml());
    }
  } else {
    if (index % 2 === 0) {
      $('#left').append(element.toHtml());
    } else {
      $('#right').append(element.toHtml());
    }
  }
});

$('img').wrap('<div class="imgContainer">'); // Standardizing img size

var imageControl = function() {
  var shifted = true;

  $('.imgContainer').each(function() {
    if (shifted) {
      $(this).addClass('righty'); // manages left/right floating
    }

    $parent = $(this).parent();
    $container = $(this).detach();
    $parent.prepend($container); // images moved to top of <p>
    shifted = !shifted;
  });
}

imageControl();
