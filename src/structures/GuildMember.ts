import { Snowflake } from "./Snowflake.ts";
import { User } from "./User.ts";

export type GuildMember = {
    // https://github.com/discord/discord-api-docs/pull/2295#discussion_r543021673
    user: User;
    nick?: string;
    roles: Snowflake[];
    joinedAt: Date;
    premiumSince?: Date;
    deaf?: boolean;
    mute?: boolean;
};
