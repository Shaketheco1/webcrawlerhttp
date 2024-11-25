
const {normalizeURL,getURLsFromHTML} = require("./crawl")
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


test('getURLFromHTML 1', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">
                example
            </a>
        </body>
    </html>
`
    const inputBaseURL = "http://example.com"
    const expected = ["http://example.com/path/"]
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    expect(actual).toEqual(expected)
})

test('getURLFromHTML 1', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="invaild">
                invaild URL
            </a>
        </body>
    </html>
`
    const inputBaseURL = "http://example.com"
    const expected = []
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    expect(actual).toEqual(expected)
})




