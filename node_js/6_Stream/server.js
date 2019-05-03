const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text\html'});
        res.write('<h1>This text was served through local server</h1>');
        res.end();
    }else if (req.url==='/user'){
        res.writeHead(200,{'Content-Type': 'text\html'});
        res.write('<h2>This is the Users</h2>');
        res.end();
    }

}).listen(5000);
