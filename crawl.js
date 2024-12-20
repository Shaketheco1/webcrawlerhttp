const {JSDOM} = require("jsdom")

async function crawlPage(currentURL) {
    console.log(`actively crawling: ${currentURL}`)
    try{
        const resp  = await fetch(currentURL)
        if(resp.status > 399){
            console.log(`error in fetch with status ${resp.status} on page: ${currentURL}`)
            return 
        }
        console.log(await resp.text())
    }catch(err){
        console.log(`failed to fetch ${currentURL}`)
    }
}

function getURLsFromHTML(html, baseURL){
    const url = []
    const dom =  new JSDOM(html)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of linkElements){
        if(linkElement.href.slice(0,1) === '/'){
            // relative
            try{
                const urlObj = new URL(`${baseURL}${linkElement.href}`)
                url.push(urlObj.href)
            }catch(err){
                console.log(`invaild URL: ${linkElement.href}`)
            }
            
        }else{
            //absolute
            try{
                const urlObj = new URL(`{linkElement.href}`)
                url.push(urlObj.href)
            }catch(err){
                console.log(`invaild URL: ${linkElement.href}`)
            }
        }

    }
    return url
}


function normalizeURL(urlString){
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if(hostPath.length > 0 && hostPath[hostPath.length - 1] === "/"){
        return hostPath.slice(0, -1)
    }
    return hostPath
}

module.exports = {
    normalizeURL ,
    getURLsFromHTML ,
    crawlPage
}
