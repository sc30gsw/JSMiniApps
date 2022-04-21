'use strict';

{
  const slider = document.getElementById('slider');
  const label = document.getElementById('label');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  // パスワードを表示する関数
  function getPassword() {
    const seed = 'abcdefghijklmnopqrstuvwxyz';
    // 何文字のパスワードを生成するかの数値を格納する
    let len = slider.value;
    let pwd = '';

    // 文字数分ランダムな文字列(パスワード)を生成する
    // lenが0になるまで繰り返す
    while (len --) {
      // パスワードにseed[ランダム番目]を格納する
      pwd += seed[Math.floor(Math.random() * seed.length)];
    }

    result.value = pwd;
  }

  // スライダー(パスワードの文字数)が変化したら、文字数表示要素をスライダーの値にする
  slider.addEventListener('change', () => {
    label.innerHTML = slider.value;
  });

  // ボタンを押したらパスワードを表示する
  btn.addEventListener('click', () => {
    getPassword();
  });

  // パスワードのinput要素がクリックされたら、表示されたパスワードを全選択する
  result.addEventListener('click', () => {
    result.select();
  });

  // ページ読み込み時にもパスワードを表示する
  getPassword();
}