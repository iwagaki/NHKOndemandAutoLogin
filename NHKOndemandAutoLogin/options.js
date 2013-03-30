function save_options() {
  chrome.storage.local.set({
    'user_id': document.getElementById('user_id').value,
    'password': document.getElementById('password').value
  }, function() {
    var status = document.getElementById('status');
    status.innerHTML = 'Options saved.';
    setTimeout(function() {
      status.innerHTML = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.local.get([
    'user_id',
    'password'
  ], function(items) {
    document.getElementById('user_id').value = items['user_id'];
    document.getElementById('password').value = items['password'];
  });
}

window.addEventListener('DOMContentLoaded', function(e) {
  restore_options();
  document.querySelector('#save').addEventListener('click', save_options);
}, false);
