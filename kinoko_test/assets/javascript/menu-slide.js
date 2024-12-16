
const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".right-menu");

setInterval(() => {
  console.log("Adding class");
  $target.addClass(CLASSNAME);

  setTimeout(() => {
    console.log("Removing class");
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);

  console.log($target);  // これで選択した要素がコンソールに出力されるか確認
