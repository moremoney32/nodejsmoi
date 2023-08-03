"use strict";
module.exports = (req, res)=>{

    // res.setHeader('Access-Control-Allow-Origin', 'late-server.eu-4.evennode.com');

    res.setHeader('Access-Control-Allow-Origin', '*'); // A remplacer par ce qui est en commentaire plus haut

    res.setHeader('Access-Control-Request-Method', 'POST');

    res.setHeader('Access-Control-Allow-Methods', 'POST');

    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Origin, Content-Type, Accept");

    res.setHeader('Content-Security-Policy', "default-src 'self'");

    res.setHeader('Strict-Transport-Security','max-age=31536000; includeSubDomains; preload'); // look this article https://www.tunetheweb.com/blog/dangerous-web-security-features/

    res.setHeader('X-XSS-Protection','1;mode=block');

    res.setHeader('X-Frame-Options','SAMEORIGIN');

    res.setHeader('X-Content-Type-Options','nosniff');

    res.setHeader('Connection', 'keep-alive');

    // All this headers came from this wonderful articles https://www.smashingmagazine.com/2017/04/secure-web-app-http-headers/
    
    // I need to check this https://www.w3.org/TR/2017/CR-referrer-policy-20170126/

    // req.setEncoding("utf-8");

    const controller = new AbortController();

    const handleStringRequest =  require("./handleStringRequest.js");
    
    // Right there the maximal request size is 300 MB === 314572800 Octets
    const maximalRequestSize = 314572800;

    const chunks = [];

    req.on("data", (chunk)=>{

        chunks.push(chunk);

        if (chunks.toString('utf8').length > maximalRequestSize){

            // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST

            res.end(JSON.stringify({ Message: "Limite autorisée pour l'envoi de fichiers dépassée." }));

            controller.abort();

            return req.client.destroy();

        }
    });
    
    req.on("end", ()=>{

        if(["POST", "OPTIONS"].includes(req.method) === true){

             if(req.method === "OPTIONS"){

                    const headers = {};

                    headers["Access-Control-Allow-Origin"] = "*";
                    headers["Access-Control-Allow-Methods"] = "POST";
                    headers["Access-Control-Allow-Credentials"] = false;
                    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
                    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
                    res.writeHead(200, headers);
                    return res.end();
              } 

              const { StringDecoder } = require('node:string_decoder');

              const decoder = new StringDecoder('utf8');

              const buff = Buffer.concat(chunks);

              let dataUser = decoder.write(buff);

              // Check a possible JSON.parse error
              dataUser = JSON.parse(dataUser);

              return handleStringRequest(dataUser).then((response)=>{

                    res.writeHead(200, { 'Content-Type': 'text/json' });

                    return res.end(JSON.stringify(response));

              });
        }

        return false;  

    });

    req.on('error', (err) => {

       // This prints the error message and stack trace to `stderr`.
       console.error(err.stack);

    });

}
