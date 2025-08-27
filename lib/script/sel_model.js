$(function(){

	$('#txtKeywd')
    	.focusin(function(e) {
    	$(this).css('color', '#000000');
    })
    .focusout(function(e) {
    	$(this).css('color', '#989898');
    });

    $(".js_script_off").hide();
    $(".js_script_on").show();
    //$(".search_checked_models").show();
    //$(".search_area").show();

    $(".next_anc").click(function(){
        var mdl = $(this).attr("value");
		next_click(mdl);

	    return false;
    });

    $(".sel_cat").click(function(){
        var cat = $(this).text();
		cat_click(cat);

	    return false;
    });
    
	$(".model_detail").click(function(){

		var html = ajaxRequest("../../lib/php/ajax.php", "getmdl_id" ,$(this).attr("target"));
		$("#modal_model_img").empty();
		$("#modal_model_list").empty();
		$("#modal_model_img").append($(this).children("a").children("img").clone());
		$("#modal_model_list").append(html);
		modalResize($(this).children("a").attr("target"));

	    $(".next_anc").click(function(){
	        var mdl = $(this).attr("value");
			next_click(mdl);

		    return false;
	    });

		//画面中央を計算する
		function modalResize(target){
			var width = $(window).width();
			var height = $(window).height();
			var cwidth = $("#" + target).outerWidth();
			var ch = $("#" + target).outerHeight();
			var top = (height - ch)/2;
			if (top < 0)	top = 0;
			//取得した値をcssに追加する
			$("#" + target).css({
				"left": ((width - cwidth)/2) + "px",
				"top": top + "px"
			});
		}
	});

	init();

	var type = getParameter("type");
	var c_data = ajaxRequest("../../lib/php/ajax.php", "getmdl", type).split(",");

	// 2オートコンプリート機能を適用
	$('#txtKeywd').autocomplete({
		source: c_data,
		autoFocus: true,
		delay: 500,
		minLength: 1
	});


	function next_click(mdl){
		if (mdl == "")
		    return false;

		var lang = $("input[name='lng']").val();
		var type = $("input[name='type']").val();
		var os  = $("input[name='os']").val();
		var ret = $("input[name='ret']").val();
		var nid = $("input[name='nid']").val();
		var url = decodeURIComponent(location.pathname) + "?lng=" + lang + "&type=" + type + "&mdl=" + mdl + "&nid=" + nid;
		if (os != "")
			url += "&os=" + os;
		if (ret != "")
			url += "&return=" + ret;

		location.href = url;
	}

	function cat_click(cat){
        $(".selected_item").text("---");
    
        $("#selected_cat").text(cat);

		clearClass();
        $(".category").addClass("selected");
        $(".model").addClass("display");
		
		$("#category_section").hide();
        $(".next_button").hide();
        $(".model_list").hide();

		var type = getParameter("type");
		var html = ajaxRequest("../../lib/php/ajax.php?type=" + type ,"getmdl_ctg", cat);
		$("#model_list").empty();
		$("#model_list").append(html);
		$("#model_list").show();

        $("#model_section").slideDown();
		$("#model_section").scrollTop(0);

	    $(".next_anc").click(function(){
	        var mdl = $(this).attr("value");
			next_click(mdl);

		    return false;
	    });

	    $("h2.category").click(function(){
	    	init();
			$(this).removeClass("selected_hover");
			clearEvent($(this));
			clearEvent($("h3.model"));
			clearEvent($("h3.series"));
		    return false;
	    });

		$("h2.category").hover(
			function () {
				$(this).addClass("selected_hover");
				$(this).css("cursor","pointer");
			},
			function () {
				$(this).removeClass("selected_hover");
				$(this).css("cursor","default");
			}
		);    
	}

	function init(){
        $(".selected_item").text("---");

		clearClass();
        $(".category").addClass("display");
        $(".model").addClass("hide");

        $("#model_section").hide();
        $(".next_button").hide();
		$("#category_section").slideDown();
		$(".category_list").slideDown();
	}
	
	function clearClass(){
        $(".select_title").removeClass("selected");
        $(".select_title").removeClass("display");
        $(".select_title").removeClass("hide");
	}

	function clearEvent(obj){
		obj.css("cursor","default");
		obj.unbind();
	}


	//URLパラメータ取得
	function getParameter(key)
	{
		var str = location.search.split("?");
		if (str.length < 2) {
			return "";
		}
		
		var params = str[1].split("&");
		for (var i = 0; i < params.length; i++) {
			var keyVal = params[i].split("=");
			if (keyVal[0] == key && keyVal.length == 2) {
				return decodeURIComponent(keyVal[1]);
			}
		}
		return "";
	}

	//テキストボックスの入力チェック
	function checkInput()
	{
	    if(document.textmodel.mdl.value == "")
	    {
	        return false;
	    }
	    
	    return true;
	}


	// サーバーへリクエスト送信
	function ajaxRequest(path, id, opt)
	{
        var result = $.ajax({
            url:path,
            type:'POST',
			async: false,
            data:{
                'id':id,
                'opt':opt
            }
        }).responseText;
		return result;
	}

	//URLパラメータ取得
	function getParameter(key)
	{
		var str = location.search.split("?");
		if (str.length < 2) {
			return "";
		}
		
		var params = str[1].split("&");
		for (var i = 0; i < params.length; i++) {
			var keyVal = params[i].split("=");
			if (keyVal[0] == key && keyVal.length == 2) {
				return decodeURIComponent(keyVal[1]);
			}
		}
		return "";
	}


});