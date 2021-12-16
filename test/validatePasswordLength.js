var validatePasswordLength = require("../function/validatePasswordLength")
const assert = require("chai").assert

describe("#validatePasswordLength()", function () {
	it("should return true", function () {
		assert.equal(validatePasswordLength(4,"test"), true)
	})

	it("should return false", function () {
		assert.equal(validatePasswordLength(30,"testgmail.com"), false)
	})

	it("should return false", function () {
		assert.equal(validatePasswordLength(), false)
	})
})
