var validatePhone = require("../function/validatePhone")
var expect = require("chai").expect
const assert = require("chai").assert

describe("#validatePhone()", function () {
	it("should return true", function () {
		assert.equal(validatePhone("1231231234"), true)
	})

	it("should return false", function () {
		assert.equal(validatePhone("123"), false)
	})

	it("should return false", function () {
		assert.equal(validatePhone(), false)
	})
})
