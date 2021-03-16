import { AllowedMentions } from "./AllowedMentions.ts";
import { Embed } from "./Embed.ts";
import { MessageFlags } from "./MessageFlags.ts";

type ContentMessage = {
    tts?: boolean;
    content: string;
    // note that embeds do not work with ephemeral messages
    embeds?: Embed[];
    allowedMentions?: AllowedMentions;
    flags?: MessageFlags;
};

type EmbedMessage = {
    tts?: boolean;
    content?: string;
    // note that embeds do not work with ephemeral messages
    embeds: Embed[];
    allowedMentions?: AllowedMentions;
    flags?: MessageFlags;
};

export type InteractionApplicationCommandCallbackData = ContentMessage | EmbedMessage;
