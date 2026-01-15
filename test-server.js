const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is working!');
});

const PORT = 3002;

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Test server running at http://127.0.0.1:${PORT}/`);
});

server.on('error', (e) => {
    console.error('Server error:', e);
});
