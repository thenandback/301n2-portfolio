(function (module) {
  function Article (blogData) {
    this.title = blogData.title;
    this.body = blogData.body;
    this.image = blogData.image;
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());
    return template(this);
  }

  Article.loadAll = function (blogData) {
    blogData.map(function(ele) {
      Article.all.push(new Article(ele));
    });
  };

  Article.fetchAll = function () {
    var newETag;
    var destination = '../data/blogArticles.json';

    $.ajax({
      url: destination,
      method: 'HEAD',
    }).success(
      function (data, message, xhr) {
        newETag = xhr.getResponseHeader('ETag');
    });

    if (localStorage.blogData && localStorage.eTag === newETag) {
      Article.loadAll(JSON.parse(localStorage.blogData));
      articleView.initIndexPage();
    } else {
      $.get(destination, function (data, message, xhr) {
        localStorage.setItem('eTag', xhr.getResponseHeader('ETag'));
        Article.loadAll(data);
        localStorage.setItem('blogData', JSON.stringify(data));
        articleView.initIndexPage();
      });
    }
  };
  
  module.Article = Article;
})(window);
