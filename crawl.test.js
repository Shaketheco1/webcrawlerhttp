
const {normalizeURL} = require("./crawl")
const {test, expect} = require("@jest/globals")

test('normalizeURL', () => {
    const input = "http://example.com/"
    const expected = "example.com"
    const actual = normalizeURL(input)
    expect(actual).toEqual(expected)
})

test('normalizeURL strip '/'', () => {
    const input = "http://example.com/path"
    const expected = "example.com/path"
    const actual = normalizeURL(input)
    expect(actual).toEqual(expected)
})
test('normalizeURL strip '/'', () => {
    const input = "http://Example.com/path"
    const expected = "example.com/path"
    const actual = normalizeURL(input)
    expect(actual).toEqual(expected)
})
