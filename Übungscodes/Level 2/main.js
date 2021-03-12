const Discord = require("discord.js")
const bot = nw Discord.Client()

bot.on( message => {
if(message.content === "Ping") return message.reply("Pong")
})

bot.login("TOKEN")



//Hier fehlt etwas findest du es?
