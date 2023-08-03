<script>

var previousCommand = null;
  
      function registerAttendance(command) {
      
        var currentTime = new Date().toLocaleString();
        var message = command + "時間: " + currentTime;
  
        previousCommand = command;
      }

// ボタン要素を取得
const getTimeButton = document.getElementById('getTimeButton');
// 時刻を管理するための配列
let timeData = [];

// ボタンがクリックされたときの処理
getTimeButton.addEventListener('click', function() {

  // 現在の時刻を取得
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0'); // 0埋めした2桁の時を取得
  const minutes = now.getMinutes().toString().padStart(2, '0'); // 0埋めした2桁の分を取得
  const seconds = now.getSeconds().toString().padStart(2, '0'); // 0埋めした2桁の秒を取得

// 時刻を表示する要素にセット
currentTimeElement.textContent = `登録時刻: ${hours}:${minutes}`;
});
 }
function registerAttendance(command) {
switch (previousCommand === command) {
    case 値1:///
     // 値1と一致する場合の処理
    break;alert("既に" + command + "登録されています。");
    case 値2:///
    // 値2と一致する場合の処理
    break; alert("既に" + command + "登録されています。");

 // どの値にも一致しない場合の処理
 //(default)で打刻完了処理
    default: var currentTime = new Date().toLocaleString();
var message = command + "時間: " + currentTime;
｝

alert(message);
previousCommand = command;
}


function registerAttendance(command) {
if (previousCommand === command) {
alert("既に登録されています。");
return;
}

var currentTime = new Date().toLocaleString();
var message = command + "時間: " + currentTime;

alert(message);
    previousCommand = command;
  }

//1日に　出勤、(休憩開始、休憩終了)、退勤の順に打刻しないとアラート
//データベースが完成しないと〇〇が打刻されていないを表示するのは難しい
 
</script>