//------------------------------------------------------
//モーダルウインドウの定義
//------------------------------------------------------
function modal_display(target_id_,modal_area_id_,modal_close_id_,modal_bg_id_){
  //オブジェクトが存在しない場合は何もしないで終了
  if(document.getElementById(target_id_) == null) {
    return;
  }

  //ローカル変数定義
  var target_id = "#"+target_id_;
  var modal_area_id = "#"+modal_area_id_;
  var modal_close_id = "#"+modal_close_id_;
  var modal_bg_id = "#"+modal_bg_id_;

  //モーダルウインドウを表示するボタンのクリックイベント定義
  $(target_id).click(
    function(){
      //body内の最後にモーダル用背景領域を挿入
      $("body").append('<div id="'+modal_bg_id.replace("#","")+'"></div>');

      //モーダルウィンドウを表示
      $(modal_bg_id+","+modal_area_id).fadeIn("slow");

      //画面中央を計算する関数を実行
      modal_resize();
      }
  );

  //閉じるボタンのクリックイベント定義
  $(modal_close_id).click(
    function(){
      //閉じるボタンをクリックしたらモーダルを閉じる
      $(modal_area_id+","+modal_bg_id).fadeOut("slow",function(){
        //挿入したモーダル用背景領域を削除
        $(modal_bg_id).remove();
      });
    }
  );

  //ウインドウリサイズ時、モーダルウインドウを中央に再描画
  window.addEventListener("resize",modal_resize,false);


  //モーダルウインドウのリサイズ
  function modal_resize(){
    var width = $(window).width();
    var height = $(window).height();
    var cwidth = $(modal_area_id).outerWidth();
    var ch = $(modal_area_id).outerHeight();
    //取得した値をcssに追加する
    $(modal_area_id).css({
      "left": ((width - cwidth)/2) + "px",
      "top": ((height - ch)/2) + "px"
    });
  }

}


//------------------------------------------------------
//トグルボタンの定義
//------------------------------------------------------
function toggle_display(target_id_,area_id_,open_image_,close_image_,image_position_,area_default_,tgl_time_){
  //オブジェクトが存在しない場合は何もしないで終了
  if(document.getElementById(target_id_) == null) {
    return;
  }

  //ローカル変数定義
  var target_id = "#"+target_id_;
  var area_id = "#"+area_id_;
  var open_image = open_image_;
  var close_image = close_image_;
  var image_position = image_position_;
  var area_default = area_default_;
  var tgl_time = tgl_time_;
  var toggle_time = null;

  //slow/normal/fast以外はミリ秒の指定として扱い数値換算する
  if(tgl_time == "slow" || tgl_time == "normal" || tgl_time == "fast" ) {
    toggle_time = tgl_time;
  } else {
    toggle_time = Number(tgl_time);
  }

  //指定要素の子要素の先頭/最後に画像要素を追加
  if(image_position == "first"){
    if (area_default == "close"){
      $(area_id).css("display","none");
      $(target_id).prepend('<img src="'+close_image+'" id="'+target_id.replace("#","")+'_image">');
    } else {
      $(area_id).css("display","block");
      $(target_id).prepend('<img src="'+open_image+ '" id="'+target_id.replace("#","")+'_image">');
    }
  } else {
    if (area_default == "close"){
      $(area_id).css("display","none");
      $(target_id).append('<img src="'+close_image+'" id="'+target_id.replace("#","")+'_image">');
    } else {
      $(area_id).css("display","block");
      $(target_id).append('<img src="'+open_image+'" id="'+target_id.replace("#","")+'_image">');
    }
  }

  //トグルボタンのクリックイベント定義
  $(target_id).click(
    function(){
      if($(area_id).css("display") == "none") {
        $(area_id).toggle('blind', '', toggle_time );
        $(target_id+"_image").attr("src", open_image);
      } else if($(area_id).css("display") == "block") {
        $(area_id).toggle('blind', '', toggle_time );
        $(target_id+"_image").attr("src", close_image);
      }
    }
  );

}

//------------------------------------------------------
//フェードインの定義
//------------------------------------------------------
function fade_display(target_id_,fd_time_){
  //オブジェクトが存在しない場合は何もしないで終了
  if(document.getElementById(target_id_) == null) {
    return;
  }

  //ローカル変数定義
  var target_id = "#"+target_id_;
  var fd_time = fd_time_;
  var fade_time = null;

  //slow/normal/fast以外はミリ秒の指定として扱い数値換算する
  if(fd_time == "slow" || fd_time == "normal" || fd_time == "fast" ) {
    fade_time = fd_time;
  } else {
    fade_time = Number(fd_time);
  }
  $(target_id).css("opacity",0);
  $(target_id).animate({opacity:1},fade_time);
}

//------------------------------------------------------
//動画再生ウインドウを開くボタンの定義
//------------------------------------------------------
function window_open(target_id_,window_width,window_height,sprite_frame_){
  //オブジェクトが存在しない場合は何もしないで終了
  if(document.getElementById(target_id_) == null) {
    return;
  }

  //ローカル変数定義
  var target_id = "#"+target_id_;

  //ボタンのクリックイベント定義
  $(target_id).click(
    function(){
      window.open(
       this.href,
       'window',
       'width=640, height=540, menubar=no, toolbar=no, scrollbars=yes resizable=yes'
      );
      return false;
    }
  );
}

//------------------------------------------------------
//スプライトアニメーションの定義
//------------------------------------------------------
function sprite_display(target_id_,sprite_time_,sprite_direction_,sprite_frame_){
  //オブジェクトが存在しない場合は何もしないで終了
  if(document.getElementById(target_id_) == null) {
    return;
  }

  //ローカル変数定義
  var target_id = "#"+target_id_;
  var sprite_time = Number(sprite_time_);
  var sprite_direction = sprite_direction_;
  var sprite_frame = Number(sprite_frame_);
  var sprite_count = Number(sprite_frame_);

  //表示コマ数分、設定時間毎に再起呼び出し
  function sprite_start(sprite_current_count_){
    var sprite_current_count = sprite_current_count_-1;
    var sprite_length = null;
    var sprite_position = null;

    //スプライトの方向判別
    if(sprite_direction == "vertical"){
      sprite_length = $(target_id).height();
      sprite_position = '0px '+String(sprite_length*sprite_current_count*(-1))+'px';
    } else {
      sprite_length = $(target_id).width();
      sprite_position = String(sprite_length*sprite_current_count*(-1))+'px 0px';
    }
    //アニメーション開始(指定時間毎に背景画像の表示位置をずらしてアニメーションぽく見せる)
    if(sprite_current_count >= 0){
      $(target_id).css({"background-Position":sprite_position});
      setTimeout(
        function(){
          sprite_start(sprite_current_count);
        }
      ,sprite_time);
    } else {
      //アニメーション終了後、背景画像の位置を原点にする
      $(target_id).css({"background-Position":"0px 0px"});
    }
  }

  //アニメーション開始
  sprite_start(sprite_count);
}


//------------------------------------------------------
//スライドアニメーションの定義
//------------------------------------------------------
//スライドアニメーションクラス定義
function slide_animation_class(){
  this.currnt_position;
}

//スライドアニメーションの定義
function slide_animation(target_id_){
  //オブジェクトが存在しない場合は何もしないで終了
  if(document.getElementById(target_id_) == null) {
    return;
  }

  //ローカル変数定義
  var target_id = "#"+target_id_;

  //1スライド当たりの表示時間(秒)
  var frame_time = 2;

  //各種要素にIDを付与
  var slideshow = get_element(target_id, "."+unit_name+"_slideshow", target_id+"_slideshow");
  var progress_area = get_element(target_id, "."+unit_name+"_progress_area", target_id+"_progress_area");
  var navi_play_button = get_element(target_id, "."+unit_name+"_progress_button", target_id+"_progress_button");
  var count_area = get_element(target_id, "."+unit_name+"_count_area", target_id+"_count_area");

  //画像数を取得
  var image_elements = $(target_id+" ."+unit_name+"_slideshow").find("li");

  //画像の先読み
  for(var i = 0; i < image_elements.length; i++) {
    $("<img>").attr("src", $(image_elements[i]).find("img").attr("src"));
    $(image_elements[i]).css("z-index", i)
  }

  //プログレスバー作成
  $(progress_area).append('<div id="'+target_id.replace("#","")+'_progress_control" class="'+unit_name+'_progress_control"><div class="'+unit_name+'_progress_back"><div id="'+target_id.replace("#","")+'_progress_main" class="'+unit_name+'_progress_main"></div></div></div>')
  var progress_control = $(target_id+"_progress_control");
  var progress_main = $(target_id+"_progress_main");

  //スライドアニメーションクラスのインスタンス作成(現在の表示位置の保存用)
  var slide_animation_instance = new slide_animation_class();

  //プログレスバーの現在位置
  slide_animation_instance.currnt_position = 0;
  $(progress_main).width(0);
  $(count_area).text("1/"+image_elements.length);


  //プログレスバーのクリックイベント追加
  $(progress_control).click(function(e){
    setTimeout(function(){
      var percent;
      //プログレスバーの変更
      if(e.offsetX > $(progress_control).width()-3){
        percent = 100;
      } else {
        percent = e.offsetX / $(progress_control).width() * 100;
      }
      slide_animation_instance.currnt_position = percent;

      //スライドの変更
      slide_change();

      //現在のスライドの最初の時間に再設定
      slide_animation_instance.currnt_position = (($(progress_main).width()/$(progress_control).width()) - (1/image_elements.length))* 100;

    },50);
  });

  //ボタンのクリックイベント追加
  $(slideshow).click(function(){
    if($(slideshow).hasClass(unit_name+"_pause")){
    　//再生中の場合
      button_change("pause");
    } else {
    　//停止中の場合
      if($(slideshow).hasClass(unit_name+"_restart")){
        //最終スライドの場合初めから再生
        slide_animation_instance.currnt_position = 0;
        $(progress_main).width(0);
      }
      //スライドアニメーションの再開
      button_change("play");
      setTimeout(function(){
        slide_start();
      },50);
    }
  });

  //ナビゲーションボタンのクリックイベント追加
  $(navi_play_button).click(function(){
    if($(slideshow).hasClass(unit_name+"_pause")){
    　//再生中の場合
      button_change("pause");
    } else {
    　//停止中の場合
      if($(slideshow).hasClass(unit_name+"_restart")){
        //最終スライドの場合初めから再生
        slide_animation_instance.currnt_position = 0;
        $(progress_main).width(0);
      }
      //スライドアニメーションの再開
      button_change("play");
      setTimeout(function(){
        slide_start();
      },50);
    }
  });

  //スライドアニメーションのループ
  function slide_start(){
    setTimeout((function(){
      var percent;
      //プログレスを増加
      percent = parseFloat(slide_animation_instance.currnt_position) + (1/((image_elements.length - 1) * 20 * frame_time))*100;
      if(percent > 100){
        percent = 100;
      }
      $(progress_main).css("width",percent+"%");
      slide_animation_instance.currnt_position = percent;

      //スライドの変更
      slide_change();

      if($(slideshow).hasClass(unit_name+"_pause")){
        //再帰ループ
        slide_start();
      }
    }),50);
  }

  //スライドの変更
  function slide_change(){
    //スライドの番号を取得
    var slide_number = Math.floor(image_elements.length*slide_animation_instance.currnt_position/100);
    if(slide_number == image_elements.length){
      slide_number = image_elements.length - 1;
    }
    //移動後のスライドを表示する
    $(image_elements[slide_number]).css("z-index","100");
    for(var i = 0; i < image_elements.length; i++) {
      if(i != slide_number) {
        $(image_elements[i]).css("z-index",i);
      }
    }
    $(count_area).text((slide_number+1)+"/"+image_elements.length);
    var progress_width = (slide_number+1)/image_elements.length*100;
    $(progress_main).css("width",progress_width+"%");

    //再生中の時、プログレスの位置が最後の場合、1スライド当たりの表示時間(秒)後に停止する
    if($(slideshow).hasClass(unit_name+"_pause")){
      if(slide_animation_instance.currnt_position >= 100){
        button_change("restart");
      }
    } else {
      //停止中の時、画像を変更する
        button_change("pause")
    }
  }

  //再生ボタンの変更(クラス名を付け替える)
  function button_change(mode){
    var start_class = unit_name+"_start";
    var pause_class = unit_name+"_pause";
    var restart_class = unit_name+"_restart";
    if(mode == "play"){
      if ($(slideshow).hasClass(start_class)){
        $(slideshow).removeClass(start_class);
        $(navi_play_button).removeClass(start_class);
      }
      if ($(slideshow).hasClass(restart_class)){
        $(slideshow).removeClass(restart_class);
        $(navi_play_button).removeClass(restart_class);
      }
      $(slideshow).addClass(pause_class);
      $(navi_play_button).addClass(pause_class);
    } else if(mode == "pause") {
      if ($(slideshow).hasClass(pause_class)){
        $(slideshow).removeClass(pause_class);
        $(navi_play_button).removeClass(pause_class);
      }
      if ($(slideshow).hasClass(restart_class)){
        $(slideshow).removeClass(restart_class);
        $(navi_play_button).removeClass(restart_class);
      }
      $(slideshow).addClass(start_class);
      $(navi_play_button).addClass(start_class);
    } else {
      if ($(slideshow).hasClass(pause_class)){
        $(slideshow).removeClass(pause_class);
        $(navi_play_button).removeClass(pause_class);
      }
      if ($(slideshow).hasClass(start_class)){
        $(slideshow).removeClass(start_class);
        $(navi_play_button).removeClass(start_class);
      }
      $(slideshow).addClass(restart_class);
      $(navi_play_button).addClass(restart_class);
    }
  }

  //アニメーションの再生(カスタムイベント)
  $(slideshow).on("animation_play",
    function(){
      //スライドアニメーションの再生(初回のみ)
      if(slide_animation_instance.currnt_position == 0){
        button_change("play");
        setTimeout(function(){
          slide_start();
        },50);
      }
    }
  );

  //アニメーションの停止(カスタムイベント)
  $(slideshow).on("animation_pause",
    function(){
      if($(slideshow).hasClass(unit_name+"_pause")){
      　//再生中の場合
        button_change("pause");
      }
    }
  );

}


//------------------------------------------------------
//スライドウインドウの定義
//------------------------------------------------------
//スライドクラス定義
function slide_class(){
  this.view_width = 0;
  this.frame_width = 0;
  this.frame_innder_width = 0;
  this.slide_width = 0;
  this.navigation_width = 0;
  this.current_position = 0;
  this.current_frame = 1;
}

//スライドウインドウの定義
function slide_display(target_id_){
  //オブジェクトが存在しない場合は何もしないで終了
  if(document.getElementById(target_id_) == null) {
    return;
  }

  //ローカル変数定義
  var target_id = "#"+target_id_;
  var view_area = get_element(target_id, "ul."+unit_name+"_setup", target_id+"_setup");

  //スライド数を取得
  var slide_elements = $(target_id).find("li."+unit_name+"_setup_step");
  var elements_count = slide_elements.length;

  //ナビゲーション領域を作成
  $(target_id).append('<ul id="'+target_id.replace("#","")+'_pagination" class="'+unit_name+'_pagination"></ul>');
  var navi_area = $(target_id+"_pagination");
  for(var i = 0; i < elements_count; i++) {
    $(navi_area).append('<li></li>');
  }
  var navi_elements = $(navi_area).find("li");

  //戻る/進むボタン
  var back_button = get_element(target_id, "div."+unit_name+"_back_button", target_id+"_back_button");
  var next_button = get_element(target_id, "div."+unit_name+"_next_button", target_id+"_next_button");

  //ページ移動ボタン
  var page_next_button_connect_skip = $("."+unit_name+"_skip");
  var page_next_button_connect = $("."+unit_name+"_connect");

  //画像移動時間
  var Timer = 500;

  //スライドクラスのインスタンス作成
  var slide_instance = new slide_class();

  //プロパティ定義
  function slide_value_setting(){
    //表示エリアのサイズ
    slide_instance.view_width = $(window).width();

    //各スライドの幅
    slide_instance.frame_innder_width = slide_instance.view_width;
    slide_instance.frame_width = slide_instance.frame_innder_width - Number(($(slide_elements).css("padding-left")).replace("px","")) * 2;

    //各スライドの表示幅を変更
    $(view_area+" li."+unit_name+"_setup_step").css({
      'width':slide_instance.frame_width+'px',
      'left':'0px'
    });

    //スライド全体の幅
    slide_instance.slide_width = elements_count * slide_instance.frame_innder_width;
    //ナビゲーションの幅
    slide_instance.navigation_width = slide_instance.view_width;
    //移動中の要素の位置
    slide_instance.current_position = (slide_instance.current_frame - 1) * (-1) * slide_instance.frame_innder_width;

    //表示位置を変更
    $(view_area).innerWidth(slide_instance.frame_innder_width);
    $(view_area).css({
      'width':slide_instance.slide_width+'px',
      'left':slide_instance.current_position + 'px'
    });
    $(navi_area).width(slide_instance.navigation_width);

    //現在表示中の要素
    slide_instance.current_frame = Math.floor(slide_instance.current_position * (-1) / slide_instance.frame_innder_width) + 1;
  }
  slide_value_setting();

  //モニターがリサイズした場合
  window.addEventListener("resize",slide_resize,false);
  function slide_resize(){
    slide_value_setting();
  }

  //画像の移動処理
  //タッチデバイスの判別
  var isTouch = ('ontouchstart' in window) || navigator.pointerEnabled;

  if(isTouch){
    var mv_x = null;
    var touch_x = null;
    var touch_xs = null;
    var touch_y = null;
    var touch_ys = null;
    var xs = null;
    var xt = null;

    //タッチ画面の場合
    $(view_area).bind({
      'touchstart pointerdown': function(e) {
        //IE11のマウス操作の場合は何もしない
        if(event.pointerType == "mouse"){
          return;
        }

        if(e.originalEvent.changedTouches){
          //画面をタッチしたときの現在のX座標
          touch_xs = e.originalEvent.changedTouches[0].pageX;
          //画面をタッチしたときの現在のY座標
          touch_ys = e.originalEvent.changedTouches[0].pageY;
        } else {
          //画面をタッチしたときの現在のX座標
          touch_xs = e.originalEvent.pageX;
          //画面をタッチしたときの現在のY座標
          touch_ys = e.originalEvent.pageY;
        }
        if(touch_xs==''){ return false; }
        if(touch_ys==''){ return false; }
        //移動する要素の開始X座標
        xs = slide_instance.current_position;
      },
      'touchmove pointermove': function(e) {
        //IE11のマウス操作の場合は何もしない
        if(event.pointerType == "mouse"){
          return;
        }

        if(e.originalEvent.changedTouches){
          //画面をタッチしたときの現在のX座標
          touch_x = e.originalEvent.changedTouches[0].pageX;
          //画面をタッチしたときの現在のY座標
          touch_y = e.originalEvent.changedTouches[0].pageY;
        } else {
          //画面をタッチしたときの現在のX座標
          touch_x = e.pageX;
          //画面をタッチしたときの現在のY座標
          touch_y = e.pageY;
        }
        if(touch_x==''){ return false; }
        if(touch_y==''){ return false; }
        //X方向に移動したとき処理をする
        if(flg==false && touch_xs != null && typeof(touch_x) !== "undefined"){
          xt = xs-(touch_xs-touch_x);
          $(this).css({left:xt});
        }
      },
      'touchend pointerup': function(e) {
        //IE11のマウス操作の場合は何もしない
        if(event.pointerType == "mouse"){
          return;
        }

        if(e.originalEvent.changedTouches){
          //画面をタッチしたときの現在のX座標
          touch_x = e.originalEvent.changedTouches[0].pageX;
          //画面をタッチしたときの現在のY座標
          touch_y = e.originalEvent.changedTouches[0].pageY;
        } else {
          //画面をタッチしたときの現在のX座標
          touch_x = e.pageX;
          //画面をタッチしたときの現在のY座標
          touch_y = e.pageY;
        }
        if(touch_x==''){ return false; }
        if(touch_y==''){ return false; }
        var xc = Math.abs(touch_xs-touch_x);
        var yc = Math.abs(touch_ys-touch_y)*0.8;
        if(xc > yc){
          if($(this).position().left!=undefined){
            if(xs > $(this).position().left){
              moveLeft();
            }else if(xs < $(this).position().left){
              moveRight()
            }
          }
        }else{
          //元の位置に戻す
          if(touch_xs != touch_x) {
            //スライドのアニメーション移動
            $(view_area).animate({
              'left':xs + 'px'
            },{
              duration: Timer,
              easing: "swing",
              complete: function(){
                flg = false;
              }
            });
          }
        }
        touch_xs = null;
        touch_x = null;
      }
    });

/*
  }else{
    //マウスで移動させる場合
    $(view_area).draggable({
      axis:'x',
      start:function(){
        xs = $(view_area).position().left;
      },
      stop:function(){
        mv_x = $(view_area).position().left;
        if(xs > mv_x){
          moveLeft();
        }else{
          moveRight()
        }
      }
    });
*/
  }


  //左への移動処理
  function moveLeft(){
    if(slide_instance.current_frame + 1 <= elements_count){
      moveImg(slide_instance.current_frame + 1);
    }else{
      //左側へのスクロールがオーバーしたとき
      moveImg(slide_instance.current_frame);
    }
  }

  //右への移動処理
  function moveRight(){
    if(slide_instance.current_frame - 1 > 0){
      moveImg(slide_instance.current_frame - 1);
    }else{
      //右側へのスクロールがオーバーしたとき
      moveImg(slide_instance.current_frame);
    }
  }

  //ナビゲーションをクリックしたときの処理
  for(var i = 0; i < navi_elements.length; i++) {
    $(navi_elements[i]).click(function(){
      moveImg($(this).index()+1);
    });
  }

  //次へをクリックしたとき
  $(next_button).click(function(){
    if(slide_instance.current_frame + 1 <= elements_count){
      moveImg(slide_instance.current_frame + 1);
    }
  });

  //戻るをクリックしたとき
  $(back_button).click(function(){
    if(slide_instance.current_frame - 1 > 0){
      moveImg(slide_instance.current_frame - 1);
    }
  });

  //画像移動中の制御
  var flg = false;

  //画像の移動処理
  function moveImg(target_frame){
    if(flg==false){
      flg = true;
      //戻る/進むボタンの制御
      button_control(target_frame);
      //スライドのアニメーション移動
      $(view_area).animate({
        'left':String((target_frame - 1) * slide_instance.frame_innder_width * (-1)) + 'px'
      },{
        duration: Timer,
        easing: "swing",
        complete: function(){
          flg = false;
          slide_instance.current_position = String((target_frame - 1) * slide_instance.frame_innder_width * (-1));
        }
      });
    }
  }

  //戻る/進むボタンの制御
  function button_control(target_frame){
    //ナビゲーションの色変更
    change_color(target_frame);
    if(target_frame == elements_count){
      //右側移動の処理
      $(next_button).css('visibility','hidden');
      $(back_button).css('visibility','visible');
      //リンクの表示
      if ($(page_next_button_connect).length){
        $(page_next_button_connect).css('display','block');
      }
      if ($(page_next_button_connect_skip).length){
        $(page_next_button_connect_skip).css('display','none');
      }
    }else if(target_frame == 1){
      //左側移動の処理
      $(back_button).css('visibility','hidden');
      $(next_button).css('visibility','visible');
      //リンクの表示
      if ($(page_next_button_connect_skip).length){
        $(page_next_button_connect_skip).css('display','block');
      }
      if ($(page_next_button_connect).length){
        $(page_next_button_connect).css('display','none');
      }
    }else{
      $(next_button).css('visibility','visible');
      $(back_button).css('visibility','visible');
      //リンクを隠す
      if ($(page_next_button_connect_skip).length){
        $(page_next_button_connect_skip).css('display','none');
      }
      if ($(page_next_button_connect).length){
        $(page_next_button_connect).css('display','none');
      }
    }
  }

  //ナビゲーションの色変更
  function change_color(target_frame){
    $(navi_elements[slide_instance.current_frame-1]).css({
      "background":"#cccccc",
      "width":"15px",
      "height":"15px",
      "margin-bottom":"2px"
    });
    //スライドアニメーションの停止イベント発生
    var before_slide_animation = $(slide_elements[slide_instance.current_frame-1]).find("ul."+unit_name+"_slideshow");
    if(before_slide_animation[0]){
      $(before_slide_animation[0]).trigger("animation_pause");
    }
    $(navi_elements[target_frame-1]).css({
      "background":"#cc0000",
      "width":"15px",
      "height":"15px",
      "margin-bottom":"2px"
    });
    //スライドアニメーションの再生イベント発生
    var after_slide_animation = $(slide_elements[target_frame-1]).find("ul."+unit_name+"_slideshow");
    if(after_slide_animation[0]){
      $(after_slide_animation[0]).trigger("animation_play");
    }
    slide_instance.current_frame = target_frame;
  }

  //スライドアニメーションの再生(初回実行)
  change_color(1);

};


//先頭子要素にIDを付与
function get_element(target_id,selector,add_id){
  var element_objects = $(target_id).find(selector);
  var element_object = element_objects[0];
  $(element_object).attr("id",add_id.replace("#",""));
  return add_id;
}
