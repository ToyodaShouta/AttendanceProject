<script>

    var previousCommand = null;

    function registerAttendance(command) {

    previousCommand = command;

    const button1 = document.getElementById("custom-button1");
    const button2 = document.getElementById("custom-button2");
    const button3 = document.getElementById("custom-button3");
    const button4 = document.getElementById("custom-button4");

    let currentButton = 1;

function checkButtonOrder(clickedButton) {
  switch (currentButton) {
    case 1:
      if (clickedButton === button1) {
        var message ="時間: " + currentTime + command + "しました。";
        currentButton = 2;
      } else {
        console.log("ボタン1以外のボタンがクリックされました");
      }
      break;
    case 2:
      if (clickedButton === button2) {
        var message ="時間: " + currentTime + command + "しました。";
        currentButton = 3;
      } else {
        console.log("ボタン2以外のボタンがクリックされました");
      }
      break;
    case 3:
      if (clickedButton === button3) {
        var message ="時間: " + currentTime + command + "しました。";
        currentButton = 1;
      } else {
        console.log("ボタン3以外のボタンがクリックされました");
      }
      break;
      case 4:
        if (clickedButton === button4) {
          var message ="時間: " + currentTime + command + "しました。";
          currentButton = 1;
        } else {
          console.log("ボタン4以外のボタンがクリックされました");
        }
        break;
    default:
      console.log("エラー：打刻修正を依頼してください。");
  }
}

button1.addEventListener("click", () => {
  checkButtonOrder(button1);
});

button2.addEventListener("click", () => {
  checkButtonOrder(button2);
});

button3.addEventListener("click", () => {
  checkButtonOrder(button3);
});
button4.addEventListener("click", () => {
  checkButtonOrder(button4);
});

///以下テスト文
    switch (currentButton) {
        case 値1:///
         // 値1と一致する場合の処理
        break;alert("既に" + command + "しています。");
        case 値2:///
        // 値2と一致する場合の処理
        break; alert("既に" + command + "しています。");
     // どの値にも一致しない場合の処理
     //(default)で打刻完了処理
        default: var currentTime = new Date().toLocaleString();
    var message ="時間: " + currentTime + command + "しました。";
    ｝}
    alert(message);
    }

    function toggleMenu(menuId) {
        const menuContent = document.getElementById(menuId);
        menuContent.classList.toggle('active');
      }
</script>