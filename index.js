const userInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm a ${userInfo.cowboy.name} and now I study at the WCS in ${userInfo.cowboy.campus}`,
    e : "oO",
    T : "U "
}));