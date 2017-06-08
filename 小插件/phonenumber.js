var Phone=function(){
	var reg = /^1(3[0-9]{1}||4[57]{1}||5[0-35-9]{1}||7[0135678]{1}||8[0-9]{1})\d{8}$/;
	//--input里面用onchange，失去焦点时获取val值。
	var num = $(".phone input").val();
	num = $.trim(num);
	if((num == '') || (num == null) || (num == undefined)){
		return
	}else if(!reg.test(num)){
		alert("请输入正确的手机号");
	}
}