import { Snowflake } from "./Snowflake.ts";

export type AllowedMentions = {
    parse: AllowedMentions[];
    roles: Snowflake[];
    users: Snowflake[];
    repliedUser: boolean;
};

export enum AllowedMentionTypes {
    ROLE = "roles",
    USER = "users",
    EVERYONE = "everyone",
}
