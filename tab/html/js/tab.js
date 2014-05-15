window.onload = load;



//すべてのタグが読み込まれたら実行される関数
function load() {

	// #tabを取ってくる
	var tab = document.getElementById('tab'),
	
	
	// .navの一番最初のタグを取ってくる
		nav = tab.getElementsByClassName('nav')[0],
	// .nav li を取ってくる
		navBtn = nav.getElementsByTagName('li'),

	// .contentの一番最初のタグを取ってくる
		content = tab.getElementsByClassName('content')[0],
	// .content .section を取ってくる
		section = content.getElementsByClassName('section'),
		
		
	// .nextBackの一番最初のタグを取ってくる
		nextBack = tab.getElementsByClassName('nextBack')[0],
	// .nextと.backを取ってくる
		next = nextBack.getElementsByClassName('next')[0],
		back = nextBack.getElementsByClassName('back')[0],
	
	// コンテンツの位置
		contentId = !location.hash.split('content')[1] ? 0 : location.hash.split('content')[1];
	
	//すぐに関数を実行する
	//-------------------------------------------------------
	move(contentId);


	//クリックした時の処理
	//-------------------------------------------------------
	
	// clcikした時にclick関数を実行させる
	for(var i = 0 ; i < navBtn.length;i++) {
		navBtn[i].onclick = navClick;
	}
	
	// clickした時に呼び出される関数
	function navClick() {
		var id = Number(this.id.split('nav')[1]);
		
		move(id);
	}


	// nextBack をクリックした時
	//-------------------------------------------------------
	next.onclick = nextBackClick;
	back.onclick = nextBackClick;
	
	function nextBackClick() {
		// nextの場合は +1してそれ以外だったら（back）だったら -1
		contentId = this.className == 'next' ? contentId + 1 : contentId - 1;
		
		move(contentId);
	}

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
		num = num >= navBtn.length ? 0 :
			num < 0 ? navBtn.length - 1 : num;
	
		// グローバル関数 contentIdに
		contentId = num;
	
		// 一度.nav li のクラスを空に、.content sectionのクラスをsectionのみにする。（onを外す）
		for(var i = 0 ; i < navBtn.length;i++) {
			navBtn[i].className = '';
			section[i].className = 'section';
		}
	
		// 引数num番目のタグのクラスにonをつける
		navBtn[num].className = 'on';
		section[num].className = 'section on';
				
		hash(contentId);
	}
	

	// hashを変更
	//-------------------------------------------------------
	function hash(num) {
		location.hash = section[num].id;
	}
}