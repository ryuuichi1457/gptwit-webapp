// ボタン要素とAPIキーの入力フィールドを取得
document.addEventListener("DOMContentLoaded", function() {
  const btnPassview = document.getElementById("btn_passview");
  const apiKeyInput = document.getElementById("API_KEY");

  // 表示ボタンのクリックイベントを処理
  btnPassview.addEventListener("click", function() {
    if (apiKeyInput.type === "password") {
      // APIキーの入力フィールドがパスワードフィールドの場合、テキストフィールドに変更
      apiKeyInput.type = "text";
    } else {
      // APIキーの入力フィールドがテキストフィールドの場合、パスワードフィールドに変更
      apiKeyInput.type = "password";
    }
  });
});