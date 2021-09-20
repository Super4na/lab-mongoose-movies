var db = require("../db");

const Celebrity = require("../models/Celebrity-model")

const idols = [
    {
        name: "Beyonce",
        occupation: "Singer",
        catchPhrase: "To the left. To the left"
    }, {
        name: "Florence",
        occupation: "Singer",
        catchPhrase: "Too fast for freedom"
    }, {
        name: "omocat",
        occupation: "Game Developer",
        catchPhrase: "You'll forgive yourself. Won't you sunny?"

    },
];


Celebrity.insertMany(idols).then((celebritiesFromDB) => {
    console.log(`${celebritiesFromDB.length} celebrities have graced us with `)
});
