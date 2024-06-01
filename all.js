$(document).ready(function () {
  // 透過 on 隨時監聽
  $(".material-symbols-outlined").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("menu-show");
  });

  $(".toggle-icon").on("click", function (event) {
    event.preventDefault(); // 阻止<a>标签的默认行为
    if ($(this).text() === "menu") {
      $(this).text("close");
    } else {
      $(this).text("menu");
    }
  });
});
