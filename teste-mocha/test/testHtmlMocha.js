const assert = require('chai').assert;
const nock = require('nock');
const tag = require('../htmlMocha').tag;

describe('Body tag', function() {
    it('should have <body> tag', async () => {
        let result = tag()
        nock('https://www.google.com/')
        .get('/')
        .reply(200, "<html><head></head><body></body></html>")
        assert.match(await result, /[<body>]/)
    });
});
