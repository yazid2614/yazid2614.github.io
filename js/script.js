// function open_box() {
//     $('#post-box').show();
// }
// function close_box() {
//     $('#post-box').hide();
// }

function open_box() {
    var x = document.getElementById("post-box");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }