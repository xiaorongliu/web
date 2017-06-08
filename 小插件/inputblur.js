//-------input获取焦点文字消失，失去焦点文字出现---
(function(){
	$(".input").each(function(){
		var input_text = $(this).val();
		$(this).bind({
			focus:function(event) {
				if($(this).val() == input_text){
					$(this).val('');					
				}
				//-----密码栏在input下面加一个label，点击后label隐藏
				$(this).next().css("display","none");
			},
			blur:function(event) {
				if($(this).val() == ''){
					$(this).val(input_text);
					$(this).next().css("display","block");
				}			
			}
		});
	})	
})();
