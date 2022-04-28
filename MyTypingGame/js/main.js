'use strict';

{
  function setWord() {
    // 一度現れた単語が消えるようにし、ランダムで単語を出現させる(タイピングお題の重複を避けるため)
    word = words.splice(Math.floor(Math.random * words.length), 1)[0];
    // 要素のテキストを入力されたキーにする
    target.textContent = word;
    // 文字位置を初期化
    loc = 0;
  }

  // タイプしていく単語を定義
  const words = [
    'red',
    'blue',
    'pink'
  ];
  // wordsの中からランダムでタイピングのお題となる文字を格納する変数
  let word;
  // 現在、入力している文字が何文字目かを判定する変数
  let loc = 0;

  const target = document.getElementById('target');

  setWord();

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

    // 入力が完了した場合、次の単語をタイプできるようにする
    if (loc === word.length) {
      // 入力する単語がなくなった場合
      if (words.length === 0) {
        const result = document.getElementById('result');
        result.textContent = 'Finished!';
        return;
      }
      setWord();
    }
  });
}