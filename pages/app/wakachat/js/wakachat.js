/* ====================
    ロード時のイベント
   ==================== */
$(document).ready(function() {
	// イベント登録
	$("#sendBtn").on("click", submitMessage);
	$(".topBtn").on("click", scrollToTop);
	$(".bottomBtn").on("click", scrollToBottom);

	// ユーザー名を取得する
	$("#msgName").val(getUserName(0));

	// フォーム設定
	setForm();

	// 警告文の非表示
	$("#sendArea span").hide(10);

	// デフォルトメッセージの登録
	if(sessionStorage.length == 0) {
		var initMsg = new Message("WakamiChan", "Hello, Wakami!", "wakami");
		initMsg.setStorage();
		delete initMsg;
	}

	// ストレージのメッセージをチャットエリアに追加
	for(var i = 0; i < sessionStorage.length; i++) {
		var key = sessionStorage.key(i);
		var item = JSON.parse(sessionStorage.getItem(key));
		
		var msg = new Message(item.name, item.text, item.keyname);
		msg.addMessage();
		delete msg;
	}
});

/* メッセージ投稿 */
var submitMessage = function() {
	if($("#msgName").val() == "" || $("#msgText").val() == "") {
		displayText($("#sendArea span"));
		return;
	}

	// メッセージ作成
	var newMsg = new Message($("#msgName").val(), $("#msgText").val(), "user");

	// ワカ美ちゃん調教用メッセージ
	if($("#msgName").val() == "WakamiChan") {
		var mwakami = new Wakami(newMsg.message);
		mwakami.obey();
		delete mwakami;

		setForm();

		return;
	}

	// メッセージの追加
	newMsg.setStorage();
	newMsg.addMessage();

	scrollToBottom();
	setForm();

	// ワカ美ちゃんからの返信
	setTimeout(function() {
		var wakami = new Wakami(newMsg.message);
		wakami.reply();
		delete wakami;

		scrollToBottom();
	}, 2000);
};

/* ユーザー名を取得する */
var getUserName = function(n) {
	if(sessionStorage.length < n + 1)
		return "";

	var lastkey = sessionStorage.key(sessionStorage.length - 1 - n);
	var lastMsg = JSON.parse(sessionStorage.getItem(lastkey));

	if(lastMsg.keyname == "wakami") {
		n += 1;
		return getUserName(n);
	}
	
	return lastMsg.name;
};

/* 警告文を表示 */
var displayText = function(elm) {
	if(elm.is(":visible"))
		elm.hide();
	elm.fadeIn("slow");
};

/* フォーム設定 */
var setForm = function() {
	$("#msgText").val("");

	if($("#msgName").val() == "")
		$("#msgName").focus();
	else
		$("#msgText").focus();
};

/* numのゼロ埋め(m桁まで) */
var zeroFormat = function(num, m) {
	return ("00" + num).slice(-m);
};

/* Topまでスクロール */
var scrollToTop = function() {
	$("html, body").animate({ scrollTop: 0 }, "normal");
};

/* Bottomまでスクロール */
var scrollToBottom = function() {
	$("html, body").animate({ scrollTop: document.body.scrollHeight - window.innerHeight }, "normal");
};