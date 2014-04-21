/* =============
    ワカ美ちゃん
   ============= */
var Wakami = function(userMsg) {
	if(localStorage.length == 0) {
		var initMessages = [
			"'Hello, ' + this._userMsg.name + '!'",
			"'I love ' + this._userMsg.name + '!'",
			"this._userMsg.text",
			"'Me too!'",
			"'Oh...'",
			"'So So'",
			"'Yeah!'",
			"'Yahoooooooo!'",
			"'Yes, I am prety!'"
		];

		for(var i = 0; i < initMessages.length; i++)
			this._setVocabulary(initMessages[i]);
	}

	this._userMsg = userMsg;
	this.wkmMsg = new Message("WakamiChan", this._getMessage(), "wakami");
};

/* 返信する */
Wakami.prototype.reply = function() {
	this.wkmMsg.setStorage();
	this.wkmMsg.addMessage();
};

/* 従う */
Wakami.prototype.obey = function() {
	var voc = "\'" + this._userMsg.text + "\'";
	voc = voc.replace(/{name}/, "\' + this._userMsg.name + '");
	voc = voc.replace(/{text}/, "\' + this._userMsg.text + '");

	this._setVocabulary(voc);
};

/* ワカ美ちゃんのボキャブラリーの中からランダムで返す */
Wakami.prototype._getMessage = function() {
	var key = Math.floor(Math.random() * localStorage.length);
	var message = localStorage.getItem(localStorage.key(key));

	return eval(message);
};

/* ワカ美ちゃんのボキャブラリーを登録 */
Wakami.prototype._setVocabulary = function(voc) {
	localStorage.setItem("WkmC" + zeroFormat(localStorage.length, 3), voc);
};