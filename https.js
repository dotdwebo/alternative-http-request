const https = require('https'); //https://nodejs.org/api/https.html


// sample API: NASA | get the api DEMO KEY from api.nasa.gov
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (res)=>{
    let data = '';

    // A chunk of data has been received
    res.on(data, (d)=>{
        data += d;
        });

    // The whole response has been received. Print out the result.
    res.on('end', ()=>{
        console.log(JSON.parse(data).explanation);
    });
   
}).on("error",(err)=>{
    console.log("Error: "+err.message);
});