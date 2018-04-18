(function($) {
	$.fn.sookinValid = function(options) {
		var listValids = [];
		$(this).each(function() {
			if ($(this).attr("isvalid") !== undefined && $(this).attr("submitids") !== undefined) {
				listValids.push($(this));
				var wrong = "<p style='display:none' class='wrong fl'><i class='iconfont'>&#xe620;</i>请输入正确内容</p>";
				var correct = "<p style='display:none' class='correct fl'><i class='iconfont'>&#xe66f;</i>输入正确</p>";
				$(this).after(wrong).after(correct);
			}
		});
		for (var i = 0; i < listValids.length; i++) {
			$(listValids[i]).on({
				keyup: function(event) {
					validation(this);
				},
				blur: function(event) {
					validation(this);
				},
				focus: function(event) {
					validation(this);
				},
				click: function(event) {
					validation(this);
				},
				keydown: function(event) {
					validation(this);
				},
				keypress: function(event) {
					validation(this);
				},
				change: function(event) {
					validation(this);
				}
			});
		}
	};
})(jQuery);


function wrong(id){
	id.nextAll("p.wrong:eq(0)").show();
	id.nextAll("p.correct:eq(0)").hide();
}

function sccuess(id){
	id.nextAll("p.wrong:eq(0)").hide();
	id.nextAll("p.correct:eq(0)").show();
}


function validation(id) {
	var ids = $(id).attr("submitids");
	
	var res = valid.call(null, $(id).attr("isvalid") , $(id).val());
	//var res = eval($(id).attr("isvalid") + "('" + $(id).val() + "')");
	if (res) {
		$(id).attr("valided", "1");
		sccuess($(id));
	} else {
		$(id).attr("valided", "0");
		wrong($(id));
	}
	
	var allInput = $("* [submitids=" + ids + "]");
	
	for(var i = 0; i < allInput.length; i++){
		var input = $(allInput[i]);
		//var isok = eval(input.attr("isvalid") + "('" + input.val() + "')");
		
		var isok = valid.call(null, input.attr("isvalid"), input.val());
		if (isok) {
			input.attr("valided", "1");
		} else {
			input.attr("valided", "0");
		}
	}
	
	var valided = $("* [valided=1][submitids=" + ids + "]").length;
	var count = allInput.length;
	/*console.log(valided);
	console.log("---------------");
	console.log(count);*/
	if (count == valided) {
		$(ids).removeAttr("disabled");
		$(ids).removeClass("submitGray");
	} else {
		$(ids).attr("disabled", "disabled");
		$(ids).addClass("submitGray");
	}
}
