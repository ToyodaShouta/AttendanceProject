<script>

    var previousCommand = null;

    function registerAttendance(command) {

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
        currentButton = 1;
      } else {
        console.log("ボタン1以外のボタンがクリックされました");
      }
      break;
    case 2:
      if (clickedButton === button2) {
        var message ="時間: " + currentTime + command + "しました。";
        currentButton = 2;
      } else {
        console.log("ボタン2以外のボタンがクリックされました");
      }
      break;
    case 3:
      if (clickedButton === button3) {
        var message ="時間: " + currentTime + command + "しました。";
        currentButton = 3;
      } else {
        console.log("ボタン3以外のボタンがクリックされました");
      }
      break;
      case 4:
        if (clickedButton === button4) {
          var message ="時間: " + currentTime + command + "しました。";
          currentButton = 4;
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
}
</script>