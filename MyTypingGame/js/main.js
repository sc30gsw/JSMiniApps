'use strict';

{
  // タイプしていく単語を定義
  const word = 'red';
  // 現在、入力している文字が何文字目かを判定する変数
  let loc = 0;

  const target = document.getElementById('target');
  // 要素のテキストを入力されたキーにする
  target.textContent = word;

  /** キーボードで入力した際にイベント発火 */
  document.addEventListener('keydown', e => {

    // タイプしたキーが間違いの場合、処理を中断する(早期リターン)
    if (e.key !== word[loc]) {
      return;
    }
    
    // タイプしたキーが正しいか場合(1文字ずつ判定する)
    // 次の文字の判定ができるようにする
    loc ++;
    // アンダーバーをlocの個数分コピーし、変数wordのloc番目の文字列と結合させる
    target.textContent = '_'.repeat(loc) + word.substring(loc);
  });
}