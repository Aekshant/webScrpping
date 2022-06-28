// Web Scrapping using Node js and Cherio Request
// npm install cherio
// npm install request

// Imports 
const cherio = require('cherio');
const request = require('request');
const fs = require('fs');

// Create a Write Stream 




request('https://www.bridgeport.edu/', async(err, resp, html)=>{

    if (err) return console.error(err);

    let $ = await cherio.load(html);

    let title = await $("body");

    console.log(title.text());

});

