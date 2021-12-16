var validateEmail = require("../function/validateEmail")
var expect = require("chai").expect
const assert = require("chai").assert

describe("#validateEmail()", function () {
	it("should return true", function () {
		assert.equal(validateEmail("test@gmail.com"), true)
	})

	it("should return false", function () {
		assert.equal(validateEmail("testgmail.com"), false)
	})

	it("should return false", function () {
		assert.equal(validateEmail(), false)
	})
})
