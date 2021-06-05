const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // File path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // File extension
    let extname = path.extname(filePath);

    // Content type
    let contentType = 'text/html';

    // Check extension and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    res.writeHead(404, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data, 'utf8')
                })
            } else {
                // Server error
                res.writeHead(500)
                res.end(`Server error: ${err.code}`)
            }
        } else {
            // Success
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(data, 'utf8')
        }
    })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`))