module.exports = function (inputText) {
	if (inputText == null) {
		return false
	}
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (inputText.match(mailformat)) {
		return true
	} else {
		return false
	}
}
