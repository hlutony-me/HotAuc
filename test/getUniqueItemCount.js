var countUniqueItem = require("../function/getUniqueItemCount")
const assert = require("chai").assert

describe("#countUniqueItem()", function () {
	it("should return true", function () {
		assert.equal(countUniqueItem([{ id: 123 }, { id: 123 }]), 1)
	})

	it("should return true", function () {
		assert.equal(countUniqueItem([{ id: 123 }, { id: 1234 }]), 2)
	})


	it("should return false", function () {
		assert.equal(countUniqueItem(), 0)
	})
})
