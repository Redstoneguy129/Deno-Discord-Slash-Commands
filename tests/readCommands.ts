import DiscordInteractions from "../mod.ts";

const interaction = new DiscordInteractions({
    applicationId: "",
    authToken: "",
    publicKey: "",
});

await interaction.createApplicationCommand({
    name: "avatar",
    description: "get a users avatar",
    options: [
        {
            name: "big",
            description: "should the image be big",
            type: 5,
        },
    ],
}, "").then(console.log).catch(console.log)
