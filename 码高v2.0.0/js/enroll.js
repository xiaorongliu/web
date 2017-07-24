   // 注册
   $('#z-qr').click(function() {
       var username = $('#user-name').val();
       var password = $("#user-password").val();
       var passworda = $("#user-passworda").val();
       var code = $("#code").val();
       if (username != "" && password == passworda && code.length == 4 && ) {
           $.ajax({
               type: "POST",
               url: "地址",
               dataType: "JSON",
               data: {
                   "user_name": username,
                   "password": password,
                   "code": code
               },
               success: function(data) {
                   switch (data) {
                       case 1: //用户已存在  
                           alert("该用户已存在！请换一个用户名注册。")
                           break;
                       case 2: //注册成功  
                           alert("注册成功！");
                           $.cookie("user", username);
                           window.location.href = "index.html";
                           break;
                       case 0: //验证码错误  
                           alert("验证码不正确！");
                           break;
                   }

               }
           })
       } else {
           alert("请检查您的输入！");
       }
   })