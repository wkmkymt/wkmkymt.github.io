/* ============
    メッセージ
   ============ */
var Message = function(name, text, keyname) {
	this.message = {
		name: name,
		text: text,
		keyname: keyname
	};
};

/* チャットエリアにメッセージ追加 */
Message.prototype.addMessage = function() {

	// アイコン
	var icon = $("<img>")
	.attr({
		src: "img/" + this.message.keyname + ".png",
		alt: this.message.keyname + "'s icon"
	});

	// 吹き出し
	var balloon = $("<div>")
	.addClass("balloon")
	.html("<span>" + this.message.name + "</span>" + this.message.text);

	// メッセージ
	var message = $("<li>")
	.addClass(this.message.keyname + " clearfix").
	hide();

	// メッセージに要素を追加
	message.append(icon);
	message.append(balloon);

	// メッセージボックスにメッセージを追加
	$("#messageBox").append(message);
	message.fadeIn("slow");
};

/* ストレージに登録 */
Message.prototype.setStorage = function() {
	sessionStorage.setItem("Msg" + zeroFormat(sessionStorage.length, 3), JSON.stringify(this.message));
};