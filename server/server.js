var http = require('http');
var https = require('https');
var axios = require('axios');

// pages urls
const usos_url = "https://usosweb.pb.edu.pl/"
const wi_url = "https://wi.pb.edu.pl/"
const degra_url = "https://degra.wi.pb.edu.pl/"
const cez2_url = "https://cez2.wi.pb.edu.pl/"
const lit_url = "http://lit.wi.pb.edu.pl/"
const aragorn_url = "http://aragorn.pb.bialystok.pl/"

var server = http.createServer(function (req, res) {   // 2 - creating server

    if (req.url == '/usos') {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        let dateStart = Date.now();
        axios.get(usos_url, { httpsAgent })
            .then((response) => {
                console.log(response.status);
                let time = Date.now() - dateStart;

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "OK", 'code': response.status, 'time': time}));
                res.end();
            })
            .catch((err) => {
                console.log(err.code)
                let time = Date.now() - dateStart

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "ERROR", 'code': err.code, 'time': time}));
                res.end();
            });
    }

    if (req.url == '/wi') {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        let dateStart = Date.now();
        axios.get(wi_url, { httpsAgent })
            .then((response) => {
                console.log(response.status);
                let time = Date.now() - dateStart;

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "OK", 'code': response.status, 'time': time}));
                res.end();
            })
            .catch((err) => {
                console.log(err.code)
                let time = Date.now() - dateStart

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "ERROR", 'code': err.code, 'time': time}));
                res.end();
            });
    }

    if (req.url == '/degra') {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        let dateStart = Date.now();
        axios.get(degra_url, { httpsAgent })
            .then((response) => {
                console.log(response.status);
                let time = Date.now() - dateStart;

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "OK", 'code': response.status, 'time': time}));
                res.end();
            })
            .catch((err) => {
                console.log(err.code)
                let time = Date.now() - dateStart

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "ERROR", 'code': err.code, 'time': time}));
                res.end();
            });
    }

    if (req.url == '/cez2') {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        let dateStart = Date.now();
        axios.get(cez2_url, { httpsAgent })
            .then((response) => {
                console.log(response.status);
                let time = Date.now() - dateStart;

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "OK", 'code': response.status, 'time': time}));
                res.end();
            })
            .catch((err) => {
                console.log(err.code)
                let time = Date.now() - dateStart

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "ERROR", 'code': err.code, 'time': time}));
                res.end();
            });
    }

    if (req.url == '/lit') {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        let dateStart = Date.now();
        axios.get(lit_url, { httpsAgent })
            .then((response) => {
                console.log(response.status);
                let time = Date.now() - dateStart;

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "OK", 'code': response.status, 'time': time}));
                res.end();
            })
            .catch((err) => {
                console.log(err.code)
                let time = Date.now() - dateStart

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "ERROR", 'code': err.code, 'time': time}));
                res.end();
            });
    }

    if (req.url == '/aragorn') {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        let dateStart = Date.now();
        axios.get(aragorn_url, { httpsAgent })
            .then((response) => {
                console.log(response.status);
                let time = Date.now() - dateStart;

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "OK", 'code': response.status, 'time': time}));
                res.end();
            })
            .catch((err) => {
                console.log(err.code)
                let time = Date.now() - dateStart

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'status': "ERROR", 'code': err.code, 'time': time}));
                res.end();
            });
    }

});


server.listen(5000); //3 - listen for any incoming requests
console.log('Node.js web server is running..')

