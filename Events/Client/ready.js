module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`${client.user.username} is online.`);
    client.user.setActivity("-help", { type: "LISTENING" });

    const statusOptions = [
        "/suggest",
        "Provincie Brabant RP®",
    ]

    let counter = 0;

    let time = 1 * 60 * 100; //|1 Minuut.|
    //let time = 5 *1000;

    const updateStatus = () => {

        client.user.setPresence({

            status: "online",
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]
        });

        if(++counter >= statusOptions.length) counter = 0;

        setTimeout(updateStatus, time);
    }
    updateStatus();

  } 
};