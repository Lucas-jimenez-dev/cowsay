const userInfo = require('./information');

console.log(userInfo.name);

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Helllo im ${userInfo.name} je suis à la ${userInfo.campus}`
}))

