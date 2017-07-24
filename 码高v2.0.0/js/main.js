~(function() {
  $(".icon-menu").click(function(a) {
    a.stopPropagation();
    var b = $(".menu");
    if (b.css("display") == "none") {
      b.show();
    } else {
      b.hide();
    }
    $(document).click(function() {
      b.hide();
    })
  })
  $(".city").click(function(a) {
    a.stopPropagation();
    var b = $(".address");
    if (b.css("display") == "none") {
      b.show();
    } else {
      b.hide();
    }
    $(document).click(function() {
      b.hide();
    })
  })
  $.init();
})()
$(document).ready(function() {　　
  $('body').height($('body')[0].clientHeight);
  console.log($('body')[0].clientHeight);
});
// 点击触发购物车
var height = window.screen.height;
$(".li_gwc").click(function() {
    $("#li_face").show();
    $("#li_form").css({ 'display': 'block' });
  })
  // 点击关闭购物车
$("#li_gb").click(function() {
  $("#li_face").hide();
  $("#li_form").css({ 'display': 'none' });
})

$("#li_reduce").click(function() {
  var num = $("#li_number").text();
  num--;
  if (num <= 0) {
    return;
  }
  $("#li_number").text(num)
})

$("#li_add").click(function() {
  var num = $("#li_number").text();
  num++;
  $("#li_number").text(num)
})