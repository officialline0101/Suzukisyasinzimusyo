document.addEventListener('DOMContentLoaded', () => {
  liff.init({ liffId: '2005254357-zKma9BZk' })
    .then(() => console.log('LIFF初期化成功'))
    .catch(err => console.log('LIFF初期化失敗', err));
});