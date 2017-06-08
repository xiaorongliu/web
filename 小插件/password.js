function input(){ 
	var pwd = $(".password input").val();
 	var level = 0,mode;
      	if (pwd == null || pwd == '') {
       		mode = 0;
      	}
      	else {
          	if (pwd.length < 6){
            	mode = 0;
            }else {
             	for (var i = 0; i < pwd.length; i++) {
                  	var charMode, charCode;
                  	charCode = pwd.charCodeAt(i);
                  	// 判断输入密码的类型
                  	if (charCode >= 48 && charCode <= 57) //数字  
                      	charMode = 1;
                  	else if (charCode >= 65 && charCode <= 90) //大写  
                      	charMode = 2;
                  	else if (charCode >= 97 && charCode <= 122) //小写  
                      	charMode = 4;
                  	else
                      	charMode = 8;
                  	mode |= charMode;
              	}
              	// 计算密码模式
              	level = 0;
              	for (i = 0; i < 4; i++) {
                  	if (mode & 1)
                      	level++;
                  	mode >>>= 1;
              	}
          	}
          	switch (level) {
              	case 0:
              		$(".password .img").css("background-image",
              			"url('../image/register/pwd_note_bg.png')");
                  	break;
              	case 1:
                	$(".password .img").css("background-image",
                		"url('../image/register/pwd_note_bg_low.png')");
                	break;
              	case 2:
                  	$(".password .img").css("background-image",
                  		"url('../image/register/pwd_note_bg_mid.png')");
                  	break;
              	default:
                  	$(".password .img").css("background-image",
                  		"url('../image/register/pwd_note_bg_high.png')");
                  	break;
         	}
     	}
      if(pwd.length > 20){
      alert("密码长度达到最大值");
    }
  }