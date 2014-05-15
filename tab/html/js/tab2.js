window.onload = load;

// ロードが完了したら実行される関数
function load() {
	//#tabを取ってくる。
	var tab = document.getElementById('tab');
		
	//スタイルシートボーダーの書き方
	//tab.style.border = '1px solid red';
	
	// .nextBackの一番最初のタグを取ってくる
	var nextBack = tab.getElementsByClassName('nextBack')[0];
	
	//.nextを配列の0番目を取ってくる
	var next = nextBack.getElementsByClassName('next')[0];
	
	//.backを配列の0番目を取ってくる
	var back = nextBack.getElementsByClassName('back')[0];


	// .navの一番最初のタグを取ってくる
	var nav = tab.getElementsByClassName('nav')[0];
	// .nav li を取ってくる
	var navBtn = nav.getElementsByTagName('li');

	
	// .contentの一番最初のタグを取ってくる
	var content = tab.getElementsByClassName('content')[0];
	// .content section を取ってくる
	var section = content.getElementsByClassName('section');
	
	var contentId = 0;
	
	//初回実行
	//-----------------
	move(contentId);


	// クリックした時の処理
	//------------------------------------------------------------
	
	// clcikした時にclick関数を実行させる
	for(var i = 0 ; i < navBtn.length;i++) {
		navBtn[i].onclick = navClick;
	}

	function navClick() {		
		var id = Number(this.id.split('nav')[1]);
	
		console.log(id);
	
		move(id);
	}


	// タブの移動関数
	//------------------------------------------------------------
	function move(num) {
		contentId = num;

		// 一度.nav li のクラスを空に、.content sectionのクラスをsectionのみにする。（onを外す）
		for(var i = 0 ; i < navBtn.length;i++) {
			navBtn[i].className = '';
			section[i].className = 'section';
		}
	
		navBtn[num].className = 'on';
		section[num].className = 'section on';
	}};