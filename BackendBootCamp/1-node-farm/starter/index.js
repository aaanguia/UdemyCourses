const fs = require('fs');
const http = require('http');
const url = require('url');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

//Creating an HTTP Server
const server = http.createServer((req,res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is overview');
    }else if(pathName === '/product'){
        res.end('This is product')
    }else if(pathName === '/api'){
        /**
         * This is not Efficient since each time /api is called the server
         * has to rerun this section of code, when we can do a version where
         * its only ran once.
         */

         /**
          * fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err,data) =>{
          * const productData = JSON.parse(data);
          * res.writeHead(200, {'Content-type': 'application/json'});
          * res.end(data);
          * });
          */
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(data);

    }else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(8000, '127.0.0.1', ()  => {
    console.log('Listening on port localhost:8000');
}); // Two params: Port and host (Empty == localHost)

