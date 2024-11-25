const {JSDOM} = require("jsdom")

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
    getURLsFromHTML
}
