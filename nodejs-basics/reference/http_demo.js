const http = require('http')

// Create server object
http.createServer((req, res) => {
    res.write('Hello from Node Server!')
    res.end()
}).listen(5000, () => console.log('Server started...'))