 //修改开营日期在这里修改，只需要把下面的日期更改为设定的日期即可
 //修改开营日期在这里修改，只需要把下面的日期更改为设定的日期即可
 //修改开营日期在这里修改，只需要把下面的日期更改为设定的日期即可
 var date1 = new Date("2017/07/09");
 var date2 = new Date("2017/07/23");
 var date3 = new Date("2017/07/30");
 var date4 = new Date("2017/08/31");
 var year1 = date1.getFullYear();
 var year2 = date2.getFullYear();
 var year3 = date3.getFullYear();
 var year4 = date4.getFullYear();
 var month1 = date1.getMonth() + 1;
 var month2 = date2.getMonth() + 1;
 var month3 = date3.getMonth() + 1;
 var month4 = date4.getMonth() + 1;
 var dd1 = date1.getDate();
 var dd2 = date2.getDate();
 var dd3 = date3.getDate();
 var dd4 = date4.getDate();
 for (var i = 0; i < 4; i++) {
   $(".r-index-date-ppp").find("p").eq(0).text(year1 + "年" + month1 + "月" + dd1 + "日");
   $(".r-index-date-ppp").find("p").eq(2).text(year2 + "年" + month2 + "月" + dd2 + "日");
   $(".r-index-date-ppp").find("p").eq(4).text(year3 + "年" + month3 + "月" + dd3 + "日");
   $(".r-index-date-ppp").find("p").eq(6).text(year4 + "年" + month4 + "月" + dd4 + "日");
   $(".r-cdate-middle ul li").find("p").eq(i * 2).text($(".r-index-date-ppp").find("p").eq(i * 2).text());
 }
 setInterval(function() {
   //修改倒计时时间时，只需要把下面的时间更改为活动结束时的时间即可，格式不要变。
   //到达结束时间，或把时间修改为当前时间之前的任意时间“距活动时间结束”自动消失。
   //修改时间时，只需要把下面的时间更改为活动结束时的时间即可，格式不要变。
   //到达结束时间，或把时间修改为当前时间之前的任意时间“距活动时间结束”自动消失。
   //修改时间时，只需要把下面的时间更改为活动结束时的时间即可，格式不要变。
   //到达结束时间，或把时间修改为当前时间之前的任意时间“距活动时间结束”自动消失。
   var date = new Date("2017/07/30 00:00:00");
   var localdate = new Date();
   var localyear = localdate.getFullYear();
   var localmonth = localdate.getMonth() + 1;
   var localdd = localdate.getDate();
   var datediff = (date.getTime() - localdate.getTime()) / 1000;
   var day1 = parseInt(datediff / 864000);
   var day2 = parseInt((datediff / 86400) % 10);
   var hour1 = parseInt((datediff - (day1 * 10 + day2) * 86400) / 36000);
   var hour2 = parseInt(((datediff - (day1 * 10 + day2) * 86400) / 3600) % 10);
   var min1 = parseInt((datediff - (day1 * 10 + day2) * 86400 - (hour1 * 10 + hour2) * 3600) / 600);
   var min2 = parseInt(((datediff - (day1 * 10 + day2) * 86400 - (hour1 * 10 + hour2) * 3600) / 60) % 10);
   var sec1 = parseInt((datediff - (day1 * 10 + day2) * 86400 - (hour1 * 10 + hour2) * 3600 - (min1 * 10 + min2) * 60) / 10);
   var sec2 = parseInt(datediff % 10);
   $(".r-pay-two-two ul").find("li").eq(0).html(day1);
   $(".r-pay-two-two ul").find("li").eq(1).html(day2);
   $(".r-pay-two-two ul").find("li").eq(3).html(hour1);
   $(".r-pay-two-two ul").find("li").eq(4).html(hour2);
   $(".r-pay-two-two ul").find("li").eq(7).html(min1);
   $(".r-pay-two-two ul").find("li").eq(8).html(min2);
   $(".r-pay-two-two ul").find("li").eq(10).html(sec1);
   $(".r-pay-two-two ul").find("li").eq(11).html(sec2);
   if (datediff < 0) {
     $(".r-pay-two-two").css("display", "none");
     $(".r-pay-two-one").css("height", "100");
     $(".r-pay-two-one p").css("line-height", "3rem");
   };
   if (year1 < localyear || (year1 == localyear && month1 < localmonth) || (year1 == localyear && month1 == localmonth && dd1 < localdd)) {
     $(".r-cdate-middle ul li").eq(0).find("p").eq(1).text("已闭营");
     $(".r-cdate-middle ul li").eq(0).css("background-color", "#eee");
     $(".r-cdate-middle ul li").eq(0).find("p").css("color", "#ccc");
     $(".r-index-date-ppp").find("p").eq(0).css("color", "#ccc");
     $(".r-index-date-ppp").find("p").eq(1).css("color", "#ccc");
   }
   if (year2 < localyear || (year2 == localyear && month2 < localmonth) || (year2 == localyear && month2 == localmonth && dd2 < localdd)) {
     $(".r-cdate-middle ul li").eq(1).find("p").eq(1).text("已闭营");
     $(".r-cdate-middle ul li").eq(1).css("background-color", "#eee");
     $(".r-cdate-middle ul li").eq(1).find("p").css("color", "#ccc");
     $(".r-index-date-ppp").find("p").eq(2).css("color", "#ccc");
     $(".r-index-date-ppp").find("p").eq(3).css("color", "#ccc");
   }
   if (year3 < localyear || (year3 == localyear && month3 < localmonth) || (year3 == localyear && month3 == localmonth && dd3 < localdd)) {
     $(".r-cdate-middle ul li").eq(2).find("p").eq(1).text("已闭营");
     $(".r-cdate-middle ul li").eq(2).css("background-color", "#eee");
     $(".r-cdate-middle ul li").eq(2).find("p").css("color", "#ccc");
     $(".r-index-date-ppp").find("p").eq(4).css("color", "#ccc");
     $(".r-index-date-ppp").find("p").eq(5).css("color", "#ccc");
   }
   if ((year4 < localyear) || ((year4 == localyear) && (month4 < localmonth)) || ((year4 == localyear) && (month4 == localmonth) && (dd4 < localdd))) {
     $(".r-cdate-middle ul li").eq(3).find("p").eq(1).text("已闭营");
     $(".r-cdate-middle ul li").eq(3).css("background-color", "#eee");
     $(".r-cdate-middle ul li").eq(3).find("p").css("color", "#ccc");
     $(".r-index-date-ppp").find("p").eq(6).css("color", "#ccc");
     $(".r-index-date-ppp").find("p").eq(7).css("color", "#ccc");
   }
 }, 1000);
 //其他操控按钮
 var indexText1, indexText2;
 $(".r-index-date-all li").each(function() {
   $(this).click(function() {
     indexText1 = $(this).find("p").eq(0).text();
     indexText2 = $(this).find("p").eq(1).text();
     $(".r-index-date-all").css("display", "none");
     $(".r-index-date-ppp-p").html(indexText1 + indexText2);
   })
 });
 $(".r-pay-one").click(function() {
   $("#r-mask").css("display", "block");
 });
 $(".r-mask-one").click(function() {
   $("#r-mask").css("display", "none");
 });
 $(".r-pay-three").click(function() {
   $("#r-cdate").css("display", "block");
 });
 $(".r-index-date-up").click(function() {
   $(".r-index-date-all").css("display", "block");
 });
 $(".r-cdate-up-two").click(function() {
   $("#r-cdate").css("display", "none");
 });
 $(".r-cdate-middle ul li").each(function() {
   if ($(this).find("p").eq(1).text() == "已闭营") {
     $(this).css("background-color", "#eee");
     $(this).find("p").css("color", "#ccc");
   } else {
     $(this).click(function() {
       $(".r-cdate-middle ul li").css("background-color", "#eee");
       $(".r-cdate-middle ul li p").css("color", "#000");
       $(this).css("background-color", "#408ce0");
       $(this).find("p").css("color", "#fff");
       $(this).attr('data-checked', 1);
       $(".r-cdate-middle ul li").each(function() {
         if ($(this).find("p").eq(1).text() == "已闭营") {
           $(this).css("background-color", "#eee");
           $(this).find("p").css("color", "#ccc");
         }
       })
     })

   }
 })
 var arrSure = []
 $(".r-cdate-sure").click(function() {
   $(".r-cdate-middle ul li").each(function() {
     arrSure.push($(this).attr('data-checked'))
   })
   if (arrSure.indexOf("1") == -1) {
     alert("请选择日期")
     console.log(arrSure)
   } else {
     window.location.href = "apply.html"
   }
 })