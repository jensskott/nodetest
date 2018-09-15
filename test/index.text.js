const {
    assert
} = require('chai')

const myFunc = require('../index');

it('its the right number', function () {
    resp = myFunc.addNumbers(1, 2);
    assert.equal(resp, 3)
});

it('its the wrong number', function () {
    resp = myFunc.addNumbers(1, 2);
    assert.notEqual(resp, 4)
});