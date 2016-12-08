$(document).ready(function() {
	
	//点击分类给分类
	$(".classify li").click(function() {
		$(this).addClass("liAdd").siblings().removeClass("liAdd");
	});
	//点击分类给分类END
	//二级分类左侧
	var topLiIndex=0;
	$("body>.classify .classifytop ul li").click(function(){
		if ($(this).is(".classifyAdd")) {
			$(".classify").hide();
		} else{
			topLiIndex=$(this).index();
			$(this).children("i").html("&#xe602;");
			$(this).addClass("classifyAdd").siblings().removeClass("classifyAdd").children("i").html("&#xe603;");
			$(".classify .classifyBottom:eq("+topLiIndex+")").show().siblings().hide();
		}
		
	})
	$("body>.classify .classifyBottom .col-xs-5 ul li").click(function(){
		var liIndex=$(this).index();
		$(this).addClass("classifyBottomAdd").siblings().removeClass("classifyBottomAdd");
		$(".classify .classifyBottom:eq("+topLiIndex+") .col-xs-7 ul:eq("+liIndex+")").show().siblings().hide();
	})
	//点击任意处隐藏
	// 点击#pulldown任何地方  让#pulldown隐藏
	$("body>.classify").click(function(){  
		$("body>.classify").hide();
	
	});
	// 点击#pulldown>div>div,阻拦(让pulldown隐藏)(stopPropagation阻拦click事件冒泡)
	//及实现了 点击#pulldown>div>div之外的任何地方  让#pulldown隐藏 
	$('body>.classify div').click(function(event){ 
		event.stopPropagation(); 
	});
	$("#clickPullDown").click(function() {
		$("body>.classify").show();
	});
	$("#clickPullDown1").click(function() {
		$("body>.classify").hide();
	});
	//	滚动条事件
		$(window).scroll(function() {
		var scrollhight
		scrollhight = document.body.scrollTop;
		if(scrollhight > 250) {
			$("body>.container div.row").addClass("screenTop")

		} else {
			$("body>.container div.row").removeClass("screenTop")

		}
	});
	

})