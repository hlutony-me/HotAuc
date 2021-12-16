module.exports = function (inputText) {
	if (inputText == null) {
		return false
	}
	return inputText.match(/\d/g).length === 10
}
