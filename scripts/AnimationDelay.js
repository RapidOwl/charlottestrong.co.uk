document.body.className += ' js-loading';

document.addEventListener('DOMContentLoaded', function(event) {
  document.body.className = document.body.className.replace('js-loading', '');
});
