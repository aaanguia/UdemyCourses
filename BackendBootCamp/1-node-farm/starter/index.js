// Core Modules
const fs = require('fs');
const http = require('http');
const url = require('url');

// Then Third Party Modules
const slugify = require('slugify');

// Then our modules
const replaceTemplate = require('./modules/replaceTemplate.js');


////////////////////////////////////
//Server 

const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const slugs = dataObject.map(el => slugify(el.productName, {lower: true}));
console.log(slugs);

//Creating an HTTP Server
const server = http.createServer((req,res) => {
    const { query, pathname } = url.parse(req.url, true);
    console.log(pathname);
    console.log(query)

    // Overview 
    if(pathname === '/' || pathname === '/overview'){
        // Since this is the overview page and only happens once we can do this on server start
        res.writeHead(200, {'Content-type' : 'text/html'});
        const cardsHtml = dataObject.map(el => replaceTemplate(tempCard, el)).join('');
        console.log(cardsHtml);
        const output = tempOverview.replace('{%PRODUCTCARDS%}', cardsHtml);
        res.end(output);

        // Product
    }else if(pathname === '/product'){
        res.writeHead(200, {'Content-type' : 'text/html'});
        const product = dataObject[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);

        // API
    }else if(pathname === '/api'){
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

