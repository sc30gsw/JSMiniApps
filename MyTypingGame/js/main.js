'use strict';

{
  /** キーボードで入力した際にイベント発火 */
  document.addEventListener('keydown', e => {
    const target = document.getElementById('target');
    // 要素のテキストを入力されたキーにする
    target.textContent = e.key;
  })
}