(function (module) {
  var about = {};

  about.all = [];

  about.requestAbout = function (callback) {
    $.ajax({
      url: 'https://api.github.com/users/' + user + '/repos',
      method: 'GET',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Token ' + githubToken);
      },
    }).success(
      function (data, message, xhr) {
        console.log('github request worked'),
        about.all = data;
      }
    ).done(callback);
  };

  module.about = about;
})(window);
