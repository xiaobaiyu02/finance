$(document).ready(function(){
	
	//del position
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var bodyWidth = $("body").width();
	var bodyHeight = $("body").height();
	var delWindth = $(".del_box").width();
	var delHeight = $(".del_box").height();
	if(bodyHeight > windowHeight){
		$(".del").height(bodyHeight);
	}else{
		$(".del").height(windowHeight);
	};
	$(".del").width(bodyWidth);
	$(".del_box").css({"top":[windowHeight - delHeight]/2,"left":[windowWidth - delWindth]/2});
	
	$(".part_1").show();
	$(".del,.part_2").hide()
	$(".del_btn").click(function(){
		$(".del").show();
	});
	$(".close").click(function(){
		$(".part_1").show();
		$(".del,.part_2").hide()
	});
	$(".open").click(function(){
		$(".part_1").hide();
		$(".part_2").show();
		$(".part_2 .iconfont").animate(
			{fontSize:"100px"},300
		).animate(
			{fontSize:"50px"},400
		);
	});
	
	
	
	//header_r&right width
	$(window).resize(function(){
		var i = $("body").width();
		var width = $(window).width();
		var logoWidth = $(".logo").width();
		var leftWidth = $(".left").width();
		var userWidth = $(".user").width();
		if (i <= 1000){
			$(".header_r").width(i - logoWidth);
			$(".right,.right iframe").width(i - leftWidth - 40);
			$(".nav").width(i - logoWidth - userWidth - 40);
		}else{
			$(".header_r").width(width - logoWidth - 20);
			$(".right,.right iframe").width(width - leftWidth - 40);
			$(".nav").width(width - logoWidth - userWidth - 90);
		};
	});
	$(window).resize();
	
	//nav hover&click
	var navIconfont = "<i class='iconfont'>&#xe641;</i>";
	$(".nav a:eq(0)").addClass("a_click");
	$(".nav li:eq(0)").append(navIconfont);
	var navA_width = $(".nav li:eq(0)").width();
	var navI_width = $(".nav li:eq(0) .iconfont").width();
	var navI_margin = [navA_width - navI_width]/2;
	$(".nav li:eq(0)").find(".iconfont").css("left",navI_margin);
	
	$(".nav a").hover(function(){
		$(this).append(navIconfont);
		var navA_width = $(this).width();
		var navI_width = $(".nav .iconfont").width();
		var navI_margin = [navA_width - navI_width]/2;
		$(this).find(".iconfont").css("margin-left",navI_margin);
	},function(){
		$(".nav a").find(".iconfont").remove();
	});
	
	$(".nav li").click(function(){
		$(".nav li").find(".iconfont").remove();
		$(this).append(navIconfont);
		$(".nav a").removeClass("a_click");
		$(this).find("a").addClass("a_click");
		var navA_width = $(this).width();
		var navI_width = $(".nav .iconfont").width();
		var navI_margin = [navA_width - navI_width]/2;
		$(this).find(".iconfont").css("left",navI_margin);
	});
	
	//left menu
	
	
	var downIconfont = "<i class='iconfont arrow iconfont_active'>&#xe604;</i>";
	var upIconfont = "<i class='iconfont arrow iconfont_active'>&#xe641;</i>";
//	$(".menu .iconfont").after(downIconfont);
	
	$(".menu .a_1").click(function(){
		$(".menu .a_1").find(".arrow").replaceWith("<i class='iconfont arrow'>&#xe604;</i>");
		$(".menu .a_1").next(".submenu").stop(true).slideUp(300);
		$(this).find(".arrow").replaceWith(downIconfont);
		
		if($(this).next(".submenu").css("display")=="none"){
			$(this).next(".submenu").stop(true).slideDown(300);
			$(this).find(".arrow").replaceWith(upIconfont);
		}else{
			
		};
	});
	
	$(".menu a").hover(function(){
		$(".menu .iconfont").removeClass("iconfont_active");
		$(this).find(".iconfont").addClass("iconfont_active");
	},function(){
		$(".menu .iconfont").removeClass("iconfont_active");
	});
	
	$(".submenu a").click(function(){
		$(".submenu a").removeClass("a_active");
		$(this).addClass("a_active");
		$(".submenu .iconfont").removeClass("iconfont_active");
		$(this).find(".iconfont").addClass("iconfont_active");
		
		/*$(this).parent().addClass("cur").siblings().removeClass("cur");	// 给当前链接父级添加 类“cur”
		$("iframe").attr("src",$(this).attr("href"));	// 设定当前框架iframe 的地址为 该链接地址
		
		$(this).attr("href");	//获取当前 链接的地址
		$("iframe").attr("src");	//获取当前 iframe 的地址
		//$("iframe").attr("src",url); //设置 iframe 的src地址
		
		var aHref = $(this).attr("href");
		var iframeHref = $("iframe").attr("src");
		if(aHref == iframeHref){
			$(".submenu a").removeClass("a_active");
			$(this).addClass("a_active");
		}else{
		};*/
	});
	
	
	//list checked全选
	$(function () {
        // chkAll全选事件
        $(".chkAll").bind("click", function () {
            $(this).parents(".list").find("[name = chkItem]:checkbox").attr("checked", this.checked);
        });

        // chkItem事件
        $("[name = chkItem]:checkbox").not(".chkAll").bind("click", function () {
            var $chk = $("[name = chkItem]:checkbox");
            $(".chkAll").attr("checked", $chk.length == $chk.filter(":checked").length);
        });
    });
	
	/*//list 选项卡
	$(".search li").eq(0).addClass("li_active");
	$(".list").hide();
	$(".list").eq(0).show();
	$(".search li").click(function(){
		$(".search li").removeClass("li_active");
		$(this).addClass("li_active");
		var $index = $(this).index();
		$(".list").hide();
		$(".list").eq($index).show();
	});*/
	$(".list tbody tr").hover(function(){
		$(".list tbody tr").css("background","#ffffff");
		$(this).css("background","#eeeeee");
	},function(){
		$(".list tbody tr").css("background","#ffffff");
	});
	
	//list paixu
	$(".list th:contains(发布时间),.list th:contains(贷款金额)").toggle(function(){
		$(this).find(".iconfont").replaceWith(upIconfont);
	},function(){
		$(this).find(".iconfont").replaceWith(downIconfont);
	});
	
	//add_row
	$(".add_row").hide();
	$(".add_row:eq(0)").show();
	$(".nextStep").click(function(){
		$(this).parents(".add_row").hide();
		$(this).parents(".add_row").next(".add_row").show();
		var $index = $(this).parents(".add_row").index();
		$(".part li").eq($index + 1).addClass("li_active");
	});
	
	
	var headerHeight = $(".header").outerHeight();
	var rightHeight = $(".right").outerHeight();
	var footerHeight = $(".footer").outerHeight();
	var leftHeight = windowHeight - headerHeight - footerHeight;
	if(windowHeight > headerHeight + rightHeight + footerHeight){
		$(".left").height(leftHeight);
	}else{
		$(".left").height(rightHeight);
	};
	
	//footer
	var headerHeight = $(".header").height();
	var contentHeight = $(".content").height();
	var plusHeight = headerHeight + contentHeight;
	var footerHeight = $(".footer").innerHeight();
	var footerMargintop = windowHeight - plusHeight - footerHeight - 40;
	if(plusHeight + footerHeight < windowHeight){
		$(".footer").css("margin-top",footerMargintop);
	}else{
		$(".footer").css("margin-top",0);
	};
	
	
});
