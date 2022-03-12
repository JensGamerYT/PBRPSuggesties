const { CommandInteraction } = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "Geeft het help menu",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
  execute(interaction, client) {

    const help = new MessageEmbed()
        .setTitle("Help Menu")
        .setDescription("Bekijk welke commando's jij kan uitvoeren.")
        .setColor("#0800ff")
        .setFooter("Provincie BrabantRP® | Dat voelt als RolePlay")
        .addFields(
            {name: "\u200b", value: "\u200b", inline: true},
            {name: "Ping", value: "Check of de bot online is door dit commando uit te voeren. Als de bot antwoord met `POING`, dan is de bot online. Als de bot niet antwoord, contacteer dan de bot developper."},
            {name: "\u200b", value: "\u200b", inline: true},
            {name: "*Meer Admin-commands volgen nog", value: "\u200b"});
    interaction.reply({embeds: [help], ephemeral: true })
}
}