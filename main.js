const { crawlPage } = require('./crawl.js') 

function main(){
    if (process.argv.length < 3) {
        console.log("no website URL given")
        process.exit(1)
    }
    if (process.argv.length > 3) {
        console.log("too many cmd arguments")
        process.exit(1)
    }
    const websiteURL = process.argv[2]
    console.log(`starting crawl of ${websiteURL}`)
    crawlPage(websiteURL)
}
main()

