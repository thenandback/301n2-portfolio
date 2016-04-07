(function (module) {
  var about = {};

  about.all = [];

  about.requestAbout = function (callback) {
    $.ajax({
      url: 'https://api.github.com/users/' + user + '/about',
      method: 'GET',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + githubToken);
      },
    }).success(
      function (data, message, xhr) {
        about.all = data;
      }
    )
    .done(callback);
  };

  about.with = function (attr) {
    return about.all.filter(function (repo) {
      return repo[attr];
    });
  };

  module.about = about;
})(window);
