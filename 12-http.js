const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.end('Welcoem to our homepage')}
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    `)
})

//port
server.listen(5000)
