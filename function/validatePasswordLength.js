module.exports = function (length, password) {
    if (password == null || length == null) {
        return false
    }
    return password.length >= length
	
}