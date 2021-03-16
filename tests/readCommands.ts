import DiscordInteractions from "../mod.ts";

const interaction = new DiscordInteractions({
    applicationId: "792486569582919711",
    authToken: "NzkyNDg2NTY5NTgyOTE5NzEx.X-eaoQ.jYF1FhvX1ITct0ymT1SeNzHEeE0",
    publicKey: "8197ae93a6221a7a839f5f16b212ba4b9ddf968ce6e0e5ba58455dd0d7b77d28",
});

await interaction
    .getApplicationCommands("792486277840240700")
    .then(console.log)
    .catch(console.error);
