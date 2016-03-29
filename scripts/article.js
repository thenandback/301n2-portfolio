var blogList = [];

function Article (blogData) {
  this.title = blogData.title;
  this.body = blogData.body;
  this.image = blogData.image;
}

Article.prototype.toHtml = function() {

  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');

  $newArticle.find('.article-header').text(this.title);
  $newArticle.find('.article-body').prepend
    ('<div class="imgContainer"><img src="' + this.image + '" /></div>' + this.body);
  $newArticle.append('<hr class="articleHr">');

  return $newArticle;
}

blogData.forEach(function(ele) {
  blogList.push(new Article(ele));
});

// for large windows, adds blogList to shortest column
//for short windows, alternates adding columns (since we can't compare column lengths)
blogList.forEach(function(element, index){
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
