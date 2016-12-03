$(document).ready(function(){
	$("#classify").click(function(){
		$(".classify").show();
	});
	var topLiIndex=0;
	$(".classify .classifytop ul li").click(function(){
		if ($(this).is(".classifyAdd")) {
			$(".classify").hide();
		} else{
			topLiIndex=$(this).index();
			$(this).children("i").html("&#xe602;");
			$(this).addClass("classifyAdd").siblings().removeClass("classifyAdd").children("i").html("&#xe603;");
			$(".classify .classifyBottom:eq("+topLiIndex+")").show().siblings().hide();
		}
		
	})
	$(".classify .classifyBottom .col-xs-5 ul li").click(function(){
		var liIndex=$(this).index();
		$(this).addClass("classifyBottomAdd").siblings().removeClass("classifyBottomAdd");
		$(".classify .classifyBottom:eq("+topLiIndex+") .col-xs-7 ul:eq("+liIndex+")").show().siblings().hide();
	})
	//点击任意处隐藏
	// 点击#pulldown任何地方  让#pulldown隐藏
	$(".classify").click(function(){  
		$(".classify").hide();
	
	});
	// 点击#pulldown>div>div,阻拦(让pulldown隐藏)(stopPropagation阻拦click事件冒泡)
	//及实现了 点击#pulldown>div>div之外的任何地方  让#pulldown隐藏 
	$('.classify div').click(function(event){ 
		event.stopPropagation(); 
	});
	$(".dropdown>ul.list-inline").click(function(){
		
		$(".dropdown-menu").show();
		
	})
	$(".dropdown>ul.dropdown-menu>li").click(function(){
		var index=$(this).index();
		$(this).siblings("li").children().removeClass("menuadd");
		$(this).children("a").addClass("menuadd");
		if (index<3) {
			index=index
		} else if(index<9) {
			index=index-3
		} else{
			index=index-6
		}
		$(".dropdown>ul.dropdown-menu>ul:eq("+index+")").show().siblings("ul").hide()
		
	})
	$(document).click(function(){  
		$(".dropdown-menu").hide();
	
	});
	$('.dropdown').click(function(event){ 
		event.stopPropagation(); 
	});
})