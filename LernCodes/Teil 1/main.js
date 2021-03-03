const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("ready", () => {
console.log("Der Bot ist eingeloggt")
})
bot.login("Dein Token")
