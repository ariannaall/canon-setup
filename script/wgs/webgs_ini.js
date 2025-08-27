//------------------------------------------------------
//ユニット名の接頭辞定義
//------------------------------------------------------
var unit_name = "WGS";

//------------------------------------------------------
// 各種定義
//------------------------------------------------------
function setting(){
//------------------------------------------------------
//モーダルウインドウを開くボタンの定義
//------------------------------------------------------
//■注意 //
//背景領域は本スクリプトで追加するが、CSSには定義しておくこと
//■使い方 //
/*
  modal_display(
    "「モーダルウインドウを開くボタンのID」", //「モーダルウインドウを開くボタンのID」
    "「モーダルウインドウのID」", //「モーダルウインドウのID」
    "「モーダルウインドウを閉じるボタンのID」", //「モーダルウインドウを閉じるボタンのID」
    "「背景領域のID」" //「背景領域のID」
  );
*/

  modal_display(
    "WGS_js_modal_error_prepare1", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_prepare", //「モーダルウインドウのID」
    "WGS_modal_error_prepare_close", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_prepare2", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_prepare", //「モーダルウインドウのID」
    "WGS_modal_error_prepare_close", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_prepare3", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_prepare", //「モーダルウインドウのID」
    "WGS_modal_error_prepare_close", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_power", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_protec", //「モーダルウインドウのID」
    "WGS_modal_error_protec_close", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_inkset", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_ink", //「モーダルウインドウのID」
    "WGS_modal_error_close", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_paper", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_ink", //「モーダルウインドウのID」
    "WGS_modal_error_close", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_inkcolor1", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_inkcolor", //「モーダルウインドウのID」
    "WGS_modal_close_ink", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_inkcolor2", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_inkcolor", //「モーダルウインドウのID」
    "WGS_modal_close_ink", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_inkcolor_m1", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_inkcolor_m", //「モーダルウインドウのID」
    "WGS_modal_close_ink_m", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_inkcolor_m2", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_inkcolor_m", //「モーダルウインドウのID」
    "WGS_modal_close_ink_m", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_inkcolor_mw1", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_inkcolor_mw", //「モーダルウインドウのID」
    "WGS_modal_close_ink_mw", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_error_inkcolor_mw2", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_error_inkcolor_mw", //「モーダルウインドウのID」
    "WGS_modal_close_ink_mw", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_smart", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_tips", //「モーダルウインドウのID」
    "modal-close-tips", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );
  modal_display(
    "WGS_js_modal_smart2", //「モーダルウインドウを開くボタンのID」
    "WGS_modal_details", //「モーダルウインドウのID」
    "WGS_modal-close-details", //「モーダルウインドウを閉じるボタンのID」
    "WGS_modal_bg" //「背景領域のID名」
  );

//------------------------------------------------------
//トグルボタンの定義
//------------------------------------------------------
//■使い方 //
/*
  toggle_display(
    "「トグルボタンのID」", //「トグルボタンのID」
    "「表示領域のID」", //「表示領域のID」
    "「閉じた状態の画像パス」", //「閉じた状態の画像パス」
    "「開いた状態の画像パス」", //「開いた状態の画像パス」
    "「first/last(画像の表示位置)」", //「first/last(画像の表示位置)」
    "「open/close(初期状態)」", //「open/close(初期状態)」
    "「slow/normal/fast/ミリ秒」" //「slow/normal/fast/ミリ秒」
  );
*/

  toggle_display(
    "fold_button_1", //「トグルボタンのID」
    "fold_area_1", //「表示領域のID」
    "screens/webgs_list_close.png", //「閉じた状態の画像パス」
    "screens/webgs_list_open.png", //「開いた状態の画像パス」
    "last", //「first/last(画像の表示位置)」
    "close", //「open/close(初期状態)」
    "700" //「slow/normal/fast/ミリ秒」
  );

  toggle_display(
    "toggle_TS_series", //「トグルボタンのID」
    "toggle_area_TS_series", //「表示領域のID」
    "screens/webgs_open.png", //「閉じた状態の画像パス」
    "screens/webgs_close.png", //「開いた状態の画像パス」
    "first", //「first/last(画像の表示位置)」
    "close", //「open/close(初期状態)」
    "normal" //「slow/normal/fast/ミリ秒」
  );

  toggle_display(
    "toggle_MG_series", //「トグルボタンのID」
    "toggle_area_MG_series", //「表示領域のID」
    "screens/webgs_open.png", //「閉じた状態の画像パス」
    "screens/webgs_close.png", //「開いた状態の画像パス」
    "last", //「first/last(画像の表示位置)」
    "open", //「open/close(初期状態)」
    "normal" //「slow/normal/fast/ミリ秒」
  );

//------------------------------------------------------
//フェードインボタンの定義
//------------------------------------------------------
//■使い方 //
/*
  fade_display(
    "「フェードボタンのID」", //「フェードインボタンのID」
    "「slow/normal/fast/ミリ秒」" //「slow/normal/fast/ミリ秒」
  );
*/
  fade_display(
    "WGS_js_start_button", //「フェードインボタンのID」
    "2500" //「slow/normal/fast/ミリ秒」
  );

//------------------------------------------------------
//動画再生ウインドウを開くボタンの定義
//------------------------------------------------------
//■使い方 //
/*
  window_open(
    "「動画再生ウインドウを開くボタンのID」" //「動画再生ウインドウを開くボタンのID」
  );
*/
  window_open(
    "WGS_js_remove"
  );
  window_open(
    "WGS_js_inkset"
  );
  window_open(
    "WGS_js_poweron"
  );
  window_open(
    "WGS_js_paperset"
  );
  window_open(
    "WGS_js_adjustment"
  );
  window_open(
    "WGS_js_questionary"
  );
  window_open(
    "WGS_js_printhead"
  );
  window_open(
    "WGS_js_connect"
  );

//------------------------------------------------------
//スプライトアニメーションの定義
//------------------------------------------------------
//■注意 //
//アニメーション終了時の画像を維持するため、スプライトは逆手順で作成すること
//また、CSSは初期状態のポジションにしておくこと
//■使い方 //
/*
  sprite_display(
    "「アニメーション領域のID」", //「アニメーション領域のID」
    "「画像切り替え時間(ミリ秒)」", //「画像切り替え時間(ミリ秒)」
    "「vertical/horizontal(スプライトの方向)」", //「vertical/horizontal(スプライトの方向)」
    "「コマ数」" //「コマ数」
  );
*/
  sprite_display(
    "WGS_sprite_connect_smart", //「アニメーション領域のID」
    "500", //「画像切り替え時間(ミリ秒)」
    "vertical", //「スプライトの方向」
    "18" //「コマ数」
  );
  sprite_display(
    "WGS_sprite_connect_pc", //「アニメーション領域のID」
    "500", //「画像切り替え時間(ミリ秒)」
    "vertical", //「スプライトの方向」
    "18" //「コマ数」
  );



//------------------------------------------------------
//スライドアニメーションの定義
//------------------------------------------------------
//■使い方 //
/*
  slide_animation(
    "「スライドアニメーション領域のID」" //「スライドアニメーション領域のID」
  );
*/
  slide_animation(
    "WGS_js_slideshow1" //「スライドアニメーション領域のID」
  );
  slide_animation(
    "WGS_js_slideshow2" //「スライドアニメーション領域のID」
  );
  slide_animation(
    "WGS_js_slideshow3" //「スライドアニメーション領域のID」
  );
  slide_animation(
    "WGS_js_slideshow4" //「スライドアニメーション領域のID」
  );
  slide_animation(
    "WGS_js_slideshow5" //「スライドアニメーション領域のID」
  );
  slide_animation(
    "WGS_js_slideshow6" //「スライドアニメーション領域のID」
  );




//------------------------------------------------------
//スライドウインドウの定義
//------------------------------------------------------
/*
  slide_display(
    "「スライドウインドウ領域のID」" //「スライドウインドウ領域のID」
  );
*/
  slide_display(
    "WGS_js_step_contents" //「スライドウインドウ領域のID」
  );



//------------------------------------------------------
//読み込み中画面を非表示にする
//------------------------------------------------------

//  setTimeout( 
//  function(){

     $("#WGS_ij_loader_bg").css("display","none");
     $("ul.WGS_step1").css("display","block");
     $("ul.WGS_pagination").css("display","block");
     $("ul.WGS_page_button_step1").css("display","block");
     $("#WGS_js_step_contents_next_button").css("display","block");
     $("#WGS_js_step_contents_back_button").css("display","block");

//   }
// ,1000);


}
// onload処理
if ( window.onload != null ) {
    var oldOnloadGS = window.onload;
    window.onload = function ( e ) {
        oldOnloadGS( e );
        setting();
    };
}
else
    window.onload = setting;
