const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("message", message => {
if(message.content === "Ping") return message.reply("Pong")
})

bot.login("TOKEN")

//Es ist ein Fehler vorhanden
