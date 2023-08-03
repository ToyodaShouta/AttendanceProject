<script>
 
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
    ｝}
    alert(message);

    var previousCommand = null;

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

    function toggleMenu(menuId) {
        const menuContent = document.getElementById(menuId);
        menuContent.classList.toggle('active');
      }
</script>