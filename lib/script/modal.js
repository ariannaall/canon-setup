$(function(){
    // スクロールバーの横幅を取得
    $('html').append('<div class="scrollbar" style="overflow:scroll;"></div>');
    var scrollsize = window.innerWidth - $('.scrollbar').prop('clientWidth');
    $('.scrollbar').hide();

	$("body").append('<div id="js_modal_window_bg"></div>');
    $('#js_modal_window_bg').css({
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
		position: 'fixed',
		'background-color': 'rgba(0,0,0,0.5)',
		'z-index': '1'
    });
	$('#js_modal_window_bg').hide();
	
	$(".js_disp_modal").click(function(){

	$('html, body').css("overflow", "hidden");


		var target = $(this).attr("target");
        $("#" + target).wrap("<div class='modal-wrap'></div>");
	    $('.modal-wrap').css({
	        top: '0',
	        left: '0',
	        display: 'none',
	        width: '100%',
	        height: '100%',
			position: 'fixed',
			overflow: 'auto',
			'z-index': '2'
	    });
		$('.modal-wrap').show();

		//モーダルウィンドウを表示
		$("#js_modal_window_bg").fadeIn("slow");
		$("#" + target).show();
		$("#" + target).css("position", "relative");

		modalResize();

		$("#" + target).click(function(e){
            e.stopPropagation();
        });

		$(".js_close_modal, .modal-wrap").off().click(function(e){
            e.stopPropagation();
			//モーダルを閉じる
			$("#js_modal_window_bg, #" + target).fadeOut("slow",function(){

				$('#js_modal_window_bg').hide();
				$('html, body').css("overflow", "auto");
                //$("#" + target).unwrap();
				var parent = $('.modal-wrap').parent();
				if (parent != null) {
					var child = $('.modal-wrap').children().clone();
					$('.modal-wrap').remove();
					parent.append(child);
				}
			});
		});

		$(window).resize(modalResize);
		//画面中央を計算する
		function modalResize(){
			var width = $(window).width();
			var height = $(window).height();
			var cwidth = $("#" + target).outerWidth();
			var ch = $("#" + target).outerHeight();
			//取得した値をcssに追加する
			var top = (height - ch)/2;
			if (top < 0)	top = 0;

			if ($("body").css("text-align") == "right") {
				$("#" + target).css({
					"right": ((width - cwidth)/2) + "px",
					"top": top + "px"
				});
			} else {
				$("#" + target).css({
					"left": ((width - cwidth)/2) + "px",
					"top": top + "px"
				});
			}
		}
	});

});



