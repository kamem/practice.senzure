
$(function(){
	
	// コンテンツの位置
	var contentId = !location.hash.split('content')[1] ? 0 : location.hash.split('content')[1];
	
	//すぐに関数を実行する
	//-------------------------------------------------------
	move(contentId);

	//クリックした時の処理
	//-------------------------------------------------------
	$('#tab .nav li').click(function () {
		var id = $(this).index();
		move(id);
	});

	// nextBack をクリックした時
	//-------------------------------------------------------
	$('#tab .next,#tab .back').click(function () {
		contentId = $(this).attr('class') == 'next' ? contentId + 1 : contentId - 1;
		
		move(contentId);
	});

	// 何秒後ごとに切り替え
	//-------------------------------------------------------
	//自動処理のスピード
	var speed = 2000;
	var tabIntarval = setInterval(autoTab, speed);
	
	function autoTab() {
		contentId++;
		
		move(contentId);
	}

	// タブの移動処理（引数の数字番目の配列のタグのクラスをonにする）
	//-------------------------------------------------------
	function move(num) {
	
		// コンテンツの数が多かったり少なかったりしたら
		num = num >= $('#tab .nav li').length ? 0 :
			num < 0 ? $('#tab .nav li').length - 1 : num;
	
		// グローバル関数 contentIdに
		contentId = num;
	
		// 一度.nav li のクラスを空に、.content sectionのクラスをsectionのみにする。（onを外す）
		$('#tab .nav li').removeClass('on');
		$('#tab .section').removeClass('on');
	
		// 引数num番目のタグのクラスにonをつける
		$('#tab .nav li').eq(num).addClass('on');
		$('#tab .section').eq(num).addClass('on');
		
		location.hash = $('#tab .section').eq(num).attr('id');
	}
	
});