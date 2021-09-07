require("../db");
const Celeb = require("../models/celeb.model");

const celeb = [ {
    name: "Tinashe",
    occupation: "Rnb Princess",
    catchPhrase: "I love 2 get 2On",
},
{
    name: "Rina Sawayama",
    occupation: "Pop Princess",
    catchPhrase:"Give me just a litle bit of XS",
},
{
    name: "Azealia Banks",
    occupation: "Rapper",
    catchPhrase:"Pretty AB, pretty pretty AB, damn little bam you can get it maybe",
}];

Celeb.insertMany(celeb).then((celebsFromDb)=>{console.log(`celebs created - ${celebsFromDb.length} `)})