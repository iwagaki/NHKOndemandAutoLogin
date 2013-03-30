if (document.title == 'NHKオンデマンド｜ログイン') {
  chrome.storage.local.get([
    'user_id',
    'password'
  ], function(items) {
    document.getElementsByName('username')[0].value = items['user_id'];
    document.getElementsByName('password')[0].value = items['password'];
    document.getElementsByName('persistent')[0].checked = true;
    document.getElementsByName('loginbtn')[0].click();
  });
}
