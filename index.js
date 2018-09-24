const Discord = require('discord.js')
const Bot = new Discord.Client()
const prefix = '.'

Bot.on('ready', function () {
    Bot.user.setGame('https://skariie.tk/').catch(console.error)
})



/* Bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
       return channel.send('Bienvenue sur le serveur Discord' + member.displayName)
    }).catch(console.error)
}) */

Bot.on('message', function (message) {
    if (message.content === prefix + 'ping') {
         message.channel.send({embed: {
           color: 000,
           author: {
             name: "Envoyé par" + this.user
           },
           fields: [
             value: message.channel.send(new Date().getTime() - message.createdTimestamp + " ms")
           ]
         }})
    }
    if (message.content === prefix + 'help') {
        message.channel.send({embed: {
            color: 555,
            author: {
              name: 'Skariie_#2823',
              icon_url: 'https://skariie.tk/img/skariie.png'
            },
            title: "Menu d'aide",
            description: "Ce menu d'aide vous affiche les information utiles et des commandes créer avec ❤ pour vous.",
            fields: [
              {
                name: "Informations",
                value: "Le serveur Discord est joingnable par deux lien, https://discord.me/SkariieOff/ et https://discord.gg/bvj6Zdg/. L'adresse du site web de Skariie_ est : https://skariie.tk/. Le préfix actuel du bot Discord est ``" + prefix + "``."
            },
            {
                name: "Commandes",
                value: "Toutes les commandes disponnibles seront affiché ci-dessous. || !help | Pour afficher ce menu d'aide"
            },
            {
                name: "Commandes (bêta)",
                value: "Les commandes affichées ci-dessous sont en bêta ou même encore en développement. Vous pourrez l'utiliser mais n'est pas conseillé"
            }
            ],
            timestamp: new Date(),
            footer: {
              text: "© Copyright Skariie_",
              icon_url: 'https://skariie.tk/img/skariie.png'
            }
          }
        });
    }
})

Bot.login(process.env.TOKEN)
