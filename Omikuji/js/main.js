'use strict';

{
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.1) {
      btn.textContent = 'その解決策が正しいと思う証拠は? また反する証拠は?';
    } else if (n < 0.9) {
      btn.textContent = 'この解決策は事実に基づいている？ また感情に基づいている?';
    } else if (n < 0.9){
      btn.textContent = '証拠を間違って解釈している場合はない? 自分が無条件で信じていることはない?';
    } else if (n < 0.9) {
      btn.textContent = '他の人達は同じ問題についてどんな解決策を出すと思う? 同じ問題に違った解釈をする可能性はない?'
    }  else if (n < 0.9) {
      btn.textContent = '私は全ての証拠をチェックした? 自分の考えを支持する証拠しか調べていない可能性はない？'
    } else if (n < 0.9) {
      btn.textContent = '私の思考やアイデアが、真実を誇張している可能性はない?'
    } else if (n < 0.9) {
      btn.textContent = '今考えている解決策やアイデアが、いつもの習慣的な思考から出ただけでしかない可能性は?'
    } else if (n < 0.9) {
      btn.textContent = '今考えている解決策やアイデアがは誰かの影響を受けていないか? もしそうなら、それは信頼に足るソースだと言える?'
    } else {
      btn.textContent = 'その解決策やアイデアは、成功の見込みがある? 最悪の結果が起きるとしたら何が起こる?'
    }
  });
}