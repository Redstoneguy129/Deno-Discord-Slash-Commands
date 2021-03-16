import { ApplicationCommandInteractionData } from "./ApplicationCommandInteractionData.ts";
import { GuildMember } from "./GuildMember.ts";
import { InteractionType } from "./InteractionType.ts";
import { Snowflake } from "./Snowflake.ts";

type ApplicationCommand = {
    id: Snowflake;
    type: InteractionType.APPLICATION_COMMAND;
    data: ApplicationCommandInteractionData;
    guildId: Snowflake;
    channelId: Snowflake;
    member: GuildMember;
    token: string;
};

export type Interaction = ApplicationCommand | {
    id: Snowflake;
    type: Exclude<InteractionType, InteractionType.APPLICATION_COMMAND>;
    data?: ApplicationCommandInteractionData;
    guild_id: Snowflake;
    channel_id: Snowflake;
    member: GuildMember;
    token: string;
};
