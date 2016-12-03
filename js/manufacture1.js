$(document).ready(function() {
	
	//点击分类给分类
	$(".classify li").click(function() {
		$(this).addClass("liAdd").siblings().removeClass("liAdd");
	});
	//点击分类给分类END
	//二级分类左侧
	$(".pullDownLeft ul li").click(function() {
		
		var Number = $(this).index()
		if($(this).index() == 0) {
			$(".pullDownRight ul").show();
		} else {
			Number = --Number;
			$(".pullDownRight ul:eq(" + Number + ")").show().siblings().hide();
		}
		$(this).addClass("pullDownLeftAdd").siblings().removeClass("pullDownLeftAdd")
	});
	//二级分类左侧END
	//二级分类右侧
	$(".pullDownRight").click(function() {
		$("#pullDown").hide();
		$("#clickPullDown").removeClass("icon-9").addClass("icon-10")
		$(".classIFY").removeClass("screenTop")
	});
	//二级分类右侧END
	//	滚动条事件
	var scrollhight
	$(window).scroll(function() {
		
		scrollhight = document.body.scrollTop;
		if(scrollhight > 250) {
			$(".classIFY").addClass("screenTop")

		} else {
			$(".classIFY").removeClass("screenTop")

		}
	});
	$("#clickPullDown").click(function() {
		$("body>.row").show();
	});
	$("#clickPullDown1").click(function() {
		$("body>.row").hide();
	});
	//	滚动条事件END
	//收藏END

})