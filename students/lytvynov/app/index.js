const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Індивідуальний DevOps-проєкт (рактичне заняття 14)</h1><p>втор: итвинов ікіта — група -41</p><p>озгорнуто автоматично через Terraform + Docker + GitHub Actions на AWS EC2.</p>');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on port ' + PORT);
});
