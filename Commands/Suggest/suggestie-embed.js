const { CommandInteraction } = require("discord.js");
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "embedsuggest",
    description: "Geeft het suggestie-help embed weer",
    permission: "ADMINISTRATOR",
      /**
     * 
     * @param {CommandInteraction} interaction 
     */
  execute(interaction, client) {

const { channel } = interaction;


    const suggestEmbed = new MessageEmbed()
        .setTitle("Suggestie aanmaken")
        .setDescription("Als jij een suggestie wilt aanmaken maar niet goed weet hoe het moet? Hieronder staat het stap voor stap uitgelegt!")
        .setColor("#30d5c8")
        .setFooter("Provincie BrabantRP® | Dat voelt als RolePlay")
        .addFields(
            {name: "\u200b", value: "\u200b", inline: true},
            {name: "1.", value: '```Blijf hier in dit kanaal. ```, (<#939499111651106856>)'},
            {name: "2.", value: "```Typ .suggestie [jouw suggestie]```"},
            {name: "3.", value: "```Jouw suggestie is hier nu!```"},
            {name: "\u200b", value: "\u200b", inline: true});
    interaction.reply({embeds: [suggestEmbed] }).then(async (msg) => {

        message.delete();
      ephemeral: true
    }).catch(err => {
        console.log(err);
    });



  }
}