var checkPasswordMatch = require("../function/checkPasswordMatch")
const assert = require("chai").assert

describe("#checkPasswordMatch()", function () {
	it("should return true", function () {
		assert.equal(checkPasswordMatch("1", "1"), true)
	})

	it("should return false", function () {
		assert.equal(checkPasswordMatch("testgmail.com", "123213"), false)
	})

	it("should return false", function () {
		assert.equal(checkPasswordMatch(), false)
	})
})
