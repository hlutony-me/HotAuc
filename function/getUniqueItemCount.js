module.exports = function (items) {
	if (items == null) {
		return 0
	}
	let counts = {}
	items.forEach((el) => (counts[el.id] = 1 + (counts[el.id] || 0)))

	return Object.keys(counts).length

}
