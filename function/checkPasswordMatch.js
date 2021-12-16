module.exports = function (password1, password2) {
	if (password1 == null || password2 == null) {
		return false
	}

	return password1 === password2
}
