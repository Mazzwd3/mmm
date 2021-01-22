const Discord = require("discord.js");
const client = new Discord.Client();

client.login("Nzk3ODU0MzUxMjA0ODEwNzYy.X_shxA.cfLc32Eo_cv8Aj7nWYHwLwp_WeA");

var embed = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 1 di 18")
    .setImage("https://bit.ly/3hZOQJe%22")

var embed2 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 2 di 18")
    .setImage("https://bit.ly/39msBsX")

var embed3 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 3 di 18")
    .setImage("https://bit.ly/39uVnrG")

var embed4 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 4 di 18")
    .setImage("https://bit.ly/3nMcPwC")

var embed5 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 5 di 18")
    .setImage("https://bit.ly/3qj96bG")

var embed6 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 6 di 18")
    .setImage("https://bit.ly/38LPmHY")

var embed7 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 7 di 18")
    .setImage("https://bit.ly/2LCb48h")

var embed8 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 8 di 18")
    .setImage("https://bit.ly/3oJNNQk")

var embed9 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 9 di 18")
    .setImage("https://bit.ly/3smhNUF")

var embed10 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 10 di 18")
    .setImage("https://bit.ly/3oKpbHb")

var embed011 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 11 di 18")
    .setImage("https://bit.ly/3nEaSm4")

var embed12 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 12 di 18")
    .setImage("https://bit.ly/2LOBK5x")

var embed13 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 13 di 18")
    .setImage("https://bit.ly/3bIXx9E")

var embed14 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 14 di 18")
    .setImage("https://bit.ly/2Kg5PKZ")

var embed15 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 15 di 18")
    .setImage("https://bit.ly/3spnNMj")

var embed16 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 16 di 18")
    .setImage("https://bit.ly/2LLlJ0d")

var embed17 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 17 di 18")
    .setImage("https://bit.ly/3sswHZu")

var embed18 = new Discord.MessageEmbed()
    .setColor("f72585")
    .setDescription("Meme numero 18 di 18")
    .setImage("https://bit.ly/2LBuwSL")


var messaggi = [" Samue mbe chiuda sa vocc", " Mbe zitt Samue", "Guarda Samue, ma quant'e bona l'Azzolina?", "Vu nu gocc d genziana?",
    "Manduma so it a pija lu pa, tu nsi fatt nind", "Ma tu sti matt", "Samue toccami l'uccello", "Samue smura sa merda",
    "Samue ma veramente ti fi pija pe culo da fratt e mamt?", "Samue ora fila a dormi senza cena (19:58)", "Samue si nu froc ti spacco la testa porco dio",
    "Frocio frocio frocio"];

var meme = [embed, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed011, embed12, embed13, embed14, embed15, embed16, embed17, embed18]


client.on("message", (message) => {
    if (message.content == "m!frasi") {
        var random = Math.floor(Math.random() * messaggi.length)
        message.channel.send(messaggi[random]);
    }
});

client.on("message", (message) => {
    if (message.content == "m!blasfemus") {
        var random = Math.floor(Math.random() * meme.length)
        message.channel.send(meme[random]);
    }
});


client.on("message", (message) => {
    if (message.content == "m!help") {
        var Info = embed18 = new Discord.MessageEmbed()
            .setColor("f72585")
            
            .setAuthor("Matteo Speca", "https://bit.ly/38WeV9e", "https://bit.ly/3iuyXuD" )
            .setDescription("questi sono i cazzo di comandi che puoi usare con questo bot di merda")
            .addField("Comandi", "📷 m!blasfemus ; 📜 m!frasi")
        message.channel.send(Info);
    }
});