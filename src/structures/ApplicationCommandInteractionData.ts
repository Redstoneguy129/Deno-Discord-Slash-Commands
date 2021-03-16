import { ApplicationCommandInteractionDataOption } from "./ApplicationCommandInteractionDataOption.ts";
import { Snowflake } from "./Snowflake.ts";

export type ApplicationCommandInteractionData = {
    id: Snowflake;
    name: string;
    options?: ApplicationCommandInteractionDataOption[];
};
