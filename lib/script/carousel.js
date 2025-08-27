$(function(){
    // prev,nextをクリックしたときに動かすliの数
    var offset = 0;
    var li_move = 2;
    // prev,nextを追加
    //$("#js_crsl_block-wrap").append('<div id="js_crsl_prev" class="hide"></div><div id="js_crsl_next" class="show"></div>');
    // カルーセルパネルの幅を取得
    var carousel_wid = $("#js_crsl_block").width() + 20;
    // liのpaddingを含む幅を取得
    var li_wid = $("#js_crsl_block li").outerWidth() + 10;
    // liの数を取得
    var li_num = $("#js_crsl_block li").size();
    // ulの幅を計算(liを全部横に並べた幅)
    var ul_wid = li_wid*li_num;
    // ulにスタイルを追加
    $('#js_crsl_block ul').css({
        position: 'absolute',
        top: '0',
        left: '0',
        width: ul_wid+'px'
    });
    $('#js_crsl_prev').hide();

	var rtl = false;
	if ($("body").css("text-align") == "right") {
		rtl = true;
	}

    $('#js_crsl_prev').click(function(){

        if (!$(this).is(":hidden")) {
            var ppos = boxPosition("#js_crsl_block ul");
			for (var move=1; move<li_move; move++) {
	            if(ppos+li_wid*(move+1) > 0) {
					break;
				}
			}
			var set = {left:'+='+li_wid*move};
			if (rtl) {
				set = {right:'+='+li_wid*move};
			}
            $('#js_crsl_block ul:not(:animated)').animate(
                set,
                200,
                function(){
                    // アニメーションが完了したらulのpositionを取得
                    var ul_pos = boxPosition("#js_crsl_block ul");
                    $('#js_crsl_next').show();
                    if(ul_pos === 0) {
                        $('#js_crsl_prev').hide();
                    }
                }
            );
			offset++;
        }
    });

    $('#js_crsl_next').click(function(){

        if (!$(this).is(":hidden")) {
            var ppos = boxPosition("#js_crsl_block ul");
			for (var move=1; move<li_move; move++) {
	            if(carousel_wid > (ul_wid+(ppos-li_wid*move))) {
					break;
				}
			}
			var set = {left:'-='+li_wid*move};
			if (rtl) {
				set = {right:'-='+li_wid*move};
			}
            $('#js_crsl_block ul:not(:animated)').animate(
                set,
                200,
                function(){
                    var ul_pos = boxPosition("#js_crsl_block ul");
                    $('#js_crsl_prev').show();
                    if(carousel_wid > (ul_wid+ul_pos)) {
                        $('#js_crsl_next').hide();
                    }
                }
            );
			offset--;
        }
    });

	$(window).resize(function(){
	    carousel_wid = $("#js_crsl_block").width() + 20;
	    li_wid = $("#js_crsl_block li").outerWidth() + 10;
	    ul_wid = li_wid*li_num;
		var pl = li_wid * offset;
	    var li_w = $("#js_crsl_block").outerWidth();
		if (pl > 0) pl = 0;
		if (pl < li_w - ul_wid) pl = li_w - ul_wid;
		if (rtl) {
		    $('#js_crsl_block ul').css({
		        position: 'absolute',
		        top: '0',
		        right: pl,
		        width: ul_wid+'px'
		    });
		} else {
		    $('#js_crsl_block ul').css({
		        position: 'absolute',
		        top: '0',
		        left: pl,
		        width: ul_wid+'px'
		    });
		}

	}).resize();

    function boxPosition(ele) {
		var pos = "left";
		if (rtl) {
			pos = "right";
		}
        return parseInt($(ele).css(pos).replace("px",""));
    }
});
