//  bai 5
let bai5 = () => {
  let deg = 15;
  setInterval(function () {
    $(".picture").css("rotate", `${deg}deg`);
    deg += 15;
  }, 2000);
};
bai5();

// bai 7
$(".btn").on("click", function () {
  $(this).css("visibility", "hidden");
});

$(".btn-alert").on("click", function () {
  alert("Wronggg LOL");
});
