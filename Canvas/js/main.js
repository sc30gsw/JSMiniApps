'use strict';

{
 // 四角形描画を実行する関数
 function drawFirst() {

  // canvasの取得
  const canvas = document.querySelector('.rectangle-first');

  // ブラウザがCnavasをサポートしているか検証
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  // Contextオブジェクトの取得(描画に必要) → contextのメソッドで図形を描画する
  // 引数に平面(2d)、立面(3d)を指定できる
  const ctx = canvas.getContext('2d');

  // fillRectの塗りつぶしの色を変更
  ctx.fillStyle = 'pink';
  // 塗りつぶされた四角形の描画
  // fillRect(x, y, width, height)
  ctx.fillRect(50, 50, 50, 50);
  
  // 枠線の色を変更
  ctx.strokeStyle = '#f00';
  // 枠線の太さを変更
  ctx.lineWidth = 8;
  // 枠線の接点を丸に変更(四角形の角)
  //ctx.lineJoin = 'round';
  // 枠線の接点を斜めに変更
  ctx.lineJoin = 'bevel';
  // 枠だけの四角形の描画
  ctx.strokeRect(50, 50, 50, 50);

  // 2つ目以降の四角形のスタイルの変更
  ctx.fillStyle = 'skyblue';
  ctx.strokeStyle = '#00b';
  ctx.fillRect(70, 70, 50, 50);
  ctx.strokeRect(70, 70, 50, 50);
 }

// グラデーションを描画する関数
 function drawSecond() {

  const canvas = document.querySelector('.rectangle-second');

  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const ctx = canvas.getContext('2d');

  // 線形のグラデーションの設定
  // xの始点 = x0, yの始点 = y0 / xの終点 = x1, yの終点 = y1
  // createLinearGradient(x0、y0、x1、y1)
  // const g = ctx.createLinearGradient(0, 0, canvas.width, 1);

  // 円形グラデーションの設定
  // 半径 = r
  //ctx.createRadialGradient(
  //   x0, y0, r0,
  //   x1, y1, r1
  // )

  const g = ctx.createRadialGradient(
    canvas.width / 2, canvas.height /2, 50,
    canvas.width /2 + 100, canvas.height /2 + 200, 500
  );

  // 始点と終点に色を設定
  g.addColorStop(0, '#f00');
  g.addColorStop(0.1, '#0f0')
  g.addColorStop(1, '#fff');

  ctx.fillStyle = g;

  ctx.fillRect(0, 0, canvas.width, canvas.height);
 }

 // 四角形に影をつける関数
 function drawShadow() {
  const canvas = document.querySelector('.rectangle-shadow');

  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const ctx = canvas.getContext('2d');

  // 右下に影をつける
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  // 影のぼかしを設定
  ctx.shadowBlur = 4;
  // 影の色を設定
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';

  ctx.fillRect(50, 50, 50, 50);
 }

 // 線を描画する関数
 function drawLine() {
  const canvas = document.querySelector('.line');

  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const ctx = canvas.getContext('2d');

  // 新しいパスの開始
  ctx.beginPath();
  // パスの始点を移動させる moveTo(x, y)
  ctx.moveTo(50, 50);
  // 線を引く lineTo(x, y)
  ctx.lineTo(100, 50);
  ctx.lineTo(100, 100);
  // パスを閉じる
  ctx.closePath();
  // 線を描画する
  ctx.stroke();
  // 線の中を塗りつぶす
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(150, 50);
  ctx.lineTo(250, 50);
  // 線を点線にする setLineDash([線を引く長さ, 空白の長さ])
  ctx.setLineDash([5, 10]);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 100);
  ctx.lineTo(250, 100);
  // 線を明示的に実線にする
  ctx.setLineDash([]);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(250, 150);
  // 線の太さを変更
  ctx.lineWidth = 16;
  // 線の終端のスタイルを変更する
  ctx.lineCap = 'round';
  ctx.stroke();

 }

 // 円弧を描画する関数
 function drawCircle() {
  const canvas = document.querySelector('.circle');

  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  // 円弧を描画する arc(x, y, r, start(始点の角度), end(終点の角度))
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.stroke();
 }

 drawFirst();
 drawSecond();
 drawShadow();
 drawLine();
 drawCircle();
}