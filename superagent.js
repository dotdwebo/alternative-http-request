const superagent = require('superagent');

superagent.get('https://api.nasa.gov/planetary/apod')
.query({api_key:'DEMO_KEY',date: '2022-09-04'}) //get the DEMO key on api.nasa.gov
.end((err,res)=>{
    if(err) {return console.log(err);}
    console.log(res.body.url);
    console.log(res.body.explanation);
});