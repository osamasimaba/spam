const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("450365792958152704")
setInterval(function() {
channel.send(`credit osos `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
