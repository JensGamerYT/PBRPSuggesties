const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
  name: "suggest",
  description: "Maak een suggestie die volgens jou een verbetering kan maken aan de server",
  options: [
    {
      name: "type",
      description: "Selecteer het type suggestie",
      required: "true",
      type: "STRING",
      choices: [
        {
          name: "In-Game",
          value: "In-Game",
        },
        {
          name: "Discord",
          value: "Discord",
        },
        {
          name: "Pannenkoek",
          value: "Pannenkoek",
        },
      ]
    },
    {
      name: "name",
      description: "Geef een naam voor jouw suggestie.",
      type: "STRING",
      required: true,
    },
    {
      name: "functie",
      description: "Beschrijf de functie van jouw suggestie. (Beschrijf waarvoor je suggestie bedoeld is).",
      type: "STRING",
      required: true,
    },
  ],
  /**
    *
    * @param {CommandInteraction} interaction
    */
  async execute(interaction) {
    const { options } = interaction;
    
    const type = options.getString("type");
    const name = options.getString("name");
    const funcs = options.getString("functie");

    
    const Response = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${interaction.member} heeft een _**${type}**_ verbetering/aanpassing voorgesteld.`)
    .addFields(
      {name: '\u200b', value: '\u200b'},
      {name: "Name", value: `${name}`, inline: true},
      {name: '\u200b', value: '\u200b', inline: true},
      {name: "Functie", value: `${funcs}`, inline: true},
      {name: '\u200b', value: '\u200b'}
    )
    .setFooter("🟢 = Akkoord       |       🔴 = Niet akkoord       |       ❓ = Wat bedoel je")
    const message = await interaction.reply({embeds: [Response], fetchReply: true})
    message.react("🟢")
    message.react("🔴")
    message.react("❓")
  }
}